const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
var jwt = require('jsonwebtoken');
const port = process.env.PORT || 4051
const bcrypt = require("bcrypt")
const aws_secret_key = 'oihgyutf56t78y76dfytfytu'


app.use(express.json());

const usersFilePath = path.join(__dirname, 'data', 'user.json');
const productsFilePath = path.join(__dirname, 'data', 'customer.json');

// Helper functions to read and write JSON files
const readJSONFile = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJSONFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Test api
app.get("/", async(req,res)=>{
    console.log("HHHH");
    res.send("Queue Implemented Successfully")
  });

//   Register a user
app.post("/register", async(req,res)=>{
    const {firstName, lastName, email, phone, password} = req.body;
    const users = readJSONFile(usersFilePath);
    // Perform payload validation
    if(!firstName || !lastName || !email || !phone || !password){
        res.send({success: false, data: "All Fields are mendatory"});
    }

    // perform email validation
    req.body.email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let user = users.find(item=> item.email == email);
    if (!emailRegex.test(req.body.email) || user) {
        return res.send({success: false, data: "Please write a valid email"});
    }

    const salt = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(password, salt);

    // Push in to database
    users.push({
        firstName: firstName.trim().replace(/\s+/g, ' ').toLowerCase().charAt(0).toUpperCase() + req.body.firstName.slice(1),
        lastName: lastName.trim().replace(/\s+/g, ' ').toLowerCase().charAt(0).toUpperCase() + req.body.firstName.slice(1),
        email,
        phone,
        password: hashpassword
    });
    writeJSONFile(usersFilePath, users);

    res.send({success: true, data: "User registered successfully"})
});

app.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    const users = readJSONFile(usersFilePath);

    // perform email validation
    req.body.email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isUser = users.find(item=> item.email == email);
    if (!emailRegex.test(req.body.email) || isUser) {
        return res.send({success: false, data: "Please provide a valid email"});
    }
    // compare password
    let isVerify = bcrypt.compare(password, isUser.password)
    if(isUser && isVerify){
        delete isUser.password
        let token = jwt.sign({
            data: isUser.email
          }, aws_secret_key, { expiresIn: 60 * 60 });
        res.send({success: true, data: {isUser, token}});
    }

    res.send({success: false, data: "Please provide a valid credentials"});
});


// Add a user in database
app.post("/add-user", async(req,res)=>{
    const {firstName, lastName, email, phone=''} = req.body;
    const users = readJSONFile(usersFilePath);

    if(!firstName || !lastName || !email){
        res.send({success: false, data: "All Fields are mendatory except Phone number"})
    }

    let user = users.push({
        firstName: firstName.trim().replace(/\s+/g, ' '),
        lastName: lastName.trim().replace(/\s+/g, ' '),
        email,
        phone
    });
    writeJSONFile(usersFilePath, users);

    res.send({success: true, data: user});
});

app.post("/get-user/:email", async(req,res)=>{
    const {email} = req.params;
    const users = readJSONFile(usersFilePath);

    let user = users.find(item=> item.email == email);
    if(user){
        res.send({success: false, data: user});
    }
    res.send({success: false, data: "No user found"});
});


app.delete("/delete-user/:email", async(req,res)=>{
    const {email} = req.params;
    const users = readJSONFile(usersFilePath);

    let user = users.filter(item=> item.email == email);
    if(user.length === users.length){
        return res.send({success: false, data: "No user exists with provided email"});
    }
    res.send({success: true, data: "User deleted successfully"});
});


app.put("/update-user/:email", async(req,res)=>{
    const {firstName, lastName, email, phone} = req.body;
    const users = readJSONFile(usersFilePath);
    let user = users.find(item=> item.email == email);

    if(user){
        users.push({
            firstName: firstName.trim().replace(/\s+/g, ' '),
            lastName: lastName.trim().replace(/\s+/g, ' '),
            email,
            phone
        });
        writeJSONFile(usersFilePath, users);
    }

    res.send({success: true, data: user});
});



app.listen(port, () => {
  console.log(`Server is listen on  http://localhost:${port}`)
})