// Rule book button to open modal and button to exit

const open = document.getElementById('rule-btn');
const rules_container = document.getElementById('rules_container');
const close = document.getElementsByClassName('exit');

open.addEventListener('click', () => {
    rules_container.classList.add('show');
})

close.addEventListener('click', () => {
    rules_container.classList.remove('show');
})