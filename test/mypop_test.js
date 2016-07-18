'use strict';

var expect = require('chai').expect,
    mocha = require('mocha'),
    mypop = require('./../lib/mypop.js');
    

describe('mypop()', function() {

    var reg1 = [1,2,3];
    var reg2 = [1,2,3];

    var empty1 = [];
    var empty2 = [];


    it('It should return an element and and mutate the array by deleting its last element. ', function() {
        expect(reg1.pop()).to.eql(reg2.mypop());
        expect(empty1.pop()).to.eql(empty2.mypop());
    });  
});

/*

var array = [1,2,3,4];
console.log(array.mypop());
console.log(array.length);
*/
