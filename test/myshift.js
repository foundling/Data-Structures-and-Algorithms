'use strict';

var expect = require('chai').expect,
    mocha = require('mocha'),
    myshift = require('./../lib/myshift.js');
    

describe('myshift()', function() {

    var shift_reg1 = [1,2,3];
    var shift_reg2 = [1,2,3];

    var shift_empty1 = [];
    var shift_empty2 = [];

    it('It should return an element and and mutate the array by deleting its last element. ', function() {
        expect(shift_reg1.shift()).to.eql(shift_reg2.myshift());
        expect(shift_empty1.shift()).to.eql(shift_empty2.myshift());
        //expect(null1.shift()).to.eql(null2.myshift());
    });  

});

/*

var array = [1,2,3,4];
console.log(array.myshift());
console.log(array.length);
*/
