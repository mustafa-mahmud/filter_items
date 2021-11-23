'use strict';

const itemWrapper = document.getElementById('item-wrapper');
const storeItems = document.querySelectorAll('#store-items > div');
const form = document.querySelector('form');
const searchItemInput = document.getElementById('search-item');

//when clicked on a tag, set .current class
function setCurrentClass(e) {
  const target = e.target;

  //if click tag is a
  if (target.localName === 'a') {
    itemWrapper
      .querySelectorAll('a')
      .forEach((a) => a.classList.remove('current'));
    target.classList.add('current');

    return target.textContent.trim();
  }
}

//when clicked on a tag, filter items
function filterItems(e) {
  const getItem = setCurrentClass(e);

  storeItems.forEach((div) => {
    const data = div.getAttribute('data-item');

    if (getItem !== 'all') {
      if (data === getItem) div.style.display = 'block';
      else div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  });
}

//search option works
function searchItem() {
  const userValues = searchItemInput.value.trim();

  storeItems.forEach((div) => {
    const text = div.getAttribute('data-item');
    const result = text.search(userValues);

    if (result > -1) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}

//////////////
itemWrapper.addEventListener('click', filterItems);
form.addEventListener('submit', (e) => e.preventDefault());
searchItemInput.addEventListener('keyup', searchItem);
