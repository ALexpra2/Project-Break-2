const basicInfo = require('./basicInfo');
const products = require('./products');
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...products,
    ...components
};

//utilizo ...x para traerme una copia
