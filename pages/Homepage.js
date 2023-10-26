const displayData = (element) =>{
// Create a new swiper-slide div element
const swiperSlide = document.createElement('div');
swiperSlide.className = 'swiper-slide';
const swiperMain = document.querySelector(".swiper-wrapper")

// Create an img element
const img = document.createElement('img');
img.src = element.image;
img.alt = '';

// Create an h2 element for Brand
const brandH2 = document.createElement('h2');
brandH2.textContent = 'Brand : Nike';

// Create a p element for the product name
const productNameP = document.createElement('p');
productNameP.textContent = element.name;

// Create a div element for ratings
const ratingsDiv = document.createElement('div');
ratingsDiv.className = 'ratings';

// Create five i elements for stars
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

// Create a button element for "Check out details"
// const sliderBtn = document.createElement('button');
// sliderBtn.className = 'slider-btn';
// sliderBtn.textContent = 'Check out details';

const viewDetailsLink = document.createElement('a');
  viewDetailsLink.href = `../pages/singleProducts/product-${element.id}.html`;
  viewDetailsLink.textContent = 'View Details';

// Append all elements to the swiperSlide div
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


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});