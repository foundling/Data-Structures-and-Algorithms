'use strict';

var expect = require('chai').expect,
    mocha = require('mocha'),
    dedup = require('./../lib/dedup.js');
    

describe('dedup()', function() {

    // integers
    var ints1 = [1,2,2,3,3];
    var ints2 = [1,2,3];

    var objs1 = [{},{'1':2},{2:3}];
    var objs2 = [];

    it('should take an array and return a copy with all the duplicates removed', function() {
        expect(dedup(ints1)).to.deep.equal(ints2);
    });  

});
