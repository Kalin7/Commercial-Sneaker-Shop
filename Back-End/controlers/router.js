const router = require('express').Router();
const {login, register}  = require('./user');
const { adminLoginPage, adminLoginAction, createRecord, 
        getRecords, getRecordById, createRecordTemplate } = require('./admin');
const { getProducts, getProductById } = require('./products');
const { postOrder } = require('./orders');
const { isUserExist } = require('../middlewear/user');
const { registerUserEmail } = require('./discount');
const { isDiscountAllreadyTaken } = require('../middlewear/discount');
const { isOrderHaveDiscount} = require('../middlewear/order');
const isValidAdminPassword = require('../middlewear/admin');


router.get('/admin', adminLoginPage());
router.get('/admin/create-record', createRecordTemplate());
router.get('/admin/get-all-records', getRecords());
router.get('/admin/record/:id/details', getRecordById());

router.get('/records', getProducts());
router.get('/records/:id/details', getProductById());

router.post('/admin', isValidAdminPassword(), adminLoginAction());
router.post('/admin/create-record', createRecord());

router.post('/user/login', isUserExist(), login());
router.post('/user/register', register());
router.post('/user/order', isOrderHaveDiscount(), postOrder());
router.post('/user/order/discount-request', isDiscountAllreadyTaken(), registerUserEmail());

router.use('**', (req, res) => {
    res.status(404).json({msg: 'Page not found'})
});

module.exports = { router }