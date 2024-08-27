

const btn = document.querySelector('.button');
const mathInput = document.querySelector('.math')
const englishInput = document.querySelector('.english')
const urduInput = document.querySelector('.urdu')
const scienceInput = document.querySelector('.science')
const resultEl = document.querySelector('.para');


const calculator =   () => {
    const mathEl = parseFloat(mathInput.value) || 0;
    const englishEl = parseFloat(englishInput.value) || 0;
    const urduEl = parseFloat(urduInput.value) || 0;
    const scienceEl = parseFloat(scienceInput.value) || 0;

    const totalMarks = mathEl + englishEl + urduEl + scienceEl;
    const maxMarks = 400;
    const percentage = (totalMarks/maxMarks)*100;
    resultEl.innerHTML = `You got ${totalMarks} marks out of ${maxMarks} and percentage is ${percentage}%`

};

btn.addEventListener('click', calculator)




