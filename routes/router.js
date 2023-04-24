let express = require ('express')
let router = express.Router();
// lire fichier Json
let fs = require('fs');
let articleData = require('../data/articles.json');
let controller = require ('../controllers/controller')


// **********************************NOS ROUTES*********************************//

// Page index
router.get('/', controller.homePage)
// // Affichage page index
//     res.render('partials/index', {articleData})
//     // console.log(articleData);
    


// Page article
router.get('/article/:id', controller.articlePage)

// je dois exporter tout le routage que j'ai déclarée
module.exports = router;