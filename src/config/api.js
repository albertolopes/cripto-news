// Configuração centralizada da API
export const API_CONFIG = {
  BASE_URL: 'https://cripto-price-i8c1.onrender.com',
  ENDPOINTS: {
    NOTICIAS: '/noticias',
    TRENDING: '/trending',
    ACESSO: '/acesso',
    ACESSOS_TOTAL: '/acessos/total'
  }
};

// Função helper para construir URLs completas
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// URLs pré-construídas para uso direto
export const API_URLS = {
  NOTICIAS: buildApiUrl(API_CONFIG.ENDPOINTS.NOTICIAS),
  TRENDING: buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING),
  ACESSO: buildApiUrl(API_CONFIG.ENDPOINTS.ACESSO),
  ACESSOS_TOTAL: buildApiUrl(API_CONFIG.ENDPOINTS.ACESSOS_TOTAL)
};
