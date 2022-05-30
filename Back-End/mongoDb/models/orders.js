const mongoose = require('mongoose');
const { isEmail } = require('validator');


const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate: [isEmail, 'Enter a valid email address']
    },

    phone: {
        type: String,
        required: true,
    },

    products: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Sneaker', default: []
    }

});

const Order = mongoose.model('Order', schema);

module.exports = { Order }