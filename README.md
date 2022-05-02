
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

#### Tech Learned

- How powerful the **Prisma** tool can be, because I could modify the database schema very easily, type the models easily and quickly.

- **Data Modeling** using **Typescript**

- **Async Javascript** to handle http requests

- **REST API** consumption both in the backend to **seed** database, and to get data from other applications in the frontend

- **React Context API** to share states between application components.

- How to create registration and login methods using **localstorage** and retrive data from database.

- Various uses of **CSS GRID** and **FLEXBOX** as powerful ways to create responsive layouts using few lines of code

- Use the **REACT-HOT-TOAST** library to create amazing notifications

- Use **React-Router-Dom V6** to create protected routes

- create **React Custom Hooks** to easy handle authentication

- how to deploy an application right from the command line and how to access the machine directly in the cloud with **HEROKU**
- how easy it is to deploy a frontend application using **Vercel**

## Improvements

I am aware that it is necessary to add code in the future to make it cleaner and more organized, for this I intend to implement some methods in the future:

- [ ] Tests
- [ ] CSS Architeture
- [ ] MVC to the  REST API
- [ ] SOLID principles
- [ ] Typescript with React

## Next Features

The next upgrades to the app
 
 - [ ] Handle Delete Teams
 - [ ] Handle update of Pokemons in a team 
 - [ ] Random Team Generation
 - [ ] Feed with all users Teams
 - [ ] Like/favorite button to the teams
 - [ ] Table with team analizys
 - [ ] More generations of pokemons
 - [ ] Password Authentication
 - [ ] More Pokemon Stats
 - [ ] Pokemon Pages
 - [ ] Pokemon Type Battle


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


