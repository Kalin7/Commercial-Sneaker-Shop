require('dotenv').config();

module.exports = () => {
    return (req, res, next) => {
        const password = req.body.password;
        if (password != process.env.ADMIN_PASSWORD) {
            res.status(401).json({msg: 'Invalid admin password'});
        } else {
            next();
        }
    }
}