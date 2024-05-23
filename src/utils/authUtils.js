const jwt = require("jsonwebtoken")


function generateToken(user){
    const payload = {
        id:user._id,
        email:user.email,
    }
    const expiresIn = 30 * 86400;
    return jwt.sign(payload, process.env.JWT_SECRET,{expiresIn})
}
function generateRefreshToken(user){
    const payload = {
        id:user._id,
        email:user.email,
    }
    return jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: "30d"})
}

function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}

module.exports = {generateToken, generateRefreshToken, verifyToken}