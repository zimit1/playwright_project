# playwright_project


Для запуска тестов нужно:
1. открыть папку "playwright_project-main"
2. в верхней строке, где указан адрес папки, удалить содрежимое и написать "cmd" для открытия консоли
3. использовать команду "npx playwright test --reporter=allure-playwright" для запуска тестов
4. использовать команду "npx allure generate ./allure-results --clean" для создания репорта
5. использовать команду "npx allure open ./allure-report" для открытия репорта