const { Schema, model } = require('mongoose');

const CategoriaSchema  = Schema({
    nombreCategoria: {
        type: String,        
        required: [true, 'debe nombrar la categoria']
    },
    descripcion: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true,
    },
   
});

module.exports = model('Categoria', CategoriaSchema);