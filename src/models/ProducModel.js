const mongoose = require("../config/connections");

const schemaProducto = new mongoose.Schema({
    nombre: {
      type: [String, "Debe ser texto" ],
      required: [true,"el campo debe ser obligatorio"]
    },
    precio: {
      type: [Decimal128, "Debe tener decimal"],
      default: 0.0,
      min: [0,0, "los precios no pueden ser negativo"]
    },
    referencia:{
      type: [Number, "Debe ser numerico"],
      required: [true, "el campo debe ser obligatorio"],
    }

  }
,{versionKey:false});

module.exports = mongoose.model("Producto", schemaProducto);
module.exports = producto;
