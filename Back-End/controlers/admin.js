const { create, getAllRecords, getById } = require('../managers/admin');
const { errorHandler } = require('../utils/helpers');
const { normalizeData, extractImg } = require('../utils/admin');

function createRecordTemplate() {
    return async (req, res) => {
        res.render('create-record')
    } 
};

function createRecord() {
   return async (req, res) => {
       try {
           
            const record = normalizeData(req.body, extractImg);
            
            if (record != undefined) {
                
                const created =  await create(record);
                res.redirect('admin/get-all-records');
            }
           
       }catch (err) {
        const error = errorHandler(err);
        res.status(400).json({msg: error});
       }
   } 
};

function adminLoginPage() {
    return (req, res) => {
        res.render('admin-login')
    }
}

function adminLoginAction() {
    return (req, res) => {
         res.render('admin-menu');
    }
}

function getRecords() {
    return async (req, res) => {
        try {
            const records = await getAllRecords();
            res.render('admin-get-records', {records});
        }catch (err) {
            res.status(400).json({msg: err.message});
        }
    }
}

function getRecordById() {
    return async (req, res) => {
        const id = req.params.id;
        const record = await getById(id);
        res.render('record-details', {record, id});
    }
}

module.exports = {
    createRecordTemplate,
    createRecord,
    adminLoginPage,
    adminLoginAction,
    getRecords,
    getRecordById
}