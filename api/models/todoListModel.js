'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  titulo:{
    type: String,
    required: 'Por favor, introduce el nombre de la tarea'
  },
  descripcion:{
    type: String,
    required: 'Por favor, introduce la descripción la tarea'
  },
  fecha_creacion:{
    type: Date,
    default: Date.now
  },
  estado:{
    type:[{
      type: String,
      enum:['pendiente','haciendo','completada' ]
    }],
    default: 'pendiente'
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);
