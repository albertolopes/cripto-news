# Configuração da API

Este diretório contém a configuração centralizada para todas as chamadas da API.

## Arquivo: `api.js`

### Estrutura

```javascript
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
```

### Como usar

#### 1. Importar URLs pré-construídas:
```javascript
import { API_URLS } from '../config/api.js';

// Usar diretamente
fetch(API_URLS.NOTICIAS);
fetch(API_URLS.TRENDING);
```

#### 2. Construir URLs dinamicamente:
```javascript
import { buildApiUrl } from '../config/api.js';

// Para endpoints com parâmetros
const url = `${buildApiUrl('/noticias')}?page=1&limit=10`;
```

#### 3. Usar configuração completa:
```javascript
import { API_CONFIG } from '../config/api.js';

const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.NOTICIAS}`;
```

### Vantagens

- ✅ **Manutenibilidade**: Mudanças na URL base em um só lugar
- ✅ **Consistência**: Todas as chamadas usam a mesma configuração
- ✅ **Facilidade**: URLs pré-construídas para uso direto
- ✅ **Flexibilidade**: Função helper para URLs dinâmicas

### Adicionando novos endpoints

1. Adicione o endpoint em `API_CONFIG.ENDPOINTS`
2. Adicione a URL pré-construída em `API_URLS`
3. Use nos componentes conforme necessário
