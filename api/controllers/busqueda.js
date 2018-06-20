'use strict'

var fs = require('fs');
var path = require('path');

var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');

function busquedaArtista(req, res){
	var texto = req.params.texto;

	Artist.find({name: {$regex: texto}}, 'name', function(err, resultado)  {
		if(err){
			res.status(500).send({message: 'Error en el servidor'});
		}
		else {
			if(resultado == ''){
				res.status(404).send({message: 'No existen resultados coincidentes'});
			}
			else{
				res.status(200).send({resultado});
			}
		}
	});

}

function busquedaAlbum(req, res){
	var texto = req.params.texto;
	
	Album.find({ title: {$regex: texto} }, 'title', function(err, resultado) {
		if(err){
			res.status(500).send({message: 'Error en el servidor'});
		}
		else {
			if(resultado == ''){
				res.status(404).send({message: 'No existen resultados coincidentes'});
			}
			else{
				res.status(200).send({resultado});
			}
		}
	});
}

function busquedaCancion(req, res){
	var texto = req.params.texto;
	
	Song.find({ name: { $regex: texto}}, 'name', function(err, resultado)  {
		if(err){
			res.status(500).send({message: 'Error en el servidor'});
		}
		else {
			if(resultado == ''){
				res.status(404).send({message: 'No existen resultados coincidentes'});
			}
			else{
				res.status(200).send({resultado});
			}
		}
	});
}

module.exports = {
	busquedaCancion,
	busquedaArtista,
	busquedaAlbum
};
