const para = document.querySelector('#intro');
para.style.backgroundColor = '#f2c556';

const para2 = document.querySelector('em');
para2.innerText = "USS Voyager Starship";

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://bit.ly/3RfG4sY');
newImg.setAttribute('alt', 'Starship Voyager');
starship.appendChild(newImg);

