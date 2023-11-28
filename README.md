# Mas afinal, o que é uma API RESTful?

API quer dizer "Application Programming Interface", em outras palavras, é uma interface de comunicação entre desenvolvedores.

Em relação ao REST (Representational State Transfer), ele é um conjunto de regras e boas práticas para o desenvolvimento dessas APIs.

Pense no seguinte cenário como programador, imagine que você tem um grande conhecimento em gastronomia, e então você cria um banco de dados para armazenar esses dados. Mas depois você percebe que outras pessoas podem se beneficiar disso. Pronto, é aí que entram as APIs, nesse caso, você poderia desenvolver uma interface, ou seja sua API, para que outros desenvolvedores pudessem criar aplicativos ao redor desse conhecimento, por exemplo: recomendação de vinhos, ranking de receitas, e por aí vai.


## Agora vamos falar de como funciona uma API na prática.

- Primeiro ponto que precisa ser esclarecido, quando falamos de APIs toda a comunicação dessa interface é feita via web, ou seja, tudo é feito através de uma requisição a uma URL, que por sua vez, traz uma resposta.

Voltando ao exemplo anterior, pense que você é um desenvolvedor e quer saber dos melhores vinhos da região sul do Brasil, nesse caso você faria uma requisição dessa informação para uma URL dessa API, e ela te retornaria uma resposta. Simples, não?

## Entendendo uma requisição
### O endpoint
A URL nada mais é que o caminho para fazer a requisição, porém é interessante ressaltar que ela segue a seguinte estrutura:

#### Base URL
Esse é o início da URL da requisição, aqui você basicamente falará a informação de domínio que se repete em qualquer requisição. Por exemplo:

`https://api.minhagastronomia.com`

#### Resource ou Path
O recurso é o tipo de informação que você está buscando, ou seja, vamos simular que estamos buscando saber sobre vinhos, então acrescentamos o recurso vinhos:

`https://api.minhagastronomia.com/vinhos`

#### Query String
A query string são os parâmetros daquela requisição, então, se eu quisesse saber os melhores vinhos da região sul do Brasil, eu incluiria esses parâmetros ?pais=brasil&regiao=sul e nossa URL ficaria assim:

`https://api.minhagastronomia.com/vinhos?pais=brasil&regiao=sul`

Como podem ver acima, por se tratar de parâmetros da URL você usa o (?) e caso queira utilizar mais de um parâmetro você utiliza o (&).

OBS: A Query String não é somente utilizada para filtros, ela pode ser utilizada como parâmetros de paginação, versionamento, ordenação, e muito mais.

## O método
O método te ajuda a informar o tipo de ação que você está fazendo naquela requisição.

Dentre os principais métodos, temos:

- Get (Buscar dados)
- Post (Enviar dados)
- Put e Patch (Atualizar dados)
- Delete (Deletar dados)
 
> obs: Existem vários outros métodos que não irei citar no artigo, mas nesse link você pode ver a lista completa.

## Headers
Headers ou cabeçalhos permitem que você envie informações adicionais na requisição. Ele pode ser utilizado para inúmeras funções, como: autenticação, formatação de objeto, e muito mais.

> **Não é recomendado que você crie headers customizados, e aqui você pode ver todos os padrões de utilização.**

Para utilizá-lo é simples você coloca a propriedade, seguido dois pontos e o valor, tudo entre aspas, exemplo:

`"Authorization: token123242343534".`

## Body
O body é o corpo da mensagem que você quer enviar na requisição. Ele é utilizado somente nos métodos de POST, PUT, PATCH, ou seja, ele contém o dado a ser processado pela API, e por isso ele não é necessário em métodos de leitura de dados.

## HTTP Status Codes
Para facilitar o entendimento das respostas das APIs existem padrões de códigos de status que podem ser utilizados.

Os códigos mais utilizados para as respostas de uma requisição são o `200` (OK), o `201` (created), o `204` (no content), o `404` (not found), o `400` (bad request), e `500` (internal server error).

Existem vários outros códigos de resposta do protocolo HTTP que podem ser utilizados. Nesse link temos a lista completa.

Como padrão, os códigos de sucesso tem o prefixo 20x, os de redirecionamento 30x, os de erro do cliente 40x e os de erro de servidor 50x.

## Autenticação
Obviamente não podemos falar de APIs sem segurança, afinal estamos falando da WEB.

Como principais métodos de autenticação de APIs, temos:

## Basic authentication
Baseado em usuário e senha codificados em Base64 e utilizado no header da requisição.

## Secret token
Token de acesso que pode ser limitado a escopo, e que é enviado na requisição pelo Header ou pela Query String.

Nesse caso temos padrões famosos como oAuth e JWT.

# Conclusão
E aí conseguiu entender melhor como funciona uma API?

Se quiser entender ainda mais sobre os requests, recomendo olhar uma API de testes para você conseguir "brincar" com algumas chamadas, como [essa](https://reqres.in/) por exemplo.

# Fontes

[A anatomia de uma API RESTful](https://thiagolima.blog.br/a-anatomia-de-uma-api-restful-80df2aca158e)
