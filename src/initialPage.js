export default function initial() {
  const content = document.getElementById('content')

  const container = document.createElement('div');

  const header = document.createElement('h1');
  header.classList.add('header')
  header.innerHTML = "Ethan's Enlightened Restaurant"
  
  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = "Welcome to Ethan's Enlightened Restaurant, where you will feel enlightened by eating any meal served here!";
  
  container.appendChild(header);
  container.appendChild(description);

  content.appendChild(container);
}

