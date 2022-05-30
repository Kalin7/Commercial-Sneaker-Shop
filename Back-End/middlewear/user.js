const bcrypt = require('bcrypt');
const { User } = require('../mongoDb/models/user');
const { checkData } = require('../utils/helpers');

function isUserExist() {
    return async (req, res, next) => {
        
        try {
            checkData(req.body);
            const {email, password} = req.body;
            const user = await User.findOne({email: email})
            if (user && await bcrypt.compare(password, user.password)) {
                res.locals.user = user;
                next();
            }else {
                throw new Error('Wrong email or password')
            }
        } catch (err) {
            res.status(400).json({msg: err.message})
        }
    }
}

module.exports = {
    isUserExist,
}