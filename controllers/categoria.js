
const { response, request } = require('express');
const Categoria = require('../models/categoria');
const { Promise } = require('mongoose');
const categoria = require('../models/categoria');


const getCategoria = async(req = request, res = response) => {

    res.json({
        msg: 'get',
    });
}

const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const {nombreCategoria, descripcion} = req.body;
    const CategoriaGuardadoDB = new Categoria ({nombreCategoria, descripcion});
   
    //Guardar en DB
    await CategoriaGuardadoDB.save();


    res.json({
        msg: 'post',
        CategoriaGuardadoDB
    });
}


const putCategoria = async(req = request, res = response) => {

    const { id } = req.params;
    //se establecen que paramaetros no son cambiables por el usuario
    const { _id,...resto } = req.body;
    

    //Editar al usuario por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put',
        id,
        categoriaEditado
    })
}

const deleteCategoria = async(req = request, res = response) => {
    const { id } = req.params;
    const categoriaEliminado = await Categoria.findByIdAndDelete(id)

    res.json({
        msg: 'delete',
        id,
        categoriaEliminado
    })
}


module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}




