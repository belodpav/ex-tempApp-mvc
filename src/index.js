import { _on } from './helpers/';
import ConverterView from './views/converter';
import ConverterModel from './models/converter';
import ConverterController from './controllers/converter';

_on(window, 'load', function(){
  let view = new ConverterView(),
      model = new ConverterModel(0),
      controller;

  view.model = model;
  model.view = view;
  controller = new ConverterController(view, model); 
});