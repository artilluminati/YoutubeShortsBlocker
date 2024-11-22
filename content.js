// Массив с селекторами для скрытия блоков
const selectorsToHide = [
    "div#dismissible.style-scope.ytd-rich-shelf-renderer",
    "div#dismissible.style-scope ytd-rich-shelf-renderer",
    "ytd-rich-section-renderer",
    // Селектор для раздела Shorts
    // Добавляйте сюда другие селекторы, которые нужно скрывать
    // Например:
    // 'ytd-compact-video-renderer.style-scope.ytd-rich-grid-media', // Для скрытия других блоков
];

// Функция для скрытия элементов по селекторам
const hideElements = () => {
    selectorsToHide.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.style.display = "none";
        });
    });
};

// Ожидание загрузки контента на странице
window.addEventListener("load", () => {
    hideElements(); // Скрыть сразу при загрузке страницы

    // Добавить наблюдатель для динамически добавляющихся элементов
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, { childList: true, subtree: true });
});
