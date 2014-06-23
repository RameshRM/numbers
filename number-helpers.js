var happy = require('./lib/happy-numbers/happy-number-proto');

module.exports = {
    'ishappy' : function(input){
        return Number(input).ishappy();
    }
}