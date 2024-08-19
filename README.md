# **Estruturação de Pipelines de CI/CD com GitHub Actions**

## **Objetivo**

Este projeto tem como objetivo configurar um pipeline de Integração Contínua (CI) e Entrega Contínua (CD) usando GitHub Actions para um projeto de software simples.

## **Funcionalidades**

- **Testes Automatizados:** Implementação de testes automatizados utilizando o Jest. Foram desenvolvidos testes unitários para verificar o funcionamento correto das funções de soma, subtração, multiplicação e divisão.
- **Deploy Automático:** Configuração de deploy automático na Vercel sempre que um merge é realizado na branch principal (`main`).

## **Estrutura do Projeto**

- `src/`: Contém os arquivos de código fonte e recursos para o front-end.
  - `js/`: Diretório com as funções de cálculo:
    - `divisao.js`: Função para divisão.
    - `multiplicacao.js`: Função para multiplicação.
    - `soma.js`: Função para soma.
    - `subtracao.js`: Função para subtração.
  - `index.html`: Arquivo HTML principal da aplicação.
  - `index.js`: Script JavaScript principal que integra todas as funções.
  - `style.css`: Arquivo CSS para os estilos gerais da aplicação.
  - `vars.css`: Arquivo CSS para variáveis de estilo.
- `tests/`: Contém os arquivos de teste unitário.
  - `divisao.test.js`: Testes para a função de divisão.
  - `multiplicacao.test.js`: Testes para a função de multiplicação.
  - `soma.test.js`: Testes para a função de soma.
  - `subtracao.test.js`: Testes para a função de subtração.

## **Pipeline de CI/CD**

O pipeline de CI/CD foi configurado para realizar as seguintes etapas:

1. **Instalação das Dependências:** As dependências do projeto são instaladas automaticamente.
2. **Execução dos Testes:** Os testes são executados usando Jest para garantir que as funções estão funcionando corretamente.
3. **Deploy Automático:** Após a aprovação dos testes e o merge na branch `main`, o deploy é realizado automaticamente na Vercel.

## **Como Utilizar**

### **1. Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### **2. Instalar as Dependências**

```bash
npm install
```
### **3. Executar os Testes**
```bash
npm test
```

### **4. Realizar um Merge na Branch main**
- Após realizar um merge na branch main, o deploy será feito automaticamente na Vercel.

## Deploy
- O projeto é automaticamente implantado na Vercel sempre que a branch main é atualizada. O link para a aplicação implantada pode ser encontrado <a href="">aqui.
