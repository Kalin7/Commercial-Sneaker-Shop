let info = [];
function normalizeData(inputData, extract) {
    const data = extract(inputData);
    if (data.yes == undefined) {
        info.push(data)
    }else {
        return recordData();
    }
    
}

function extractImg(data) {
    if (data.imgUrl) {
        let img = data.imgUrl.split(',');
        data.images = [];
        img.forEach((i) => {
            data.images.push({imgUrl: i.trim()});
        })
    }
    delete data.imgUrl;
    return data;
};

function recordData() {
    const mainInfo = info.shift();
    const details = info;
    info = [];
    return {
        gender: mainInfo.gender,
        brand: mainInfo.brand,
        model: mainInfo.model,
        price: mainInfo.price,
        info: details
    }
}



module.exports = {
    normalizeData,
    extractImg
}