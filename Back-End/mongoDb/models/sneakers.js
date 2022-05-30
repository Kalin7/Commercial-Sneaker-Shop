const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'child'],
    },

    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    info: {
        type: Array,
        size: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    
        images: { 
            type: Array,
            imgUrl: {
                type: String,
                required: true,
            }
        }
    },

    price: {
        type: Number,
        required: true,
    },

});


schema.pre('validate', function(next) {
    Object.keys(this.info).forEach((i) => {
        Object.values(this.info[i]).map((val) => {
            if (val == '' || val.length == 0 || /^\s+$/.test(val)) {
                throw new Error('All fields are required')
            }
        })
            
        if (this.info[i].size < 20 || this.info[i].quantity < 0) {
            throw new Error('Invalid size or quantity')
        }
    })
    next();
})

const Sneaker = mongoose.model('Sneaker', schema);

module.exports = { Sneaker };