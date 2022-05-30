const mongoose = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email address']
    },

    code: {
        type: String,
        required: true
    }
    
});

schema.plugin(uniqueValidator);

const Discount = mongoose.model('Discount', schema);

module.exports = { Discount };