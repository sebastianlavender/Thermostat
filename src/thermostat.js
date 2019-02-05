function Thermostat () {
  this.temp = 20;
  this._minTemp = 10;
  this.powerSaving = true;
};

Thermostat.prototype.up = function(number) {
  if (this.powerSaving === true) {
    if (this.temp + number > 25) {
      this.temp = 25;
    } else {
      this.temp += number;
    }
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
