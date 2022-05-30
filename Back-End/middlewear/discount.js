const { Discount } = require('../mongoDb/models/discounts');

function isDiscountAllreadyTaken() {
    return  async (req, res, next) => {
        const email = req.body.email;
        console.log(email)
        if (await Discount.findOne({email: email})) {
            return res.json({msg: 'User with email ' + email + 'is already taken discount'})
        }else {
            next();
        }
    }    
}

module.exports = {isDiscountAllreadyTaken}