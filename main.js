// Get references to the elements
const firstAnswer = document.getElementById('first-answer')
const iconPlusFirst = document.getElementById('icon-plus-1')
const iconMinusFirst = document.getElementById('icon-minus-1')

const secondAnswer = document.getElementById('second-answer')
const iconPlusSecond = document.getElementById('icon-plus-2')
const iconMinusSecond = document.getElementById('icon-minus-2')

const thirdAnswer = document.getElementById('third-answer')
const iconPlusThird = document.getElementById('icon-plus-3')
const iconMinusThird = document.getElementById('icon-minus-3')

const fourthAnswer = document.getElementById('fourth-answer')
const iconPlusFourth = document.getElementById('icon-plus-4')
const iconMinusFourth = document.getElementById('icon-minus-4')

/*
//Function to toggle the answer visibility
function toggleAnswer(answer, plusIcon, minusIcon){
    if(answer.style.display === 'none'){
        answer.style.display = 'block';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
    } else{
        answer.style.display = 'none';
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
    }
}

// Add event listeners to share icons
iconPlusFirst.addEventListener('click', () => toggleAnswer(firstAnswer, iconPlusFirst, iconMinusFirst))
iconMinusFirst.addEventListener('click', () => toggleAnswer(firstAnswer, iconPlusFirst, iconMinusFirst))

iconPlusSecond.addEventListener('click', () => toggleAnswer(secondAnswer, iconPlusSecond, iconMinusSecond))
iconMinusSecond.addEventListener('click', () => toggleAnswer(secondAnswer, iconPlusSecond, iconMinusSecond))


iconPlusThird.addEventListener('click', () => toggleAnswer(thirdAnswer, iconPlusThird, iconMinusThird))
iconMinusThird.addEventListener('click', () => toggleAnswer(thirdAnswer, iconPlusThird, iconMinusThird))


iconPlusFourth.addEventListener('click', () => toggleAnswer(fourthAnswer, iconPlusFourth, iconMinusFourth))
iconMinusFourth.addEventListener('click', () => toggleAnswer(fourthAnswer, iconPlusFourth, iconMinusFourth))

*/

function toggleAnswer(answer, plusIcon, minusIcon){
        answer.classList.toggle('visible');
        plusIcon.style.display = plusIcon.style.display === 'none' ? 'block' : 'none';
        minusIcon.style.display = minusIcon.style.display === 'block' ? 'none' : 'block';
}

// Add event listeners to share icons
iconPlusFirst.addEventListener('click', () => toggleAnswer(firstAnswer, iconPlusFirst, iconMinusFirst))
iconMinusFirst.addEventListener('click', () => toggleAnswer(firstAnswer, iconPlusFirst, iconMinusFirst))

iconPlusSecond.addEventListener('click', () => toggleAnswer(secondAnswer, iconPlusSecond, iconMinusSecond))
iconMinusSecond.addEventListener('click', () => toggleAnswer(secondAnswer, iconPlusSecond, iconMinusSecond))


iconPlusThird.addEventListener('click', () => toggleAnswer(thirdAnswer, iconPlusThird, iconMinusThird))
iconMinusThird.addEventListener('click', () => toggleAnswer(thirdAnswer, iconPlusThird, iconMinusThird))


iconPlusFourth.addEventListener('click', () => toggleAnswer(fourthAnswer, iconPlusFourth, iconMinusFourth))
iconMinusFourth.addEventListener('click', () => toggleAnswer(fourthAnswer, iconPlusFourth, iconMinusFourth))