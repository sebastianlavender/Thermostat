function Thermostat () {
  this.temp = 20;
  this._minTemp = 10;
};

Thermostat.prototype.up = function(number) {
  this.temp += number;
};

Thermostat.prototype.down = function(number) {
  if (this.temp - number < this._minTemp) {
    this.temp = this._minTemp;
  } else {
    this.temp -= number;
  };
};
