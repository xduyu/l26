const goToTestBtn = document.getElementById('goToTestBtn');
const overlay = document.getElementById('overlay');
const modelGoTest = document.getElementById('model__go-test');
const goTestBtnModel = document.getElementById('go__test-btn__model');


goToTestBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
    modelGoTest.style.display = 'block'
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})

goTestBtnModel.addEventListener('click', () => {
    overlay.style.display = 'none'
    modelGoTest.style.display = 'none'
})