module.exports = {
    rateLimits: {
        cryptos: 30000,      // 30 segundos entre chamadas
        fearGreed: 60000,    // 1 minuto entre chamadas
        dominance: 30000     // 30 segundos entre chamadas
    },
    maxRetries: 3,
    retryDelay: 1000        // 1 segundo entre tentativas
}; 