const express = require('express');
const app = express();
const port = 3000;

//list songs
const songs = [
    {id: 1, name: "El Azul", artist: 'Peso Pluma', year: 2022},
    {id: 2, name: "SEDA", artist: 'Bad Bunny', year: 2023},
    {id: 3, name: "LOKERON", artist: 'Tito Doble P', year: 2024},
    {id: 4, name: "Marvins Room", artist: 'Drake', year: 2017},
];

// /regresar un saludo en html
app.get('/', (req,res)=>{
    res.send('Hola devf!');
});


// /songs: lista canciones
//url - endpoint getSongs
app.get('/songs', (req, res) =>{
    res.json(songs);
});

app.listen(port, ()=>{
    console.log('Servidor de express está corriendo', port);
});