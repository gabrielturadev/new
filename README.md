# Site Moderno e Responsivo

Um site moderno e visualmente atraente desenvolvido com HTML, CSS, JavaScript e Bootstrap.

## 🚀 Características

- **Design Responsivo**: Adapta-se perfeitamente a todos os dispositivos
- **Interface Moderna**: Design limpo e profissional com gradientes e animações
- **Navegação Suave**: Scroll suave entre seções
- **Formulário Interativo**: Validação em tempo real e feedback visual
- **Animações**: Efeitos visuais suaves e profissionais
- **Acessibilidade**: Otimizado para leitores de tela e navegação por teclado

## 📁 Estrutura do Projeto

```
TRABALHO_PESSOAL/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🎨 Seções do Site

### 1. **Navbar**
- Navegação fixa no topo
- Efeito de transparência com blur
- Menu responsivo para mobile
- Indicador de seção ativa

### 2. **Hero Section**
- Título animado com efeito de digitação
- Call-to-action buttons
- Gradiente de fundo com overlay
- Animação flutuante do ícone

### 3. **Sobre**
- Layout com imagem e texto
- Lista de características da empresa
- Efeitos hover na imagem

### 4. **Serviços**
- Cards responsivos em grid
- 6 serviços principais
- Efeitos hover e animações
- Ícones Font Awesome

### 5. **Contato**
- Formulário com validação
- Campos: Nome, E-mail, Assunto, Mensagem
- Feedback visual de sucesso/erro
- Simulação de envio

### 6. **Footer**
- Informações da empresa
- Links rápidos
- Ícones de redes sociais
- Copyright

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript ES6+**: Funcionalidades interativas
- **Bootstrap 5**: Framework CSS para responsividade
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia Poppins

## 🎯 Funcionalidades JavaScript

### Navegação
- Scroll suave entre seções
- Highlight automático do menu ativo
- Efeito de scroll na navbar
- Botão "Voltar ao topo"

### Formulário
- Validação em tempo real
- Feedback visual de campos
- Simulação de envio com loading
- Mensagem de sucesso

### Animações
- Fade-in ao scroll
- Efeitos hover nos cards
- Animação de digitação no título
- Parallax no hero section

### Performance
- Throttling de eventos de scroll
- Lazy loading de imagens
- Otimização de animações

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Como Usar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em um navegador
3. **Navegue** pelas seções usando o menu
4. **Teste** o formulário de contato
5. **Verifique** a responsividade em diferentes dispositivos

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas nas variáveis CSS:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... outras cores */
}
```

### Conteúdo
- Edite o texto no arquivo `index.html`
- Substitua os ícones Font Awesome
- Adicione suas próprias imagens
- Modifique os links das redes sociais

### Estilos
- Personalize os gradientes no `styles.css`
- Ajuste as animações
- Modifique as fontes
- Altere os espaçamentos

## 🔧 Funcionalidades Avançadas

### Validação de Formulário
```javascript
// Validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validação de nome
if (!name || name.trim().length < 2) {
    // Mostrar erro
}
```

### Animações de Scroll
```javascript
// Observer para animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
```

### Throttling de Performance
```javascript
// Otimização de scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
```

## 📋 Checklist de Funcionalidades

- [x] Navbar responsiva com menu mobile
- [x] Hero section com call-to-action
- [x] Seção sobre com layout de imagem e texto
- [x] Seção de serviços em cards
- [x] Formulário de contato com validação
- [x] Footer com redes sociais
- [x] Scroll suave entre seções
- [x] Animações e efeitos hover
- [x] Design responsivo
- [x] Acessibilidade básica
- [x] Performance otimizada

## 🤝 Contribuição

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Implemente as mudanças
4. Teste em diferentes dispositivos
5. Envie um pull request

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

- Abra uma issue no repositório
- Entre em contato através do formulário do site
- Consulte a documentação do Bootstrap para dúvidas específicas

---

**Desenvolvido com ❤️ usando HTML, CSS, JavaScript e Bootstrap** 