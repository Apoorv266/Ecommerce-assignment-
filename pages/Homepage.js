const displayData = (element) =>{

const swiperSlide = document.createElement('div');
swiperSlide.className = 'swiper-slide';
const swiperMain = document.querySelector(".swiper-wrapper")


const img = document.createElement('img');
img.src = element.image;
img.alt = '';


const brandH2 = document.createElement('h2');
brandH2.textContent = 'Brand : Nike';


const productNameP = document.createElement('p');
productNameP.textContent = element.name;


const ratingsDiv = document.createElement('div');
ratingsDiv.className = 'ratings';

for (let i = 0; i < 3; i++) {
    const solidStar = document.createElement('i');
    solidStar.className = 'fa-solid fa-star';
    ratingsDiv.appendChild(solidStar);
}

for (let i = 0; i < 2; i++) {
    const regularStar = document.createElement('i');
    regularStar.className = 'fa-regular fa-star';
    ratingsDiv.appendChild(regularStar);
}



const viewDetailsLink = document.createElement('a');
  viewDetailsLink.href = `../pages/singleProducts/product-${element.id}.html`;
  viewDetailsLink.textContent = 'View Details';

swiperSlide.appendChild(img);
swiperSlide.appendChild(brandH2);
swiperSlide.appendChild(productNameP);
swiperSlide.appendChild(ratingsDiv);
swiperSlide.appendChild(viewDetailsLink);
// Append the swiperSlide to the document's body or any desired container element
swiperMain.appendChild(swiperSlide);

}

fetch('Homepage.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
      data.forEach(element => {
    displayData(element)
});
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });


 