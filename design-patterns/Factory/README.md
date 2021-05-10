# Factory Pattern
- Padrão de Projeto Fábrica

É um pattern que foi feito para criar objetos reduzindo a duplicação de tarefas de inicialização para objetos parecidos. Fora isso, também pode abstrair construções que muitas vezes podem ser complexas.

Criar um objeto pode muitas vezes gerar uma duplicação de código desnecessária.
Aqui, nós definimos um método separado para a criação dos objetos, tratando a classe (no caso do JS, uma função) como se fosse uma fábrica especializada em gerar esses produtos e subclasses podem sobrescrever esse método para gerar produtos derivados.

- https://nandovieira.com.br/design-patterns-no-javascript-factory

O Factory Pattern é uma forma de reduzir as complexidades na criação de objetos.