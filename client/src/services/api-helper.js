import axios from 'axios';

//un-used 
const baseUrl = process.env.NODE_ENV !== 'production' ? 'https://magic-api.herokuapp.com' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================




export const getAllMagics = async () => {
  const resp = await api.get('/magics');
  return resp.data;
}

export const getOneMagic = async (id) => {
  const resp = await api.get(`/magics/${id}`);
  return resp.data;
}

export const postMagic = async (magicData) => {
  const resp = await api.post('/magics', magicData);
  return resp.data;
}

export const putMagic = async (id, magicData) => {
  const resp = await api.put(`/magics/${id}`, magicData);
  return resp.data;
}

export const destroyMagic = async (id) => {
  const resp = await api.delete(`/magics/${id}`);
  return resp;
}




export const postAddress = async (addressData, magicId) => {
  const resp = await api.post(`/magics/${magicId}/addresss`, addressData);
  return resp.data;
}

export const postPayment = async (paymentData, magicId) => {
  const resp = await api.post(`/magics/${magicId}/payments`, paymentData);
  return resp.data;
}