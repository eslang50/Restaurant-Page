export default function menu() {
  const container = document.createElement('div');

  const menuHeader = document.createElement('h1')
  menuHeader.innerHTML = 'Menu';

  const menuInfo = document.createElement('p');

  menuInfo.innerHTML = '$10 - Enlightening Elixer'

  const content = document.getElementById('content');

  container.appendChild(menuHeader);

  container.appendChild(menuInfo);

  content.appendChild(container);
}