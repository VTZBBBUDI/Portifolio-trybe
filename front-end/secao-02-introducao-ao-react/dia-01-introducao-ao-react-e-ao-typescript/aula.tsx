/*
Devido a nova versão do VITE, atualmente 4.4.9, 
teremos que fazer algumas modificações para podermos utilizar o Eslint da Trybe!
A nova versão do VITE instala por padrão alguns pacotes do 
Eslint o que conflita com o Eslint da Trybe, gerando o erro:
*/

/*
1- criar um novo projeto VITE
  •npm create vite@latest .
2- remover as dependências do Eslint no arquivo package.json
  •"@typescript-eslint/eslint-plugin": "^6.0.0",
  •"@typescript-eslint/parser": "^6.0.0",
  •"eslint": "^8.45.0",
  •"eslint-plugin-react-hooks": "^4.6.0",
  •"eslint-plugin-react-refresh": "^0.4.3",
3- fazer a instalação das dependências
  •npm install
4- instalar eslint da Trybe :eslint:
  •npm install @trybe/eslint-config-frontend -D
5- renomear o arquivo .eslintrc.cjs  para .eslintrc.json
  •inserir o conteúdo
    {
      "extends": "@trybe/eslint-config-frontend/typescript"
    }
6- modificar o script "lint" para:
  •"lint": "eslint -c .eslintrc.json . --ext .js,.jsx,.ts,.tsx"
*/