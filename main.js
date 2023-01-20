const coderFirstName = 'Mario';
const coderSurname = 'Spasovski';
let year = 2022;
let birthYear = 1993;
let job = 'front end developer';
const mario = `I am ${coderFirstName} ${coderSurname}, a ${year - birthYear} years old ${job}. `;
console.log(mario);
console.log(`https://www.fiverr.com/mdesign93`)

function showAlert() {
    alert("The Website is under maintance");

}


const modal = document.querySelector('.mymodal');
const openModal = document.querySelector('#open-button');
const closeModal = document.querySelector('#close-x');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

