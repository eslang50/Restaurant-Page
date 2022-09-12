export default function contact() {
  const container = document.createElement('div');

  const contactHeader = document.createElement('h1');

  const contactInfo = document.createElement('p');
  contactInfo.innerHTML = 'Name: Ethan Liu Email: eslangliu@gmail.com';

  const content = document.getElementById('content');

  container.appendChild(contactHeader);

  container.appendChild(contactInfo);

  content.appendChild(container);


  
}