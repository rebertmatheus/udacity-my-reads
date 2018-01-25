# MyReads Project

Esta aplicação armazena livros de acordo com as estante selecionada (Currently Read, Want to Read, Read), ela busca as informações de uma API fornecida no programa de nanodegree da Udacity.


## TL;DR

Para iniciar o desenvolvimento, utilize:

* `npm install` para instalar todas as dependências do projeto.
* `npm/yarn start` para executar o projeto com o servidor de desenvolvimento.


## Backend Server

Backend Server fornecido pela Udacity.

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Important

Para instalar alguma nova dependência, instalar através do `npm install` ou, se instalada de outra forma, assegurar-se de atualizar o package.json para não invalidar o `npm install`.

A página de pesquisa busca apenas por resultados de termos que estão no [SEARCH_TERMS.md](SEARCH_TERMS.md).


## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md) para maiores informações.


OBS:
Pagina de readme modificada, sugestão sobre o curso de readme anotada, porém, devido ao curto prazo e atraso causado por mim na entrega do projeto, irei realizar o curso de readme após a conclusão do nanodegree ou assim que possível.

