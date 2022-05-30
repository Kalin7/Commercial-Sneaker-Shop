const { createOrder, getOrderById } = require('../managers/orders');
const { errorHandler } = require('../utils/helpers');



function postOrder() {
    return async (req, res) => {
        try {
            const order = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                products: req.body.products
            }

            const created = await createOrder(order);
            res.json({msg: `Your oreder was succsessfuly created! You have `});
        }catch (err) {
            const errorMessage = errorHandler(err);
            res.json({msg: errorMessage});
        }
    }
};


module.exports = {
    postOrder,
}