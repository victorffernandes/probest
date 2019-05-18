function probabilidade(espaçoAmostral) {
    return (evento, evento2) => {

        // Probabilidade condicional
        if (evento && evento2) {
            return (interseção(evento, evento2).length / espaçoAmostral.length) / (evento.length / espaçoAmostral.length);
        }

        return evento.length / espaçoAmostral.length;
    }
}

function uniao(x, y) {
    return x.concat(y);
}

function interseção(x, y) {
    return x.filter((elemento) => y.includes(elemento));
}




a = [1, 3, 5, 6, 7, 2, 4, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24];
b = [1, 3, 5, 6,8,9, 24, 29, 210, 211];
espaçoAmostral = {length : 36};


const P = probabilidade(espaçoAmostral);
console.log(P(a, b));

module.exports = {
    probabilidade,
    uniao,
    interseção
}