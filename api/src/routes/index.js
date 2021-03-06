const { Router } = require('express');
const videoGames = require("./videoGamesALL")
const videoGameId = require("./videoGameId")
const Genres = require("./Genres")
const addVideoGame = require("./addNewGame")
const deleteGame = require("./deleteGame")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(videoGames)
router.use(videoGameId)
router.use(Genres)
router.use(addVideoGame)
router.use(deleteGame)
module.exports = router;
