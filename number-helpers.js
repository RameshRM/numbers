var happy = require('./lib/happy-numbers/happy-number-proto');

module.exports['number-helpers'] = {
    'ishappy' : function(input){
        return Number(input).ishappy();
    }
}