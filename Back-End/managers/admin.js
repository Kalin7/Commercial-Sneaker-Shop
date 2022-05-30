const { Sneaker } = require('../mongoDb/models/sneakers');


async function create(data) {
    
    const sData = {
        gender: data.gender,
        brand: data.brand,
        model: data.model,
        price: data.price,
        info: data.info
    }

    const sneaker = await Sneaker.create(sData);
    return sneaker;
}

async function getAllRecords() {
    return await Sneaker.find({}).lean();
}

async function getById(id) {
    return await Sneaker.findById(id).lean();
}

module.exports = { 
    create,
    getAllRecords,
    getById
};