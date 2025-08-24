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
export const buildApiUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint.toUpperCase()]}`);
  
  // Adicionar parâmetros de consulta, se houver
  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  
  return url.toString();
};

// URLs pré-construídas para uso direto
export const API_URLS = {
  NOTICIAS: buildApiUrl(API_CONFIG.ENDPOINTS.NOTICIAS),
  TRENDING: buildApiUrl(API_CONFIG.ENDPOINTS.TRENDING),
  ACESSO: buildApiUrl(API_CONFIG.ENDPOINTS.ACESSO),
  ACESSOS_TOTAL: buildApiUrl(API_CONFIG.ENDPOINTS.ACESSOS_TOTAL)
};
