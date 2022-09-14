import elixirImg from './images/elixir.jpg';
import nachosImg from './images/nachos.jpg';
import adoboImg from './images/adobo.jpg';

export default function menu() {
  const container = document.createElement('div');

  const menuHeader = document.createElement('h1')
  menuHeader.classList.add('menuHeader')
  menuHeader.innerHTML = 'Menu';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('menuGrid');
  
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('menuFlex');

  const menuItem1 = document.createElement('div');
  menuItem1.innerHTML = '$10 - Enlightening Elixir';
  menuItem1.classList.add('menuItem');

  const menuItem2 = document.createElement('div');
  menuItem2.innerHTML = '$7 - Nirvana Nachos';
  menuItem2.classList.add('menuItem');

  const menuItem3 = document.createElement('div');
  menuItem3.innerHTML = '$15 - Ascension Adobo';
  menuItem3.classList.add('menuItem');

  flexContainer.appendChild(menuItem1);
  flexContainer.appendChild(menuItem2);
  flexContainer.appendChild(menuItem3);

  const elixir = new Image();
  elixir.src = elixirImg;
  elixir.classList.add('menuImg');

  const adobo = new Image();
  adobo.src = adoboImg;
  adobo.classList.add('menuImg');

  const nachos = new Image();
  nachos.src = nachosImg;
  nachos.classList.add('menuImg');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgFlex');

  imgContainer.appendChild(elixir);
  imgContainer.appendChild(nachos);
  imgContainer.appendChild(adobo);
  
  container.appendChild(menuHeader);

  gridContainer.appendChild(flexContainer);
  gridContainer.appendChild(imgContainer);

  container.appendChild(gridContainer);

  

  const content = document.getElementById('content');
  content.appendChild(container);
}