export default function tabs() {
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
  
}