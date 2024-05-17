function checkEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const resultDiv = document.getElementById('result');

    const errors = []; // Масив для зберігання помилок

    // Перевірка наявності символу "@"
    if (!emailInput.includes('@')) {
        errors.push('Відсутній символ "@".');
    }

    // Перевірка мінімальної довжини адреси
    if (emailInput.length < 6) {
        errors.push('Адреса електронної пошти повинна бути не менше 6 символів.');
    }

    // Перевірка наявності символів до "@"
    const atPosition = emailInput.indexOf('@');
    if (atPosition === 0) {
        errors.push('Потрібно ввести як мінімум 1 символ перед "@".');
    }

    // Перевірка наявності точки після "@"
    const dotPosition = emailInput.indexOf('.', atPosition + 1);
    if (dotPosition === -1) {
        errors.push('Праворуч від "@" має бути як мінімум 1 точка.');
    }

    // Перевірка кількості символів після останньої точки
    const lastDotPosition = emailInput.lastIndexOf('.');
    if (lastDotPosition + 2 > emailInput.length) {
        errors.push('Після останньої точки повинно бути мінімум 2 символи.');
    }

    // Перевірка наявності символів між "@" та точкою
    if (atPosition + 1 === dotPosition) {
        errors.push('Потрібно ввести символ між "@ " та точкою.');
    }

    // Відображення результату
    if (errors.length === 0) {
        resultDiv.textContent = 'Адреса електронної пошти введена вірно!';
    } else {
        resultDiv.textContent = 'Помилки: ' + errors.join(' ');
    }
}
