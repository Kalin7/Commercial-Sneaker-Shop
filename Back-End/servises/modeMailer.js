const nodeMailer  = require('nodemailer');

async function clientOrder(order) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kaley.kovacek28@ethereal.email',
            pass: 'Dwf36Ynp7Y4Zrd5cRq'
        }
    });

    await transporter.sendMail({
        from: 'Kalin from <kaley.kovacek28@ethereal.email>', // sender address
        to: `${order.email}`, // list of receivers
        subject: `Order ${order._id}`, // Subject line
        text: `Hello ${order.firstName}?`, // plain text body
        html: `
            <style>
                img {
                    width: 200px;
                    heigth: 200px;
                }
            </style>
            <h1>Order ${order._id}</h1>
            <div>
                <img src=${order.products[0].info[0].images[0].imgUrl}>    
            </div>
        
        `, // html body
    });
}

async function clientDiscount(discount) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kaley.kovacek28@ethereal.email',
            pass: 'Dwf36Ynp7Y4Zrd5cRq'
        }
    });

    await transporter.sendMail({
        from: 'Kalin from <kaley.kovacek28@ethereal.email>', // sender address
        to: `${discount.email}`, // list of receivers
        subject: `Discount Code`, // Subject line
        text: `Hello ${discount.email}?`, // plain text body
        html: `
            <p>Dear Mr/Mrs, we send to You discount activation code</p>
            <p>Code: ${discount.code} </p>
        
        `, // html body
    });
}



module.exports = {
    clientOrder,
    clientDiscount,
   
}