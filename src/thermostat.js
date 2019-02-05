function Thermostat () {
  this.temp = 20;
  this._minTemp = 10;
  this.powerSaving = true;
};

Thermostat.prototype.up = function(number) {
  if (this.powerSaving === true) {
    var maxTemp = 25;
  } else {
    var maxTemp = 32;
  };

  if (this.temp + number > maxTemp) {
    this.temp = maxTemp;
  } else {
    this.temp += number;
  };
};

Thermostat.prototype.down = function(number) {
  if (this.temp - number < this._minTemp) {
    this.temp = this._minTemp;
  } else {
    this.temp -= number;
  };
};

Thermostat.prototype.set = function() {
  this.powerSaving ^= true;
};
