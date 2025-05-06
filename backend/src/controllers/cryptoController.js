const cryptoService = require('../services/cryptoService');
const apiConfig = require('../config/api-config');

let lastCryptoCall = 0;
let lastFearGreedCall = 0;
let lastDominanceCall = 0;

const shouldThrottle = (lastCall, limit) => {
    const now = Date.now();
    return (now - lastCall) < limit;
};

exports.getCryptos = async (req, res) => {
    try {
        if (shouldThrottle(lastCryptoCall, apiConfig.rateLimits.cryptos)) {
            return res.status(429).json({ 
                error: 'Muitas requisições. Tente novamente em alguns segundos.',
                retryAfter: Math.ceil((apiConfig.rateLimits.cryptos - (Date.now() - lastCryptoCall)) / 1000)
            });
        }
        lastCryptoCall = Date.now();
        
        const data = await cryptoService.getCryptos();
        res.json(data);
    } catch (error) {
        console.error('Erro no controlador getCryptos:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getFearGreedIndex = async (req, res) => {
    try {
        if (shouldThrottle(lastFearGreedCall, apiConfig.rateLimits.fearGreed)) {
            return res.status(429).json({ 
                error: 'Muitas requisições. Tente novamente em alguns segundos.',
                retryAfter: Math.ceil((apiConfig.rateLimits.fearGreed - (Date.now() - lastFearGreedCall)) / 1000)
            });
        }
        lastFearGreedCall = Date.now();

        const data = await cryptoService.getFearGreedIndex();
        res.json(data);
    } catch (error) {
        console.error('Erro no controlador getFearGreedIndex:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getDominance = async (req, res) => {
    try {
        if (shouldThrottle(lastDominanceCall, apiConfig.rateLimits.dominance)) {
            return res.status(429).json({ 
                error: 'Muitas requisições. Tente novamente em alguns segundos.',
                retryAfter: Math.ceil((apiConfig.rateLimits.dominance - (Date.now() - lastDominanceCall)) / 1000)
            });
        }
        lastDominanceCall = Date.now();

        const data = await cryptoService.getDominance();
        res.json(data);
    } catch (error) {
        console.error('Erro no controlador getDominance:', error);
        res.status(500).json({ error: error.message });
    }
}; 