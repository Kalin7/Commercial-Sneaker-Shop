const { Discount } = require('../mongoDb/models/discounts');

async function registerDiscount(uEmail, uCode) {
    console.log(uEmail)
    const dsc = {
        email: uEmail,
        code: uCode
    } 
    return await Discount.create(dsc)
}

module.exports = {
    registerDiscount,

}