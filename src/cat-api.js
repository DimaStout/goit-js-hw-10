import axios from 'axios';

const API_KEY =
  'live_Y1PplGzjyaqEhrOj5Nku5tY6WkdwPNKpLYKhpTYGTwBMuw7ylxd9bX3p3w9eBuS9';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (error) {
    throw error;
  }
}
