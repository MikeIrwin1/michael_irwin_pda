var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 to 4 to get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('should subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply 3 by 5 to get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide 21 by 7 to get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick('3');
    calculator.numberClick('3');
    calculator.numberClick('3');
    assert.equal(calculator.runningTotal, 333);
  })

  it('should chain multiple operators', function(){
    calculator.numberClick('3');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('*');
    calculator.operatorClick('5');
    assert.equal(calculator.runningTotal, 25);
  })

  it('should chain multiple operators', function(){
    calculator.numberClick('3');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.clearClick();
    calculator.numberClick('5');
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 8);
  })

});
