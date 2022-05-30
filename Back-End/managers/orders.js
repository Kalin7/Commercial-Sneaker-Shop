const { Order } = require('../mongoDb/models/orders');

async function createOrder(data) {
    return await Order.create(data);
}

async function getOrderById(id) {
    return await Order.findById(id).populate('products').lean();

}

module.exports = {
    createOrder,
    getOrderById,
};