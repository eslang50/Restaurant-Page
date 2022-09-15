export default function contact() {
  const container = document.createElement('div');

  const contactHeader = document.createElement('h1');
  contactHeader.innerHTML = 'Contact Info';

  contactHeader.classList.add('header')

  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = '<strong>617 - 222 - 1010</strong> <br> contact@enlightenment.com';

  contactInfo.classList.add('contactInfo')

  const msgForm = document.createElement('form');

  const msgLabel = document.createElement('label');
  msgLabel.innerHTML = 'Send us a message!';

  const msgArea = document.createElement('textarea')
  msgArea.rows = 10;
  msgArea.cols = 40;

  const submit = document.createElement('button');
  submit.innerHTML = 'Submit'

  msgForm.appendChild(msgLabel);
  msgForm.appendChild(msgArea);
  msgForm.appendChild(submit)

  container.appendChild(contactHeader);

  container.appendChild(contactInfo);

  container.appendChild(msgForm);


  const content = document.getElementById('content');
  content.appendChild(container);

  


  
}