// Спецификации

function Weiter(count, btn) {
    if (count >= 1) {
        btn.textContent = 'Дальше'
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number)
}

// Цифры

const numBtn = document.getElementById('num-btn')
const numNums = document.getElementById('num-text')

let count = 0

numBtn.addEventListener('click', function () {
    const random = getRandomNumber(1000)
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
    word = getRandomNumber(wordsArray.length)
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
const questionsArray = [
    ['Как меня зовут?', 'Wie heiße ich?'],
    ['Как тебя зовут?', 'Wie heißt du?'],
    ['Как его зовут?', 'Wie heißt er?'],
    ['Как ее зовут?', 'Wie heißt sie?'],
    ['Как нас зовут?', 'Wie heißen wir?'],
    ['Как вас зовут?(множ.числ.)', 'Wie heißt ihr?'],
    ['Как их зовут?(они)', 'Wie heißen sie?'],
    ['Как их зовут?(Вы)', 'Wie heißen Sie?'],

    ['Сколько мне лет?', 'Wie alt bin ich?'],
    ['Сколько тебе лет?', 'Wie alt bist du?'],
    ['Сколько ему лет?', 'Wie alt ist er?'],
    ['Сколько ей лет?', 'Wie alt ist sie?'],
    ['Сколько нам лет?', 'Wie alt sind wir?'],
    ['Сколько вам лет?(множ.числ.)', 'Wie alt seid ihr?'],
    ['Сколько им лет?', 'Wie alt sind sie?'],
    ['Сколько вам лет?(Вы)', 'Wie alt sind Sie?'],

    ['Откуда я?', 'Woher komme ich?'],
    ['Откуда ты?', 'Woher kommst du?'],
    ['Откуда он?', 'Woher kommt er?'],
    ['Откуда она?', 'Woher kommt sie?'],
    ['Откуда оно?', 'Woher kommt es?'],
    ['Откуда мы?', 'Woher kommen wir?'],
    ['Откуда вы?(множ.числ.)', 'Woher kommt ihr?'],
    ['Откуда они?', 'Woher kommen sie?'],
    ['Откуда вы?(уваж.форма)', 'Woher kommen Sie?'],

    ['Где я живу?', 'Wo wohne ich?'],
    ['Где ты живешь?', 'Wo wohnst du?'],
    ['Где он живет?', 'Wo wohnt er?'],
    ['Где она живет?', 'Wo wohnt sie?'],
    ['Где оно живет?', 'Wo wohnt es?'],
    ['Где мы живем?', 'Wo wohnen wir?'],
    ['Где вы живете?(множ.числ.)', 'Wo wohnt ihr?'],
    ['Где они живут?', 'Wo wohnen sie?'],
    ['Где вы живете?(уваж.форма)', 'Wo wohnen Sie?'],

    ['Кто я?', 'Wer bin ich?'],
    ['Кто ты?', 'Wer bist du?'],
    ['Кто он?', 'Wer ist er?'],
    ['Кто она?', 'Wer ist sie?'],
    ['Кто оно?', 'Wer ist es?'],
    ['Кто мы?', 'Wer sind wir?'],
    ['Кто вы?(множ.числ.)', 'Wer seid ihr?'],
    ['Кто они?', 'Wer sind sie?'],
    ['Кто Вы?(уваж.форма)', 'Wer sind Sie?'],
]

let pronArrNum
let addWordArrNum
let endWordsArrNum

let sentCount = 0
let sentTextValue
sentBtn.addEventListener('click', function () {
    sentCount ++
    Weiter(sentCount, sentBtn)
    const sentMainNum = getRandomNumber(2)
    if (sentMainNum === 0) {
        pronArrNum = getRandomNumber(pronounArray.length)
        addWordArrNum = getRandomNumber(addWordsArray.length)
        endWordsArrNum = getRandomNumber(endWordsArray.length)
        sentText.textContent = pronounArray[pronArrNum][0] + addWordsArray[addWordArrNum][0] + endWordsArray[endWordsArrNum][0]
        sentTextValue = pronounArray[pronArrNum][1] + addWordsArray[addWordArrNum][1] + endWordsArray[endWordsArrNum][1]
    } else if (sentMainNum === 1) {
        const sentQuestArrNum = getRandomNumber(questionsArray.length)
        const arrays = questionsArray[sentQuestArrNum][0]
        sentText.textContent = questionsArray[sentQuestArrNum][0]
        sentTextValue = questionsArray[sentQuestArrNum][1]
    }
})

sentCheckBtn.addEventListener('click', function () {
    sentRichtig.classList.remove('active')
    sentFalsch.classList.remove('active')
    if (sentInput.value === sentTextValue) {
        sentRichtig.classList.add('active')
    } else {
        sentFalsch.classList.add('active')
    }
})

sentForgotBtn.addEventListener('click', function () {
    alert(sentTextValue)
})

// sentCheckBtn.addEventListener('click', function () {
//     if (sentInput.value = sentText) {
//
//     }
// })

//
// let sentCount = 0
//
// sentBtn.addEventListener('click', function () {
//     sentCount ++
//     pronArrNum = getRandomNumber(pronounArray.length)
//     addWordArrNum = getRandomNumber(addWordsArray.length)
//     endWordsArrNum = getRandomNumber(endWordsArray.length)
//     sentText.textContent = pronounArray[pronArrNum][0] + addWordsArray[addWordArrNum][0] + endWordsArray[endWordsArrNum][0]
//     Weiter(sentCount, sentBtn)
// })
//
// sentCheckBtn.addEventListener('click', function () {
//     sentRichtig.classList.remove('active')
//     sentFalsch.classList.remove('active')
//     const allArrays = pronounArray[pronArrNum][1] + addWordsArray[addWordArrNum][1] + endWordsArray[endWordsArrNum][1]
//     if (sentInput.value === allArrays) {
//         sentRichtig.classList.add('active')
//     } else {
//         sentFalsch.classList.add('active')
//     }
//     sentInput.value = ''
// })
//
// sentForgotBtn.addEventListener('click', function () {
//     alert(pronounArray[pronArrNum][1] + addWordsArray[addWordArrNum][1] + endWordsArray[endWordsArrNum][1])
// })