describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization", function() {

    it("the starting temprature should be 20 degrees", function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#up', function() {

    it('increases temperature by 5 degrees', function() {
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });

    it('if powerSaving is on limit temp to 25', function() {
      thermostat.up(10);
      expect(thermostat.temp).toEqual(25);
    });

    it('if powerSaving is off limit temp to 32', function() {
      thermostat.set();
      thermostat.up(13);
      expect(thermostat.temp).toEqual(32);
    });
  });

  describe('#down', function() {

    it('decreases temperature by 5 degrees', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);
    });

    it('does not go lower than 10 degrees', function() {
      thermostat.down(22);
      expect(thermostat.temp).toEqual(10);
    });
  });

});
