import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.photo-link', {
  captionDelay: 250,
  captionsData: 'alt',
});

const galleryWall = photoArray => {
  const galleryItem = photoArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        views,
        likes,
        comments,
        downloads,
      }) => {
        return `<a class="photo-link" href="${largeImageURL}">
                                <div class="photo-card">
                                    <img class="photo-img" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" width=100% loading="lazy" />
                                    <div class="info">
                                        <p class="info-item">
                                            <span>Likes</span>
                                            ${likes}
                                        </p>
                                        <p class="info-item">
                                            <span>Views</span>
                                            ${views}
                                        </p>
                                        <p class="info-item">
                                            <span>Comments</span>
                                            ${comments}
                                        </p>
                                        <p class="info-item">
                                            <span>Downloads</span>
                                            ${downloads}
                                        </p>
                                    </div>
                                </div>
                            </a>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryItem);
  lightbox.refresh();
};

export default galleryWall;
