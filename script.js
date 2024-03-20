function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const decodedText = inputText.split('').reverse().join('');
    document.getElementById('decodedText').innerText = decodedText;
}
