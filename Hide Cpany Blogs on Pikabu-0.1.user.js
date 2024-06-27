// ==UserScript==
// @name         Hide Company Blogs on Pikabu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Скрывает посты с меткой "Блоги компаний" на Pikabu
// @author       Your Name
// @match        https://pikabu.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Функция для скрытия постов с меткой "Блоги компаний"
    function hideCompanyBlogs() {
        // Получаем все статьи на странице
        const articles = document.querySelectorAll('article.story');

        articles.forEach(article => {
            // Проверяем наличие метки "Блоги компаний" внутри статьи
            const hint = article.querySelector('.hint[aria-label="Блоги компаний"]');
            const tag = article.querySelector('a.tags__tag[data-tag="Блоги компаний"]');

            // Если метка найдена, скрываем статью
            if (hint || tag) {
                article.style.display = 'none';
            }
        });
    }

    // Запускаем функцию при загрузке страницы
    window.addEventListener('load', hideCompanyBlogs);

    // Запускаем функцию при изменении DOM (для динамически загружаемого контента)
    const observer = new MutationObserver(hideCompanyBlogs);
    observer.observe(document.body, { childList: true, subtree: true });
})();