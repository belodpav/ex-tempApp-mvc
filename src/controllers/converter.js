import { convertFahToCel, convertCelToFah } from '../helpers/converts';
import { isValidTemp } from '../helpers/validation';

const ConverterController = (function(){

  /**
   * @constructor
   * Controller
   * @param {Object} view
   * @param {Object} model
   */
  function Controller(view, model) {
    this._view = view;
    this._model = model;

    this._view.changeTempCel(handleCelTemp.bind(this));
    this._view.changeTempFah(handleFahTemp.bind(this));
  }

  /**
   * Handing Celsius input changes
   */
  function handleCelTemp(e) {
    const value = e.target.value;

    if (isValidTemp(value)) {
      this._model.setTemp(+value);
    }
    
  }

  /**
   * Handing Fahrenheit input changes
   */
  function handleFahTemp(e) {
    let value =  e.target.value;

    if (isValidTemp(value)) {
      value = convertFahToCel(+value);
      this._model.setTemp(value);
    }
  }

  return Controller;
})();

export default ConverterController;