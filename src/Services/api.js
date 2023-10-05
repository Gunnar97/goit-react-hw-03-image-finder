import axios from 'axios';
import { PER_PAGE } from 'utils/constants';

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
