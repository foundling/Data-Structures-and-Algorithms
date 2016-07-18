'use strict';

var expect = require('chai').expect,
    mocha = require('mocha'),
    mypush = require('./../lib/mypop.js');

Array.prototype.mypush = mypush;
    
describe('mypush()', function() {

    var empty1 = [];
    var empty2 = [];

    it('It should add an element to an array and then return the length of the modified array. ', function() {
        
        // No Arguments 
        expect(empty1.push()).to.eql(empty2.mypush());
       
        // One Argument 
        expect(empty1.push('1')).to.eql(empty2.mypush('1'));
        
        // Many Arguments 
        expect(empty1.push('1','2')).to.eql(empty2.mypush('1','2'));
    });  
});

/*

var array = [1,2,3,4];
console.log(array.mypush());
console.log(array.length);
*/
