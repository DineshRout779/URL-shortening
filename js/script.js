const menu = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const btn = document.getElementById('submit-btn');
const resultDiv = document.querySelector('.result');
let inputUrl = document.getElementById('search');

const api = 'https://api.shrtco.de/v2/shorten?url=';

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let fetchUrl = `${api}${inputUrl.value}`;
  fetch('https://api.shrtco.de/v2/shorten?url=' + inputUrl.value)
    .then((res) => res.json())
    .then((data) => {
      inputUrl.value = '';
      displayShortenUrls(data.result);
    })
    .catch((err) => {
      console.log(err);
    });
  resultDiv.style.display = 'block';
});

function displayShortenUrls(urls) {
  resultDiv.innerHTML = `
      <div class="result-url">
          <p>${urls.full_short_link}</p>
          <button id="copy-btn" class="form-control submit">Copy</button>
      </div>
      <div class="result-url">
          <p>${urls.full_short_link2}</p>
          <button id="copy-btn" class="form-control submit">Copy</button>
      </div>
      <div class="result-url">
          <p>${urls.full_short_link3}</p>
          <button id="copy-btn" class="form-control submit">Copy</button>
      </div>
    `;
}
