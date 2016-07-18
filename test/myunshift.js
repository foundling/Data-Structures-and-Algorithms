'use strict';

var expect = require('chai').expect,
    mocha = require('mocha'),
    myunshift = require('./../lib/myunshift.js');
    

describe('myunshift()', function() {

    var unshift_reg1 = [1,2,3];
    var unshift_reg2 = [1,2,3];

    var unshift_empty1 = [];
    var unshift_empty2 = [];

    it('It should return an element and and mutate the array by deleting its last element. ', function() {
        expect(unshift_reg1.unshift()).to.eql(unshift_reg2.myunshift());
        expect(unshift_empty1.unshift()).to.eql(unshift_empty2.myunshift());
        //expect(null1.unshift()).to.eql(null2.myunshift());
    });  

});

/*

var array = [1,2,3,4];
console.log(array.myunshift());
console.log(array.length);
*/
