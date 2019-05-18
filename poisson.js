const fatorial = require('./factorial');

function poisson(lambda){
    return function(x){
        return Math.pow(Math.E, -lambda) * Math.pow(lambda, x)/ fatorial(x);
    }
}

console.log(poisson(9)(0));

module.exports = poisson;