import axios from 'axios';

const API_KEY = '45161214-00df49493351083ca415a448c';

async function searchImages(query, currentPage) {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&${searchParams}`
  );

  return response.data;
}

export default searchImages;
