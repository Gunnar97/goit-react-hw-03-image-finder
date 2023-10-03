import axios from 'axios';

const API = axios.create({
  baseURL: 'https://pixabay.com/api/',
});
export async function getData(config) {
  const { data } = await API.get('', {
    params: {
      key: '39007065-0db3fa1240dd246ce2d69362f',
      ...config,
    },
  });
  return data;
}
