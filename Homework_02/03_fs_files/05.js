// Task 05

// Створіть анонімний модуль у цьому файлі, який приймає аргументи — вихідний файл і кінцевий файл.
// Модуль має зчитати вміст вихідного файлу (текст) та записати його у кінцевий файл.
// Кодування — UTF-8, для запису використовуйте прапорець w.
// Якщо вхідного файла немає, то виконання завершується (return;)

const fs = require('fs');
exports.copyFileContent = async (inputFile, outputFile) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(inputFile)) {
            resolve(`The file ${inputFile} does not exist.`);
            return;
        }
        fs.readFile(inputFile, (err, data) => {
            fs.writeFile(outputFile, data, {encoding: "utf-8", flag: "w"}, (err) => {
                resolve(`${outputFile} was created with the content from ${inputFile}`);
            })
        })
    })
}
