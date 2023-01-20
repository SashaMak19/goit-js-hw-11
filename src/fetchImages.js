import axios from 'axios';

// export function fetchImages(KEY, query) {
//   return fetch(
//     `https://pixabay.com/api/?key=32833060-357ee47d83b97b03f386cb629&q=yellow+flowers&image_type=photo`
//   ).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });
// }

const baseUrl = 'https://pixabay.com/api';
const KEY = '32833060-357ee47d83b97b03f386cb629';

export async function fetchImages(query, page) {
  const response = await axios.get(
    `${baseUrl}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  return response;
}
