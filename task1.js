function countWords() {
    const textInput = document.getElementById('text-input').value;
    const words = textInput.split(/[\s,.;:!?'-]+/); // Розбиття тексту на слова

    const wordCount = words.length;
    const maxLength = Math.max(...words.map(word => word.length)); // Знаходження максимальної довжини слова
    const minLength = Math.min(...words.map(word => word.length)); // Знаходження мінімальної довжини слова
    const averageLength = words.reduce((sum, word) => sum + word.length, 0) / wordCount; // Розрахунок середньої довжини слова

    const results = `Кількість слів: ${wordCount}\n` +
        `Довжина максимального слова: ${maxLength}\n` +
        `Довжина мінімального слова: ${minLength}\n` +
        `Середня довжина слова: ${averageLength.toFixed(2)}`;

    document.getElementById('results').textContent = results;
}
