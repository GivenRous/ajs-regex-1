export default class Validator {
  validateUsername(name) {
    this.name = name;
    return this.name.search(/^([a-z]+(\d{0,3}[_-]+)*\d{0,3})*[a-z]+$/i) !== -1;
  }
}
