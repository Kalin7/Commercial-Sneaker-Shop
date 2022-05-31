function checkData(data) {
    console.log(data);
    const entries = Object.values(sanitizeData(data))
        .map((d) => isStringValid(d))
    if (entries.includes(false)) {
        throw new Error('Invalid data entry');
    } 
     if (data.repeatPass && data.password !== data.repeatPass) {
        throw new Error('Password does not match');
    }
    
}

function isStringValid(str) {
    const pattern = /^\s+$/;
    return str.length < 1 || pattern.test(str) ? false : true;
}

function sanitizeData(data) {
    for (const key in data) {
        data[key] = data[key].trim();
    }
    return data;
}

function prepareRegistrationData(data) {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: data.password
    }
}

function errorHandler(err) {
    let e = [];
    if (err.errors === undefined) {
        e.push(err.message)
    }else {
        Object.keys(err.errors).forEach(key => e.push(err.errors[key]))
    }
    return e.join('\n');
}

function generateDiscountCode () {
    return (Math.random(1000000).toString(16)).split('.').pop();
}

module.exports = {
    checkData,
    prepareRegistrationData,
    errorHandler,
    generateDiscountCode
}
