let fs = require('fs');
let articleData = require('../data/articles.json');n

const controller = {
    homePage : (req, res) => {
        // Affichage page index
    res.render('partials/index', {articleData})
    // console.log(articleData);
    },

    articlePage : (req, res) => {
        // FS: permet de lire un fichier et recuperer son contenu
        let json = fs.readFileSync('./data/articles.json');
        console.log(json);
        // parse converti les datas brutes en JSON
        let jsonData = JSON.parse(json);
        // Affichage page article
        // data.length : permet de voir le nombre d'objet qu'il y a dans le fichier JSON
        // console.log(jsonData.length); 
        // Parametres sert à recuperer quelque chose qu'on recherche, c'est la propre route de notre article ex: articles/ categories/femmes
        const id = parseInt(req.params.id)
        // Parseint : on le met car sinon il va rechercher un chiffre en texte et non en number
        // console.log(id);
        if(id > jsonData.length || id < 1 ){
            res.status(404).send('Erreur 404 : page not found :(')
        }else {
    
        // FS: permet de lire un fichier et recuperer son contenu
        let rawdata = fs.readFileSync('data/articles.json');
        // parse converti les datas brutes en JSON
        let data = JSON.parse(rawdata);
        // dans data on veut aller chercher data
        const articles = data.find(data => data.id === id)
        // Affichage page article
        res.render('partials/article', {articles})
        console.log(articles);
    }

    }
}

module.exports = controller;