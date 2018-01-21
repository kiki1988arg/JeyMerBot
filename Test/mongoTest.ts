import JeyMerBot from '../Dev/index'
// var JeyMerBot = require('../Bot/');
import {expect} from 'chai'
//var mocha = require('mocha');


describe('mongo jeymerbot', () => { 
    it('should return probando', async () => {
        var jmb = new JeyMerBot();
        var res = await jmb.getMessage()
        await expect(res).to.equal('probando');
    });  
  });