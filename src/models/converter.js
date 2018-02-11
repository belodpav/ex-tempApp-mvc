const ConverterModel = (function(){
  /**
   * @constructor
   * Model
   * @param {Object} view
   * @param {number} temp - initial temperature value in celsius
   */
  function Model(temp) {
    this._temp = temp;
  }

  /**
   * Set temperature
   * @param {number} temp - tempearature value in celsius
   */
  Model.prototype.setTemp = function(temp) {
    this._temp = temp;
    notify.call(this);
  }

  /**
   * Get temperature
   * @return {number}
   */
  Model.prototype.getTemp = function() {
    return this._temp;
  }

  // Private methods
  
  /**
   * Notify observer that model was changed
   */
  function notify() {

    this.view.update();
  }

  return Model;
})();

export default ConverterModel;