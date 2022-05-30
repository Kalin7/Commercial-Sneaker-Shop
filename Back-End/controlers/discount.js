const { errorHandler, generateDiscountCode } = require('../utils/helpers');
const { registerDiscount } = require('../managers/discount');
const { clientDiscount } = require('../servises/modeMailer');


function registerUserEmail() {
    return async (req, res) => {
        try {
            const email = req.body.email;
            const code = generateDiscountCode();
            const d = await registerDiscount(email, code);
            await clientDiscount(d);
           
        } catch (err) {
            const error = errorHandler(err);
            res.json(error);
        }
    }
}

module.exports = {
    registerUserEmail,
}