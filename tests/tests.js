(function(){
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var Shoe = require('../app/shoeClass.js');
  describe("Shoe Class: Create a shoe, and wear it", function() {

    it("The shoe should be a type of `object`, and an instance of the `Shoe` class", function() {
      var Heels = new Shoe('Versace');
      expect(typeof Heels).to.equal(typeof {});
      expect(Heels instanceof Shoe).to.be.true;
    });

    it("The Shoe should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Shoe();
      expect(gm.brands).to.equal('General');
      expect(gm.sizes).to.be.equal('7');
    });

    it("The Shoe brand and size should be a property of the car", function() {
      var flats  = new Shoe('Dolce and Gabanna', '17');
      expect(flats.brands).to.be.equal('Dolce and Gabanna');
      expect(flats.sizes).to.be.equal('17');
    });

    it("The Shoe should have different prices", function() {
      var sandals  = new Shoe('Lowlife', '8',4000);
      expect(sandals.price).to.equal(4000);

      var gladiators = new Shoe('Porshe', '9',20000);
      expect(gladiators.price).to.be.equal(20000);
      gladiators.wearShoe();
      expect(gladiators.isOn).to.be.true;
      expect((function(){return new Shoe('Koenigsegg', 'Agera R',50000);}()).price).to.be.equal(50000);
    });

    it("The Shoe shoud be exclusive if price is greate than 40000 ", function() {
      var marksAndSpenser  = new Shoe('Neverending', '9', 50000);
      expect(marksAndSpenser.price).to.be.equal(50000);
      expect(marksAndSpenser.isExclusive()).to.be.true;

      var camilla = new Shoe('Camilla', '7',8000);
      expect(camilla.price).to.be.equal(8000);
      expect(camilla.isExclusive()).to.not.be.true;
    });

    it("The Shoe shouild be put on at any time", function() {
      var canvas  = new Shoe('Addidas', '10', 10000);
      expect(canvas.isOn).to.not.be.true;
      canvas.wearShoe();
      expect(canvas.isOn).to.be.true;
    });


  });
})();