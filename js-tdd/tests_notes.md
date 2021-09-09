# Testes


#### Por que testar?
1. Reduz tempo gasto em análise e correção de bugs
2. Facilita a refatoração
3. Gera documentação
4. Melhora o design do código
5. Garante que o trabalho tenha qualidade

#### TDD
    ... Red >> Green >> Refactor >> Red ...

#### Fluxo do Teste
1. Escrever o teste
2. Escreverr o código para passar
3. Escrever um segundo caso de testes
4. Corrigir para que passe
5. Escrever um terceiro caso de teste (se necessário)
6. Refatorar o código.

#### Como pensar em testes

1. O que o código precisa fazer?
2. Que dados ele recebe?
3. Que dados ele precisa retornar?
4. Que ações precisam acontecer para o código rodar?


#### Padrão do teste

Ele deve fazer { isso } quando { aquilo }

    it('should return 4 when receive 2,2) {
        expect(sum(2,2)),to.equal(4);
    }

#### Tipos de Teste

Pirâmide
```
               [ -- UI ] - Menor quantidade - Mais demorados
         [ -- Services ] 
    [ ---------- Units ] - Maior quantidade - Mais rápidos
```

- Testes unitários - [Unidades]
- Testes de integração - [Services]
- Testes E2E - [UI]
- Testes de regressão [UI]

##### Teste Unitário

É simples e pequeno. Prova o comportamento de um único método.

- Evite ruído entre os testes ( Isolamento ).

- Escolha os melhores asserts para cada momento.

- Procure usar mocks para chamadas externas.

- Utilize dele para organizar o design de seu código.

##### Teste de Integração

Valida se os componentes funcionam em conjunto.

- Cuidado para não criar um teste inútil.

- Isole o máximo possível dos ambientes.

##### Teste de Aceitaçao (E2E)

Tem o propósito de avaliar a qualidade externa do produto e a qualidade em uso.

- Valide **apenas** o fluxo de funcionamento do projeto.

- 