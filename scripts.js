// function expression to select elements
const selectElement = (s) => _document.querySelector(s);
// open the menu
selectElement(s:'.open').addEventListener('click', () => {
    selectElement(s:'.nav-list').classList.add('active');
});

// close the menu
selectElement(s:'.close').addEventListener('click', () => {
    selectElement(s:'.nav-list').classList.remove(tokens:,'active');
});

