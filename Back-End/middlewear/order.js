const { Discount } = require('../mongoDb/models/discounts');
const { Sneaker } = require('../mongoDb/models/sneakers');

function isOrderHaveDiscount() {
    return  async (req, res, next) => {
        const email = req.body.email;
        const code = req.body.discount;
        const prods = req.body.products;
        const products = [];
     
        prods.map((p) => products.push(Promise.all([Sneaker.find({_id: p})]))) 

        console.log(products);
        next();
    }
}

module.exports = {isOrderHaveDiscount}