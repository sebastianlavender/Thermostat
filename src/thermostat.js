function Thermostat () {
  this.temp = 20
}

Thermostat.prototype.up = function (number) {
  this.temp += number;
};
