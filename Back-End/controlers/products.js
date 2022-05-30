const { errorHandler } = require('../utils/helpers');
const { getRecords, getById } = require('../managers/products');

function getProducts() {
    return async (req, res) => {
        try {
            const records = await getRecords();
            res.json(records);
        }catch (err) {
            const errorMessage = errorHandler(err);
            res.json({msg: errorMessage});
        }
    }
}

function getProductById () {
    return async (req, res) => {
        try {
            console.log(req.params.id);
            const product = await getById(req.params.id);
            res.json(product);
        }catch (err) {
            const errorMessage = errorHandler(err);
            res.json({msg: errorMessage});
        }
    }
}

module.exports = { 
    getProducts,
    getProductById
};