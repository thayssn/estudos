# Linked List (Lista Ligada)

*A lista ligada é uma alternativa para uma estrutura de Array.*

*Ela não possui índices para referenciar elementos, como em um Array.*

*Na realidade, todo elemento possui uma referência para o próximo. No caso da lista dupla, uma para o anterior e uma para o próximo.*

*O último elemento da lista sempre vai possuir próximo não definida, a não ser na lista circular.*

*Ela também sempre possui a referência do primeiro elemento da lista (head).*

**O Linked Liste em alguns casos pode ser mais eficiente que um Array. Por exemplo:**

*Na lista ligada, para adicionarmos um elemento na primeira posição, tudo o que precisamos fazer é criar um novo elemento cuja referência do próximo vai ser o primeiro elemento da lista, e nós sempre possuímos esse valor. Com isso, vamos ter um valor constante de O(1)*

*Se formos olhar para o array, se colocamos um novo elemento no começo, ele terá que deslocar os próximos itens para posições à frente e isso gera um O(n), já que teremos que iterar sobre todos os elementos do array.*

*Em compensação, se formos tentar encontrar um elemento no meio da lista ligada, não temos como saber a sua posição. Então teremos que iterar sobre todos os elementos a partir do primeiro item até encontrarmos a posição do elemento que queremos, e isso nos um O(n).*

*E agora se formos fazer a mesma coisa no Array, podemos apenas passar a posição do elemento.*

## Singly Linked List
*Cada elemento possui seu próprio valor e tem uma referência para o próximo elemento*

## Doubly Linked List
*Cada elemento possui seu próprio valor e tem uma referência para o próximo elemento e o elemento anterior.*

## Circular Linked List
*Cada elemento possui seu próprio valor e uma referência para o próximo, mas o último elemento possui uma referência para o primeiro da lista*