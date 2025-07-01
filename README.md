# GitHub Blog

Um projeto de estudo desenvolvido para explorar a API do GitHub, criando um blog onde é possível visualizar informações de perfil e issues de um repositório específico.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Vite](https://vitejs.dev/) - Ferramenta de build e ambiente de desenvolvimento
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições à API do GitHub
- [React Router DOM](https://reactrouter.com/) - Roteamento para aplicações React
- [Styled Components](https://styled-components.com/) - Estilização de componentes
- [Date-fns](https://date-fns.org/) - Biblioteca para formatação de datas
- [React Markdown](https://github.com/remarkjs/react-markdown) - Renderização de Markdown

## ✨ Funcionalidades

- Visualização do perfil do GitHub
- Listagem de issues do repositório
- Visualização completa de cada postagem (issue)
- Busca por conteúdo nas postagens
- Formatação de Markdown
- Design responsivo

## 🛠️ Como executar

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/github-blog.git
```

2. Acesse a pasta do projeto

```bash
cd github-blog
```

3. Instale as dependências

```bash
npm install
# ou
yarn
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
VITE_GITHUB_USERNAME=seu-usuario
VITE_GITHUB_REPO=seu-repositorio
```

5. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 por [Kelvin Costa](https://github.com/oKelvinCosta)
