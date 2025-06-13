// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає назву теки та повертає кількість файлів у ній (теки не враховуємо).

// Приклад аргумента 'test_folder'

const fs = require('fs');

module.exports = (folderName = __dirname + "/test_folder") => {
    if (!fs.existsSync(folderName)) {
        return 0;
    }
    return fs.readdirSync(folderName).length;
}
