import museums from "./data.js";

const btnClose = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalWrap = modal.querySelector('.modal-wrap');
const cells = document.querySelectorAll('.td-hover');
const title = modal.querySelector('.title');
const text = modal.querySelector('.text');
const image = modal.querySelector('.modal__img');

btnClose.addEventListener('click', modalViewHandler);

modal.addEventListener('click', (event) => {
  console.log('event: ', event.target);

})


cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    modal.classList.toggle('modal--open');
    for (let elem of museums) {
      if (elem.id == cell.dataset.number) {
        title.textContent = `${elem.title}`;
        image.setAttribute('src', `${elem.img}`)
        text.textContent = `${elem.description}`;
      }
    }
  })
})

function modalViewHandler() {
  modal.classList.toggle('modal--open');
}

