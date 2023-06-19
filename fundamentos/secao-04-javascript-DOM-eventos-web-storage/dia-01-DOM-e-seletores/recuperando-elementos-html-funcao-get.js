/*
 É possível manipular o HTML de duas formas:
    1. Alterando textos e propriedades de elementos: 
      para isso é preciso ter acesso a eles;

    2. Criando novos elementos e adicionando-os ao HTML: 
      para isso é preciso anexar o elemento criado a outro elemento HTML 😉.
*/

/*
 Em ambas as situações é necessário recuperar elementos do HTML. 
 Os métodos mais comuns para fazer isso são:

  • getElementById('id'): Retorna um elemento individual dado o valor de seu 
    atributo id. Se no arquivo HTML não existir nenhum elemento com o 
    id especificado o método retornará null.

  • getElementsByClassName('classe'): Retorna um ou mais elementos dado 
    o valor de seu atributo class. 
    Se no arquivo HTML não existir nenhum elemento com a classe especificada o 
    método retornará uma lista vazia.

  • getElementsByTagName('tag'): Retorna todos os elementos na página com 
    o nome de tag especificado. Se no arquivo HTML não existir nenhum elemento 
    com a tag especificada o método retornará uma lista vazia.

  • querySelector('seletor css'): Usa a sintaxe do seletor CSS, 
    esse método retorna o primeiro elemento que corresponde ao 
    seletor especificado ou null se não houver correspondência.

  • querySelectorAll('seletor css'): Também usa sintaxe do seletor CSS. 
    Retorna uma lista de todos os elementos correspondentes ao seletor especificado.
    Se no arquivo HTML não existir nenhum elemento com os seletores especificados 
    o método retornará uma lista vazia
*/