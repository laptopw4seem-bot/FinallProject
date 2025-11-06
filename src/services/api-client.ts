import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params : {
    
    key : 'b344151cbb1e471b94a1ad0ff2cc5faa'
  }
});