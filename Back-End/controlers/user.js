const { checkData, prepareRegistrationData, errorHandler } = require('../utils/helpers');
const { registerUser } = require('../managers/user');
const { generateToken } = require('../servises/jwt');

function login() {
    return (req, res) => {
        
        try {
            const user = res.locals.user;
            const token = generateToken(user);
            res.json(token);
        }catch(err) {
            const errorMessage = errorHandler(err);
            res.json({msg: errorMessage});
        }
    }
}

function register() {
    return async (req, res) => {
        try {
            const data =  req.body 
            checkData(data);
            const user = await registerUser(data, prepareRegistrationData);
            const token = generateToken(user);
            res.json(token);
        }catch(err) {
            const errorMessage = errorHandler(err);
            res.status(400).json({msg: errorMessage});
        }
    }
}

module.exports = {
    login,
    register,
}
