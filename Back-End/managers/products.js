const { Sneaker } = require('../mongoDb/models/sneakers');


async function getRecords() {
    return await Sneaker.find({});
}

async function getById(id) {
    return await Sneaker.findById(id);
}

module.exports = {
    getRecords,
    getById
}