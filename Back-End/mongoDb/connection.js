const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/SneakersShopDb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected...')
}