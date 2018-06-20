'use strict'

var express = require('express');
var BusquedaController = require('../controllers/busqueda');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/buscar-artista/:texto', BusquedaController.busquedaArtista);
api.get('/buscar-album/:texto', BusquedaController.busquedaAlbum);
api.get('/buscar-cancion/:texto', BusquedaController.busquedaCancion);


module.exports = api;
