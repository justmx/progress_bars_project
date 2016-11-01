import apisauce from 'apisauce';
const BASE_URL = 'http://pb-api.herokuapp.com/bars';

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  });

  const getBars = () => api.get('');

  return {
    getBars
  };
};

export default {
  create
};
