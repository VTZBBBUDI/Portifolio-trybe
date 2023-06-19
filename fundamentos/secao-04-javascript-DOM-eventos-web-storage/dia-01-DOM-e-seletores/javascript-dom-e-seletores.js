//O DOM (Document Object Model) é uma interface que representa como arquivos HTML e XML são lidos pelo browser.

/*
Após a leitura do documento HTML, o browser cria um objeto 
que faz uma representação desse documento e define meios de acesso a essa estrutura. 
Dessa forma, é possível utilizar o JavaScript para manipular o DOM e, assim, 
alterar o estilo e o conteúdo de uma página.
*/

/*
No DOM, as páginas web são representadas por nós e objetos, 
por meio dos quais é possível realizar a comunicação do documento HTML com o código JavaScript. 
Sendo assim, o DOM é uma representação orientada a objetos da página web e pode 
ser modificado com uma linguagem de script, como o JavaScript.
*/

/*
 Veja, a seguir, os objetos que a árvore DOM representada acima apresenta.

    • window: Representa uma janela que contém um elemento DOM. 
      É possível acessar o documento por meio de window.

    • location: Representa a localização do objeto ao qual ele está associado, 
      isto é, o documento atual.

    • document: Representa qualquer página web carregada no navegador 
      e serve como um ponto de entrada para o conteúdo na página web. 
      Assim, o document contém todos os documentos HTML. 
      Ao acessar qualquer elemento, atributo ou nó do texto, 
      é possível navegar por ele via nó document. 
      Ele é o ponto de partida de todas as visitas à árvore DOM.

    • history: Permite a manipulação do histórico da sessão do navegador, 
      ou seja, as páginas visitadas na guia ou no quadro em que a página atual está carregada.

    • element: É a classe-base mais geral da qual todos os objetos em um 
      document herdam, isto é, são todas as tags que estão em arquivos HTML 
      e se transformam em elementos da árvore DOM. 
      Elementos HTML descrevem a estrutura de uma página HTML.

    • text: É o texto que aparece entre os elementos, ou seja, 
      todo o conteúdo das tags. Depois de ter acessado um nó de elemento, 
      é possível buscar o texto dentro desse elemento. 
      Isso é armazenado em nó de texto próprio.

    • atribute: São todos os atributos que um nó específico possui, 
      como class ou id.
*/

/*
Em resumo, você pode pensar do seguinte modo:

  A página HTML/CSS/JS que você faz é um programa; 
    o navegador é quem interpreta esse código; e, a partir dele, 
    a página que você vê na internet é gerada.

  Assim, o DOM é uma estrutura da página que o navegador monta quando lê. 
    O seu intuito é justamente permitir ao programa acessar os elementos da página 
    usando código e dar a ele o poder de manipulá-los.

  Se, ainda assim, o conceito de DOM estiver um pouco abstrato, não se preocupe: 
    o conteúdo ficará mais nítido quando você começar a interagir com essa 
    estrutura.
*/