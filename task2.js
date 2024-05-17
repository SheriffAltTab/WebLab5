const form = document.getElementById('myForm');
const signatureDiv = document.getElementById('signature');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const secretWord = 'secret123'; // Секретне слово
    let signature = ''; // Рядок для збирання даних форми

    for (const field of form.elements) {
        if (field.name && field.value) {
            signature += `${field.name}=${field.value}&`;
        }
    }

    signature += `secret=${secretWord}&`;

    const checksum = calculateChecksum(signature);

    signature += `checksum=${checksum}`;

    signatureDiv.textContent = signature;
});

function calculateChecksum(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum % 1000;
}