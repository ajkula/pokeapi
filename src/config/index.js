
export const BASE_PATH = 'http://localhost:3000';

export const config = {
  env:               'production',
  organisation:      "izberg's pokemons",
  app:               'pokeapi',
  links:             { },
  breakPoints:       {
    desktopTablet: 1040,
  },
  contact:           {
    commercial: 'greg.jeftic@gmail.com',
    technical:  'greg.jeftic@gmail.com',
    billing:    'greg.jeftic@gmail.com',
    support:    'greg.jeftic@gmail.com',
  },
  routes: {
    pokemons:      BASE_PATH + "/",
    favorites:     BASE_PATH + "/favorites",
  },
  path: {
    pokemons: '/',
    favorites: "/favorites",
  },
  pokeapi: {
    url: "https://pokeapi.co/api/v2/pokemon",
  },
}