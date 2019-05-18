const fatorial = require('./factorial');

function binomial(numExp, prob){

    function combinacaoSimples(n,p){
        return fatorial(n) / (fatorial(p) * fatorial(n-p));
    }

    return function(x){
        return combinacaoSimples(numExp, x) * Math.pow(prob, x) * Math.pow(1 - prob, numExp - x)
    };
}

module.exports = binomial;