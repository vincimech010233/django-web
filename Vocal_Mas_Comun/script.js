function findMostRepeatedVowel() {
    let input = document.getElementById('inputText').value.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = {};

    for (let char of input) {
        if (vowels.includes(char)) {
            vowelCount[char] = vowelCount[char] + 1 || 1;
        }
    }

    let maxCount = 0;
    let mostRepeatedVowel = '';

    for (let vowel in vowelCount) {
        if (vowelCount[vowel] > maxCount) {
            maxCount = vowelCount[vowel];
            mostRepeatedVowel = vowel;
        }
    }

    document.getElementById('result').textContent = mostRepeatedVowel || "No hay vocales en el texto.";
}
