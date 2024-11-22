# YouTube Shorts Blocker

## 🚫 Избавьтесь от раздражающих блоков с Shorts на YouTube!

YouTube Shorts может быть полезным, но для многих пользователей эти короткие видео занимают слишком много места на главной странице. Это расширение для браузера помогает избавиться от разделов с **Shorts** на YouTube, улучшая опыт просмотра.

### Что делает это расширение?

Это расширение скрывает блоки с видео Shorts на главной странице YouTube, предоставляя вам чистую ленту с контентом, который вам действительно интересен. Если вы устали от раздражающих предложений для коротких видео, это расширение для вас!

### 📦 Установка

#### 1. Загрузите и установите расширение вручную

1. Скачайте репозиторий или [запакованное расширение](https://github.com/artilluminati/YoutubeShortsBlocker/releases/latest) с раздела "Releases".
2. Откройте страницу расширений в Chrome, перейдя по адресу `chrome://extensions/`.
3. Включите **Режим разработчика** (переключатель в верхнем правом углу).
4. Нажмите на кнопку **Загрузить распакованное расширение**.
5. Выберите папку с распакованным расширением или установите `.zip` файл, если используете релизную версию.

#### 2. Установка из репозитория

1. Клонируйте репозиторий с помощью Git:

   ```bash
   git clone https://github.com/artilluminati/YouTubeShortsBlocker.git
   ```
2. Перейдите в каталог проекта:
   ```bash
   cd YoutubeShortsBlocker
   ```

## 🔧 Как настроить
Расширение использует список CSS-селекторов для скрытия элементов, и вы можете легко добавлять новые селекторы в файл `content.js`. Просто откройте этот файл и добавьте новые селекторы в массив `selectorsToHide`.
