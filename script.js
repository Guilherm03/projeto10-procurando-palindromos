let word = prompt("Informe uma palavra de sua preferência:")
let inverseWord = ""
for(let i = word.length - 1; i >= 0; i-- ) {
    inverseWord += word[i]
}

if (word === inverseWord) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo. Sendo assim a palavra ${word} escrita da esquerda pra direita é ${inverseWord}.`)
}