
![Logo](https://pokemonteambuilder.vercel.app/logo.png)


# Pokemon Team Builder

A simple app to train my full-stack development skills.

### About the app

This app is a pokemon team builder, the title is already very explanatory 😝.
The main objective is to select up to 6 pokemons to assemble an ideal team, exploring pokemons strengths and weaknesses based on their types.
You will be able to save your teams and then consult them.

### The Pokemon Battle System
Think 'Rock Paper Scissors', but more intense and complex. 'Rock Paper Scissors' game has 3 types and it is enough to keep you and your opponent guessing. Imagine managing 18 types with 6 Pokémons! How can anyone play Pokémon without some serious memory skills?!


## Demo

[https://pokemonteambuilder.vercel.app](https://pokemonteambuilder.vercel.app/)


## Features

- Collection of 151 Pokémon (the first generation, the only one that matters 😛) thumbnails, IDs and Names - build a database using looped API calls to Pokémon API
- Clickable and Selectable Pokémons - show more details when selected
- Filter Bar - to only show Pokémons that types you want
- Register your name and email and log in to the app
- Name and save as many teams as you like


## Tech Stack

#### Client 

- **React**: Library to make reusable components
- **CSS**: Only CSS Vanilla to add some layouts and styles to the components
- **Axios**: Handle HTTP requests, connect to the API
- **React-Router-Dom**: Handle app navigation and protected routes
- **React-Hot-Toast**: Notifications and feedbacks to the user
- **Vite**: Initial boilerplate and  builder to deployment

#### Server: 
- **Node**: Server side Javascript runtime
- **Typescript**: Handle types
- **Express**: Framework to easy handle https method calls
- **REST API**: API architecture style
- **Prisma**:ORM to easy handle database model, schemas, migrations and data seeding
- **Postgress**: SQL database to store app informations

#### Other:

- **GIT**: Track the state of the codebase
- **Github**: Local to store the repository
- **Notion**: Track the project roadmap and features
- **Insomnia**: To test API calls
- **Heroku**: To deploy app backend using CLI tools
- **Vercel**: To deploy app frontend


## Lessons Learned

#### General Learned

- With the development of this application I was able to understand a lot how the "trial and error" learning method works.

- É realmente muito satisfatório após horas quebrando a cabeça, achar uma solução ideal para o problema.

- Aprendi também a ler bastante a documentação das linguagens e bibliotecas para implementar algumas features, e claro muito google e stack overflow para consertar os bugs

#### Tech Learns

- Aprendi como a ferramenta do **Prisma** pode ser poderosa, pois pude modificar o esquema do banco de dados com muita facilidade, tipar os modelos de forma fácil e rápida.

- Aprendi bastante sobre **modelagem de dados** usando **Typescript**

- Aprendi bastante sobre javascript **assincronio** para lidar com reposta requições http

- Aprendi bastante sobre consumo de **REST API** tanto no backend para **seed** do banco de dados, como para pegar dados de outros aplicações no frontend

- Aprendi bastante sobre a utilização de **React Context API** para compartilhar estados entre os componentes da aplicação.

- Aprendi como criar metódios de registro e login utilizando **localstorage**.

- Várias utilizações de **CSS GRID** e **FLEXBOX** como poderosas maneiras criar layouts responsivos utilizando poucas linhas de código

- Aprendi a utilizar a biblioteca **REACT-HOT-TOAST** para criar notificações incrivéis

- Aprendi a utilizar **React-Router-Dom V6** Para criar rotas protegias
- Aprendi a criar **React Custom Hooks** para lidar com autenticação

- Aprendi como fazer o deploy de uma aplicação direito da linha de comando e como acessar a máquina direto na nuvem com **HEROKU**
- Aprendi como é fácil fazer o deploy de uma aplicação frontend utilizando a **Vercel**

## Improvements

Estou ciente de que é preciso acrescentar melhorias no código para deixa-lo mais limpo e organizado, para isso pretendo implementar no futuro alguns métódos: 

- Tests
- CSS Architeture
- MVC to the  REST API
- SOLID principles
- Typescript with React
- A11y

## Next Features

The next upgrades to the app
 
 - dsdsad
 - dasdsadas
 - dsaddasda


## Run Locally

Clone the project

```bash
  git clone https://github.com/thiagomagano/pokemon-team-builder-frontend
```

Go to the project directory

```bash
  cd pokemon-team-builder-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Related

Here are some related projects

- [Pokemon Team Planner](https://richi3f.github.io/pokemon-team-planner/)
- [Marriland's Pokémon Team Builder](https://marriland.com/tools/team-builder/)
- [My Pokemon Team](https://mypokemonteam.com/)

## Feedback

If you have any feedback, please contact me at thiagomagano1993@outlook.com



## API Reference

#### Get all Pokemons

```http
  GET /pokemons
```
#### Get all Users

```http
  GET /users
```
#### Get all Types

```http
  GET /types
```

#### Get teams of a user

```http
  GET /party?userId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

#### Create User
```http
  POST /register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. User Name |
| `email`      | `string` | **@Unique** **Required**. User Email |

#### Login to the app
```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. User Email |


