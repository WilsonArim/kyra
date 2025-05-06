const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');
const { cacheService } = require('../services/cacheService');

router.get('/cryptos', cryptoController.getCryptos);
router.get('/fear-greed', cryptoController.getFearGreedIndex);
router.get('/dominance', cryptoController.getDominance);

// Rota de status do cache
router.get('/cache-status', (req, res) => {
    const stats = cacheService.getStats();
    const status = {
        stats,
        keys: {
            cryptos: cacheService.has('cryptos'),
            fear_greed: cacheService.has('fear_greed'),
            dominance: cacheService.has('dominance')
        }
    };
    res.json(status);
});

module.exports = router; 