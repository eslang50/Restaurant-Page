import './styles.css';
import homePage from './initialPage.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const list = document.createElement('ul');
const content = document.getElementById('content');

list.classList.add('list');

const home = document.createElement('li');
home.innerHTML = 'Home';

const menu = document.createElement('li');
menu.innerHTML = 'Menu';

const contact = document.createElement('li');
contact.innerHTML = 'Contact';

list.appendChild(home);
list.appendChild(menu);
list.appendChild(contact);

content.appendChild(list);

// FOR TESTING 

homePage();

// FOR TESTING

home.addEventListener('click', (e) => {
  content.removeChild(content.lastChild);
  homePage();
});

menu.addEventListener('click', (e) => {
  content.removeChild(content.lastChild);
  menuPage();
});

contact.addEventListener('click', (e) => {
  content.removeChild(content.lastChild);
  contactPage();
});




