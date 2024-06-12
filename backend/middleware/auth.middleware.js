const jwt = require('jsonwebtoken');
const secretKey = 'oihgyutf56t78y76dfytfytu'  //Need to set in env file



const verifyJWT = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }
  
    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
      req.user = decoded;
      next();
    });
  };

  module.exports = {verifyJWT}