/*
Imagine que você está desenvolvendo um site para um supermercado e já fez todo o front-end, 
com a parte estrutural (html) e de estilização (css).

O que falta agora é pedir algum servidor para trazer os produtos que irão aparecer,
uma vez que essas informações não são salvas no front de uma aplicação.
*/

/*
Agora vamos imaginar outra situação… você está desenvolvendo um back-end de uma empresa de meteorologia. 
Atualmente você está trabalhando em um serviço que entrega informações de clima de todas as cidades do Brasil.
Se algum site pedir essas informações, em qual formato você entregaria esses dados?
*/

/*
JSON é a sigla para JavaScript Object Notation
(Notação de Objeto em Javascript, em tradução livre) 
e foi idealizado justamente para resolver esse problema de padronização de comunicação entre sistemas web, 
trazendo mais simplicidade e leveza na utilização.
*/

/*
Qual a sintaxe do JSON?
  A sintaxe do JSON é semelhante à do objeto em JavaScript, mas é independente de linguagem,
  o que significa que pode ser usado com qualquer linguagem de programação. 
  O formato é baseado em pares de chave-valor, onde a chave é uma string que identifica o valor correspondente. 
  Os valores podem ser do tipo string, number, object, array ou null. Existem algumas padronizações em cima do JSON, que são mantidas por organizações internacionais. 
  Além do formato chave-valor e dos tipos suportados que citamos, as principais padronizações são:
  
   • Um dado JSON pode ser um Object. Para isso, usamos as chaves { } no início da estrutura;
   • Um dado JSON pode ser um Array. Para isso, usamos os colchetes [ ] no início da estrutura;
   • O JSON suporta caracteres Unicode, o que significa que ele pode ser usado para transmitir dados em diferentes idiomas e scripts;
   • A chave é separada de seus valores correspondentes por dois pontos :;
   • A vírgula , separa as entradas (no caso de objetos) ou os valores (em caso de arrays) no JSON.
*/

//Exemplo de JSON simples que é um Object:
{
  "city": "Goiânia",
  "temperature": 28,
  "humidity": 70,
  "conditions": "Ensolarado"
}

//Exemplo de JSON que é um Array:
[
  {
    "product": "Arroz",
    "brand": "Tio João",
    "price": 10.50
  },
  {
    "product": "Feijão",
    "brand": "Camil",
    "price": 8.99
  }
]

/*
 Diferenças do JSON para objetos em JavaScript

  São muito parecidos, mas um JSON tem algumas restrições em comparação com um objeto literal:

   1. O tipo Object do JavaScript pode receber uma função como valor. Já o JSON não permite;
   2. JSON não permite comentários;
   3. Toda string precisa ser representada com aspas duplas " ";
   4. Toda chave do JSON precisa ser uma string.
*/

/*
JSON em arquivos de texto

  Outro ponto importante do JSON é que ele também é uma padronização de formato de arquivo. 
  Alguns cenários onde arquivos JSON são utilizados:

    1.  Arquivos de configuração de projetos, 
    para salvar as informações em um formato simples em que o sistema possa ler e utilizar posteriormente;
    
    2.  Guardar dados de forma local. 
        Esse cenário é muito utilizado no desenvolvimento, 
        principalmente quando queremos trabalhar sem depender de um serviço externo. 
        No exemplo citado no início dessa lição, poderíamos ter o JSON do supermercado no projeto e trabalhar em cima dele.

Os arquivos do tipo JSON utilizam a extensão .json para todos os sistemas em que são utilizados, 
então sempre que você encontrar esta extensão em um projeto ou no gerenciador de arquivos do seu sistema operacional, 
vai saber do que se trata! 😜
*/