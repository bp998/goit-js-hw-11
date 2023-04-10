import axios from 'axios';
const input = document.querySelector('input[name="searchQuery"]');

const galleryLibrary = async (perPage, page) => {
  const userInput = input.value;
  const pixabay = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(pixabay, {
      params: {
        key: '35262947-7b4d084d7b454f8881faebde2',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safeSearch: true,
        per_page: perPage,
        page,
      },
    });
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

export default galleryLibrary;
