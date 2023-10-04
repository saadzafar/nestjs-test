## About

Learning the ropes for NestJS with Redis integration for caching. Using the [Pokemon API](https://pokeapi.co 'Pokemon API') as a data source

## Set up locally

Install dependencies:

```
npm install
```

Create your own env file:

```
cp .env.example .env
```

Spin up local environment (hot reloading included):

```
# for nest app
npm run start:dev

# for redis cache (using HomeBrew)
brew install redis
brew services start redis
```

## Usage

Submit `GET` request to `https://localhost:3000/pokemon:id`
Replace `:id` with any number to retrieve the pokemon name

\*_To monitor Redis in a GUI, I'm using [TablePlus](https://tableplus.com/ 'TablePlus')_

## License

Nest is [MIT licensed](LICENSE).
