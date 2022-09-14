import restImg1 from './images/enlighten1.jpg'
import restImg2 from './images/enlighten2.jpg'

export default function initial() {
  const content = document.getElementById('content')

  const container = document.createElement('div');
  container.classList.add('container')

  const header = document.createElement('h1');
  header.classList.add('header')
  header.innerHTML = "Ethan's Enlightened Restaurant"

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');

  const restaurantImg1 = document.createElement('div');
  const img1 = new Image();
  img1.src = restImg1;
  img1.classList.add('restImg1');
  restaurantImg1.appendChild(img1)

  const restaurantImg2 = document.createElement('div');
  const img2 = new Image();
  img2.src = restImg2;
  img2.classList.add('restImg1');
  restaurantImg2.appendChild(img2)

  imgContainer.appendChild(restaurantImg1);
  imgContainer.appendChild(restaurantImg2);
  
  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = "Welcome to Ethan's Enlightened Restaurant, where you will feel enlightened by eating any meal served here!";

  const hours = document.createElement('div');
  hours.classList.add('hours');

  hours.innerHTML = "<strong>Hours</strong> <br /> Monday - Friday: 10 am - 10 pm <br /> Saturday: 1 pm - 12 am <br /> Sunday: 9 am - 6 pm";
  
  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(hours);
  container.appendChild(imgContainer);


  content.appendChild(container);
}

