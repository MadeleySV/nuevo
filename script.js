const codigoMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.','Ñ':'--.--','O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

const reversorCodigoMorse = {};
for (let char in codigoMorse) {
    reversorCodigoMorse[codigoMorse[char]] = char;

}

function encriptar() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let resultado = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (char === ' ') {
            resultado += ' ';
        } else if (codigoMorse[char]) {
            resultado += codigoMorse[char] + ' ';
        }
    }

    document.getElementById('outputText').value = resultado.trim();
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value.split(' ');
    let resultado = '';

    for (let i = 0; i < inputText.length; i++) {
        const codigo = inputText[i];
        if (reversorCodigoMorse[codigo]) {
            resultado += reversorCodigoMorse[codigo];
        } else {
            resultado += ' ';
        }
    }
    document.getElementById('outputText').value = resultado;
}
