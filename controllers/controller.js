
let articleData = require('../data/articles.json');

const controller = {
    homePage : (req, res) => {
        // Affichage page index
    res.render('partials/index', {articleData})
    // console.log(articleData);
    },

    articlePage : (req, res) => {
        // Affichage page article
        // data.length : permet de voir le nombre d'objet qu'il y a dans le fichier JSON
        // console.log(jsonData.length); 
        // Parametres sert à recuperer quelque chose qu'on recherche, c'est la propre route de notre article ex: articles/ categories/femmes
        const id = parseInt(req.params.id)
        // Parseint : on le met car sinon il va rechercher un chiffre en texte et non en number
        // console.log(id);
        if(id > articleData.length || id < 1 ){
            res.status(404).send('Erreur 404 : page not found :(')
        }else {
    
        // dans data on veut aller chercher data
        const articles = articleData.find(data => data.id === id)
        // Affichage page article
        res.render('partials/article', {articles})
        console.log(articles);
    }

    }
}

module.exports = controller;