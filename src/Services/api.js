import axios from 'axios';
import { PER_PAGE } from 'utils/constants';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '39007065-0db3fa1240dd246ce2d69362f',
//   per_page: PER_PAGE,
// };
// export const getPicture = async (q, page) => {
//   const { data } = await axios.get('', {
//     params: {
//       q,
//       page,
//     },
//   });
//   return data;
// };

const API = axios.create({
  baseURL: 'https://pixabay.com/api/',
});
export async function getData(config) {
  const { data } = await API.get('', {
    params: {
      key: '39007065-0db3fa1240dd246ce2d69362f',
      per_page: PER_PAGE,
      ...config,
    },
  });
  return data;
}
