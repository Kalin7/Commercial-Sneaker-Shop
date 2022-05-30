require('dotenv').config();
const JWT = require('jsonwebtoken');


function generateToken(user) {
    const payload = {
        id: user._id,
    }

    return JWT.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        {expiresIn: '2d'}
    )
} 

async function verifyToken(token) {
    return JWT.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
        if (err) {
            return err.message;
        }
        return decoded
    });
}

module.exports = {
    generateToken,
    verifyToken,
};