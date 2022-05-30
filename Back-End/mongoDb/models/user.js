const mongoose = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, 'First Name must be at least 2 characters'],
    },

    lastName: { 
        type: String, 
        required: true,
        minLength: [2, 'Last Name must be at least 2 characters'],
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email address']
    },

    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters'],
    },

    phone: {
        type: String,
        required: true,
    },

    cards: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Card', default: []
    }

});

schema.plugin(uniqueValidator);
schema.pre('save', async function (next) {
    let {password} = this
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(password, 10)
    }
    next();
})

const User = mongoose.model('User', schema);

module.exports = { User };