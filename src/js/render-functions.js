import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const renderImages = (resultData, gallery) => {
  gallery.innerHTML = '';

  const image = resultData
    .map(
      element =>
        `<li class="gallery-item">
    <a class="gallery-link" href="${element.largeImageURL}">
    <img class="item-image" src="${element.webformatURL}" alt="${element.tags}" /></a>
    <div class="main-content">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${element.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${element.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${element.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${element.downloads}</p>
          </li>
        </ul>
      </div></li>`
    )
    .join();

  gallery.innerHTML(image);

  const lightbox = new SimpleLightbox('.gallery-link', {
    inlineStyles: false,
    captionsData: 'alt',
    captionDelay: 250,
    disableScroll: true,
  });

  lightbox.refresh();
};

export default renderImages;
