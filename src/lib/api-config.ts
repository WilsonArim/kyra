export const API_KEYS = {
  openai: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  elevenLabs: process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY,
  elevenLabsVoiceId: process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID,
  huggingFace: process.env.NEXT_PUBLIC_HF_API_KEY,
  deepAi: process.env.NEXT_PUBLIC_DEEP_AI_KEY,
  coinmarketcap: process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
  quicknode: process.env.NEXT_PUBLIC_QUICKNODE_API_KEY
};

export const API_ENDPOINTS = {
  quicknodeHttp: process.env.NEXT_PUBLIC_QUICKNODE_HTTP_PROVIDER,
  quicknodeWss: process.env.NEXT_PUBLIC_QUICKNODE_WSS_PROVIDER
};
