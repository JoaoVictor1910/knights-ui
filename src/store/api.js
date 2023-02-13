import axios from 'axios';

export default {
  async getList(filter) {
    return await axios.get(`http://localhost:8090/knights/list/`, { params: filter });
  },
  async getKnight(filter) {
    let path = filter ? filter : ''
    return await axios.get(`http://localhost:8090/knights/list/${path}`);
  },
  async createKnight(data) {
    return await axios.get(`http://localhost:8090/knights/create/`, { params: {data: JSON.stringify(data)} });
  },
  async updateKnight(data) {
    return await axios.get(`http://localhost:8090/knights/update/`, { params: {data: JSON.stringify(data)} });
  },
  async deleteKnight(filter) {
    let path = filter ? filter : ''
    return await axios.get(`http://localhost:8090/knights/delete/${path}`);
  },
  async viewKnight(filter){
    let path = filter ? filter : ''
    return await axios.get(`http://localhost:8090/knights/view/${path}`);
  }
};