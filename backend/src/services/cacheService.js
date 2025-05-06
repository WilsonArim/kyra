const NodeCache = require('node-cache');

// Configuração dos tempos de cache (em segundos)
const TTL = {
    cryptos: 30,          // 30 segundos para lista de criptomoedas
    fearGreed: 300,       // 5 minutos para Fear & Greed Index
    dominance: 300        // 5 minutos para dados de dominância
};

class CacheService {
    constructor() {
        this.cache = new NodeCache({
            stdTTL: 300,  // 5 minutos padrão
            checkperiod: 60 // Checar expiração a cada 1 minuto
        });
    }

    // Obtém dados do cache
    get(key) {
        return this.cache.get(key);
    }

    // Armazena dados no cache
    set(key, data, ttl = 300) {
        return this.cache.set(key, data, ttl);
    }

    // Verifica se uma chave existe no cache
    has(key) {
        return this.cache.has(key);
    }

    // Remove uma chave do cache
    del(key) {
        return this.cache.del(key);
    }

    // Limpa todo o cache
    flush() {
        return this.cache.flushAll();
    }

    // Obtém as estatísticas do cache
    getStats() {
        return this.cache.getStats();
    }
}

// Exporta uma única instância do serviço de cache
module.exports = {
    cacheService: new CacheService(),
    TTL
}; 