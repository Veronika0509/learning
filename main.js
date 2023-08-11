// Спецификации

function Weiter(count, btn) {
    if (count >= 1) {
        btn.textContent = 'Дальше'
    }
}

// Цифры

const numBtn = document.getElementById('num-btn')
const numNums = document.getElementById('num-text')

let count = 0

numBtn.addEventListener('click', function () {
    const random = Math.floor(Math.random() * 1000)
    numNums.textContent = random.toString()
    count ++
    Weiter(count, numBtn)
})

// Слова

const wordBtn = document.getElementById('word-btn')
const wordText = document.getElementById('word-text')
const wordCheckBtn = document.getElementById('check')
const wordInput = document.getElementById('word-input')
const wordRichtig = document.getElementById('richtig')
const wordFalsch = document.getElementById('falsch')
const wordForgot = document.getElementById('forgot')

const wordsArray = [
    ['как', 'wie'],
    ['называться', 'heißen'],
    ['и', 'und'],
    ['откуда', 'woher'],
    ['приходить', 'kommen'],
    ['имя', 'der Name'],
    ['новый', 'neu'],
    ['дом', 'das Haus'],
    ['проживать', 'wohnen'],
    ['здесь', 'hier'],
    ['это', 'das'],
    ['привет', 'hallo'],
    ['кто', 'wer'],
    ['буква', 'der Buchstabe'],
    ['писать', 'schreiben'],
    ['фамилия', 'der Nachname'],
    ['страна', 'das Land'],
    ['женщина', 'die Frau'],
    ['мужчина', 'der Mann'],
    ['спасибо', 'danke'],
    ['хорошо', 'gut'],
    ['тоже, также', 'auch'],
    ['до свидания', 'auf wiedersehen'],
    ['до скорого', 'bis Bald'],
    ['так себе (дела)', 'és geht so'],
    ['пока', 'tschüss'],
    ['до завтра', 'bis Morgen'],
    ['что', 'was'],
    ['делать', 'machen'],
    ['учиться', 'lernen'],
    ['где', 'wo'],
    ['число', 'die Zahl'],
    ['номер', 'die Nummer'],
    ['да', 'ja'],
    ['нет', 'nein'],
    ['не', 'nicht']
]

let word
let wordCount = 0
wordBtn.addEventListener('click', function () {
    word = Math.floor(Math.random() * wordsArray.length)
    wordText.textContent = wordsArray[word][0]
    wordCount ++
    Weiter(wordCount, wordBtn)
})
wordCheckBtn.addEventListener('click', function () {
    wordRichtig.classList.remove('active')
    wordFalsch.classList.remove('active')
    const value = wordInput.value
    if (value === wordsArray[word][1]) {
        wordRichtig.classList.add('active')
    } else {
        wordFalsch.classList.add('active')
    }
    wordInput.value = ''
})
wordForgot.addEventListener('click', function () {
    alert(wordsArray[word][1])
})

// Предложения

const sentBtn = document.getElementById('sent-btn')
const sentText = document.getElementById('sent-text')
const sentInput = document.getElementById('sent-input')
const sentCheckBtn = document.getElementById('sent-check-btn')
const sentForgotBtn = document.getElementById('sent-forgot')
const sentRichtig = document.getElementById('sent-richtig')
const sentFalsch = document.getElementById('sent-falsch')

const pronounArray = [
    ['Я ', 'Ich bin '],
    ['Ты ', 'Du bist '],
    ['Он ', 'Er ist '],
    ['Она ', 'Sie ist '],
    ['Оно ', 'Es ist '],
    ['Мы ', 'Wir sind '],
    ['Вы ', 'Ihr seid '],
]
const addWordsArray = [
    ['уже ', 'schon '],
    ['еще не ', 'noch nicht '],
]
const endWordsArray = [
    ['сыт(ый) ', 'satt'],
    ['готов(ый) ', 'fertig'],
    ['уставш(ий) ', 'müde'],
    ['радостн(ый) ', 'froh'],
]

function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length)
}

let pronArrNum
let addWordArrNum
let endWordsArrNum


let sentCount = 0

sentBtn.addEventListener('click', function () {
    sentCount ++
    pronArrNum = getRandomNumber(pronounArray)
    addWordArrNum = getRandomNumber(addWordsArray)
    endWordsArrNum = getRandomNumber(endWordsArray)
    sentText.textContent = pronounArray[pronArrNum][0] + addWordsArray[addWordArrNum][0] + endWordsArray[endWordsArrNum][0]
    Weiter(sentCount, sentBtn)
})

sentCheckBtn.addEventListener('click', function () {
    sentRichtig.classList.remove('active')
    sentFalsch.classList.remove('active')
    const allArrays = pronounArray[pronArrNum][1] + addWordsArray[addWordArrNum][1] + endWordsArray[endWordsArrNum][1]
    if (sentInput.value === allArrays) {
        sentRichtig.classList.add('active')
    } else {
        sentFalsch.classList.add('active')
    }
    sentInput.value = ''
})

sentForgotBtn.addEventListener('click', function () {
    alert(pronounArray[pronArrNum][1] + addWordsArray[addWordArrNum][1] + endWordsArray[endWordsArrNum][1])
})