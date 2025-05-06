const axios = require('axios');
const apiKeys = require('../config/api-keys');
const { cacheService, TTL } = require('./cacheService');

const CMC_API_URL = 'https://pro-api.coinmarketcap.com/v1';

const CACHE_KEYS = {
    CRYPTOS: 'cryptos',
    FEAR_GREED: 'fear_greed',
    DOMINANCE: 'dominance'
};

exports.getCryptos = async () => {
    try {
        // Verifica se há dados em cache
        const cachedData = cacheService.get(CACHE_KEYS.CRYPTOS);
        if (cachedData) {
            console.log('Retornando dados de criptomoedas do cache');
            return cachedData;
        }

        console.log('Iniciando requisição para CoinMarketCap - listings/latest');
        const response = await axios.get(`${CMC_API_URL}/cryptocurrency/listings/latest`, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKeys.coinmarketcap
            },
            params: {
                limit: 100,
                convert: 'USD'
            }
        });
        
        console.log('Requisição bem sucedida para CoinMarketCap');
        
        // Armazena os dados no cache
        cacheService.set(CACHE_KEYS.CRYPTOS, response.data, TTL.cryptos);
        
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados das criptomoedas:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
        throw new Error(`Erro ao buscar dados das criptomoedas: ${error.message}`);
    }
};

exports.getFearGreedIndex = async () => {
    try {
        // Verifica se há dados em cache
        const cachedData = cacheService.get(CACHE_KEYS.FEAR_GREED);
        if (cachedData) {
            console.log('Retornando índice Fear & Greed do cache');
            return cachedData;
        }

        console.log('Iniciando requisição para Fear & Greed Index');
        const response = await axios.get('https://api.alternative.me/fng/');
        console.log('Requisição bem sucedida para Fear & Greed Index');
        
        // Armazena os dados no cache
        cacheService.set(CACHE_KEYS.FEAR_GREED, response.data, TTL.fearGreed);
        
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar índice Fear & Greed:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
        throw new Error(`Erro ao buscar índice Fear & Greed: ${error.message}`);
    }
};

exports.getDominance = async () => {
    try {
        // Verifica se há dados em cache
        const cachedData = cacheService.get(CACHE_KEYS.DOMINANCE);
        if (cachedData) {
            console.log('Retornando dados de dominância do cache');
            return cachedData;
        }

        console.log('Iniciando requisição para CoinMarketCap - global-metrics');
        const response = await axios.get(`${CMC_API_URL}/global-metrics/quotes/latest`, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKeys.coinmarketcap
            }
        });
        console.log('Requisição bem sucedida para métricas globais');
        
        // Armazena os dados no cache
        cacheService.set(CACHE_KEYS.DOMINANCE, response.data, TTL.dominance);
        
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados de dominância:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
        throw new Error(`Erro ao buscar dados de dominância: ${error.message}`);
    }
}; 