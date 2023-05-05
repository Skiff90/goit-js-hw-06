const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('ul.gallery');

const createGalleryList = (images) => {
  return images.map(({ url, alt }) => {
    const galleryItemRef = document.createElement('li');
    galleryItemRef.className = 'gallery__item';
    galleryItemRef.insertAdjacentHTML(
      'afterbegin',
      `<img src="${url}" alt="${alt}" class="gallery__img">`
    );
    return galleryItemRef;
  });
};

galleryListRef.append(...createGalleryList(images));
console.log(createGalleryList(images));
