export class JokeAPiRepository {
  static #instance: JokeAPiRepository | undefined = undefined;

  constructor() {}

  static getInstance() {
    if (!this.#instance) this.#instance = new JokeAPiRepository();
    return this.#instance;
  }

  getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
