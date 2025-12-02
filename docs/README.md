# GitHub Pages - RFP Malwee

Este repositório contém a documentação técnica completa para a RFP Malwee.

## Visualizar a Página

Acesse: [https://gabdevbr.github.io/rfp-malwee](https://gabdevbr.github.io/rfp-malwee)

## Configuração do GitHub Pages

### Passo 1: Ativar GitHub Pages

1. Vá em **Settings** do repositório
2. Na seção **Pages** (no menu lateral)
3. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/docs`
4. Clique em **Save**

### Passo 2: Aguardar Build

O GitHub Pages levará alguns minutos para fazer o build inicial. Você receberá uma notificação quando estiver pronto.

### Passo 3: Acessar

Acesse através da URL: `https://gabdevbr.github.io/rfp-malwee`

## Estrutura dos Arquivos

```
/docs
  ├── index.html      # Página principal
  ├── styles.css      # Estilos CSS
  └── script.js       # JavaScript interativo
```

## Customização

### Alterar URL Base

Edite o arquivo `_config.yml` na raiz do projeto e altere:
```yaml
baseurl: /rfp-malwee
url: https://gabdevbr.github.io
```

### Cores e Temas

As cores podem ser personalizadas no arquivo `docs/styles.css` através das variáveis CSS no `:root`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
    ...
}
```

## Features

✅ Design responsivo (mobile-first)  
✅ Animações suaves ao scroll  
✅ Busca de tópicos em tempo real  
✅ Links diretos para cada documento  
✅ Organização por categorias  
✅ Estatísticas e overview da RFP  

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla (sem dependências)
- GitHub Pages (hospedagem gratuita)

## Desenvolvimento Local

Para testar localmente:

```bash
# Navegar até a pasta docs
cd docs

# Iniciar servidor HTTP simples (Python)
python3 -m http.server 8000

# Ou usar Node.js
npx http-server -p 8000
```

Acesse em: http://localhost:8000

## Manutenção

Para adicionar novos tópicos:

1. Crie o arquivo `.md` na pasta correspondente
2. Adicione o link no `README.md` principal
3. Adicione o item correspondente no `docs/index.html`

## Suporte

Para questões sobre a documentação técnica ou a página, entre em contato através dos canais oficiais da Geovendas.
