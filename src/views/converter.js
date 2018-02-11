import { _qs, _on } from '../helpers/';
import { convertFahToCel, convertCelToFah } from '../helpers/converts';

const ConverterView = (function(){

  /**
   * @constructor
   * View
   * @param {Object} model
   */
  function View() {
    
    this._inputCel = _qs('.app__input-control[data-temp="cel"]');
    this._inputFah = _qs('.app__input-control[data-temp="fah"]');
  }

  /** 
   * Delegates handing of changing celsius temperature to the controller
   * @param {func} handler
   */
  View.prototype.changeTempCel = function(handler) {
    _on(this._inputCel, 'input', handler)
  }
  /** 
   * Delegates handing of changing Fahrenheit temperature to the controller
   * @param {func} handler
   */
  View.prototype.changeTempFah = function(handler) {
    _on(this._inputFah, 'input', handler)
  }

  /**
   * Updates view
   */
  View.prototype.update = function() {
    const temp = this.model.getTemp();

    updateInput(this._inputCel, temp, null);
    updateInput(this._inputFah, temp, convertCelToFah);
  }

  // Private methods
  /**
   * updates input value
   * @param {Node} input
   * @param {number} value
   * @param {funct} converter
   */
  function updateInput(input, value, converter) {
    let newVal = converter ? converter(value) : value;

    input.value = Math.round(newVal*10)/10;
  }


  return View;
})();

export default ConverterView;