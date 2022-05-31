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
            const d = res.locals.discount;
            res.json({msg: `Your oreder was succsessfuly created! 
                ${d.status? 'You have discount': 'You does not have discount'}`, status: d.status});
        }catch (err) {
            const errorMessage = errorHandler(err);
            res.json({msg: errorMessage});
        }
    }
};


module.exports = {
    postOrder,
}
