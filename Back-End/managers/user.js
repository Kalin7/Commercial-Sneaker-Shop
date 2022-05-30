const { User } = require('../mongoDb/models/user');

async function registerUser (data, prepare) {
    const user = await User.create(prepare(data));
    return user;    
}

module.exports = {
    registerUser,
}