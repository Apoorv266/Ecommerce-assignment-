
const container = document.querySelector(".container")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
let pageValue = 1

const displayData = (element) => {
  const container = document.querySelector(".container")

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';


  const imageDiv = document.createElement('div');
  imageDiv.className = 'image';


  const img = document.createElement('img');
  img.src = element.image;
  img.alt = '';


  const h2 = document.createElement('h2');
  h2.textContent = element.name.slice(0, 16);


  imageDiv.appendChild(img);
  imageDiv.appendChild(h2);


  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'details';


  const sizeDiv = document.createElement('div');
  sizeDiv.className = 'size';

  for (let size = 7; size <= 10; size++) {
    const sizeSpan = document.createElement('span');
    sizeSpan.textContent = size;
    sizeDiv.appendChild(sizeSpan);
  }
  const sizeHeading = document.createElement('h3');
  sizeHeading.textContent = ': Size';

  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';


  const colorHeading = document.createElement('h3');
  colorHeading.textContent = ': Color';

  for (let size = 1; size <= 4; size++) {
    const colorSpan = document.createElement('span');
    colorDiv.appendChild(colorSpan);
  }

  const viewDetailsLink = document.createElement('a');
  viewDetailsLink.href = `../pages/singleProducts/product-${element.id}.html`;
  viewDetailsLink.textContent = 'View Details';


  sizeDiv.appendChild(sizeHeading);
  colorDiv.appendChild(colorHeading);
  detailsDiv.appendChild(sizeDiv);
  detailsDiv.appendChild(colorDiv);
  detailsDiv.appendChild(viewDetailsLink);

  imageDiv.appendChild(img);
  imageDiv.appendChild(h2);

  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(detailsDiv);

  //appending
  container.appendChild(cardDiv);

}

async function fetchFunc  () {
  fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (pageValue === 1) {
      data.slice(0, 4).forEach(element => {
        displayData(element)
      });
    }else if(pageValue === 2){
      data.slice(4, 8).forEach(element => {
        displayData(element)
      });
    }

  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
}

fetchFunc()

  const pageOneFunc = () =>{
    pageValue = 1
    container.innerHTML = null
    if (page2.classList.contains('active')) {
      page2.classList.remove('active');
    }
    page1.classList.add('active');
    fetchFunc()
  }

  const pageTwoFunc = () =>{
    pageValue = 2
    container.innerHTML = null
    if (page1.classList.contains('active')) {
      page1.classList.remove('active');
    }
    page2.classList.add('active');
    fetchFunc()
  }


  page1.addEventListener("click", pageOneFunc)
  page2.addEventListener("click", pageTwoFunc)

