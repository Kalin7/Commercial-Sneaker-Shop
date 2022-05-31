const { Discount } = require('../mongoDb/models/discounts');


function isOrderHaveDiscount() {
    return  async (req, res, next) => {
        const email = req.body.email;
        const clientCode = req.body.discount;
        const discount = await Discount.findOne({ email: email})

        if (discount && discount.code === clientCode) {
            res.locals.discount = {status: true}
        }else {
            res.locals.discount = {status: false}
        }

        next();

    }
}

module.exports = {isOrderHaveDiscount}
