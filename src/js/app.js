document.addEventListener('DOMContentLoaded', () => {
  const loadingMessage = document.querySelector('.loading-message');
  const errorMessage = document.querySelector('.error-message');
  const newsContainer = document.querySelector('.news-container');
  const btn = document.querySelector('.btn');

  function fetchData() {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    newsContainer.style.display = 'none';

  fetch('http://localhost:5000/news')
    .then(response => response.json())
    .then(data => {
      loadingMessage.style.display = 'none';
      displayNews(data);
      newsContainer.style.display = 'flex';
    })
    .catch(() => {
      loadingMessage.style.display = 'none';
      errorMessage.style.display = 'block';
    });
  }

	// Функция вывода новоти
  function displayNews(news) {
    newsContainer.innerHTML = '';
    news.forEach(item => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('news');
      newsElement.innerHTML = `
        <h3>${item.title}</h3>
        <div class="post">
          <div class="avatar"></div>
          <div class="text">${item.content}</div>
        </div>
      `;
      newsContainer.appendChild(newsElement);
		});
  }

  btn.addEventListener('click', fetchData);

	// Загрузить данные при старте
  fetchData(); 
});
