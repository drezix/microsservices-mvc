
# Microsserviços com Arquitetura MVC

Este projeto demonstra a implementação de uma arquitetura MVC (Model-View-Controller) utilizando Node.js e Express, em um ambiente local.

## Estrutura do Projeto

```
/microservices-mvc
├── /models
│   └── dataModel.js       # Lógica de transformação de dados
├── /views
│   └── index.html         # Página inicial da aplicação
├── /controllers
│   └── mainController.js  # Controladores das rotas
├── /routes
│   └── mainRoutes.js      # Rotas da aplicação
├── server.js              # Arquivo principal para iniciar o servidor
```

## Funcionalidades

1. Página inicial acessível em `/` com uma mensagem de boas-vindas.
2. Transformação lógica de dados utilizando rotas dinâmicas:
   - Endpoint: `/transform/:name`
   - Resposta: Um objeto JSON com o nome original e o nome transformado em letras maiúsculas.

Exemplo de resposta:
```json
{
  "originalName": "andre",
  "transformedName": "ANDRE"
}
```

## Configuração do Ambiente

1. **Pré-requisitos**:
   - Node.js instalado
   - npm instalado

2. **Instalar Dependências**:
   Execute o comando a partir do diretório raiz do projeto:
   ```bash
   npm install
   ```

3. **Estrutura Básica do Projeto**:
   Certifique-se de que os diretórios e arquivos estão organizados conforme a estrutura especificada.

## Como Executar

1. **Iniciar o Servidor**:
   ```bash
   node server.js
   ```

2. **Acessar a Aplicação**:
   - Página inicial: [http://localhost:3000/](http://localhost:3000/)
   - Endpoint de transformação: [http://localhost:3000/transform/:name](http://localhost:3000/transform/:name)

## Dependências

- `express`: Framework web utilizado para criar as rotas e gerenciar o servidor.

