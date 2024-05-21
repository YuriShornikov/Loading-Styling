if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const loadingMessage = document.querySelector('.loading-message');
    const errorMessage = document.querySelector('.error-message');
    const newsContainer = document.querySelector('.news-container');
    const btn = document.querySelector('.btn');

    function fetchData() {
        loadingMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        newsContainer.style.display = 'none';

        fetch('http://localhost:3000/news') // URL вашего сервера
            .then(response => response.json())
            .then(data => {
                loadingMessage.style.display = 'none';
                displayNews(data);
                newsContainer.style.display = 'block';
            })
            .catch(() => {
                loadingMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    }

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

    fetchData(); // Загрузить данные при старте
});
