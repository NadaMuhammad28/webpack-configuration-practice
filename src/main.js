import './styles.css';
import laughingLogo from './assets/laughing.svg';
import { JokeAPiRepository } from './api-repository';
const jokeService = JokeAPiRepository.getInstance();
const imgContainer = document.getElementById('laughImg');
const jokeElement = document.querySelector('#joke');
const jokeGeneratorBtn = document.querySelector('#jokeBtn');

imgContainer.src = laughingLogo;
jokeGeneratorBtn.addEventListener('click', () => fetchRandomJoke());

function fetchRandomJoke() {
  jokeService
    .getRandomJoke()
    .then((response) => response.json())
    .then((data) => {
      const jokeText = data.joke;
      jokeElement.textContent = jokeText;
    })
    .catch((error) => {
      console.error('Error fetching joke:', error);
    });
}

fetchRandomJoke();
