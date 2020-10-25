const router = require('express').Router();
const axios = require('axios');
const key = require('../key.js')
console.clear()


let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en`;

const controller =    async(req, res) =>{
    try{
        const myData = await axios.get(url).then((response) =>{
        return response.data.results;
      })
        return res.render('main/firstPage', {movies: myData})
    } catch(err){
        return res.render('404',{status: 404,url: url })
    }};      

router.get('/first', controller);






module.exports = router;