const express = require('express')
const app = express();
const router = require("./router/user.router")
const port = process.env.PORT || 4051
const {verifyJWT} = require("./middleware/auth.middleware")


app.use(express.json());



// Test api
app.get("/", async(req,res)=>{
    console.log("HHHH");
    res.send("Test Successfully")
  });

//   app.use(verifyJWT)

  app.use(router)

app.listen(port, () => {
  console.log(`Server is listen on  http://localhost:${port}`)
})