const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        minLength: [22, 'Card Number must contains 22 characters'],
        maxLength: [22, 'Card Number must contains 22 characters']
    },

    expDate: {
        type: String,
        required: true,
    },

    securityCode: {
        type: String,
        required: true,
        minLength: [3, 'Security Code must contains 3 characters'],
        maxLength: [3, 'Security Code must contains 3 characters']
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', default: '',
    }
});

const Card = mongoose.model('Card', schema);

module.exports = { Card }