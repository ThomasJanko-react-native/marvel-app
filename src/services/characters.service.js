import axios from 'react-native-axios'
import md5 from "react-native-md5";

const BASE_URL = 'http://gateway.marvel.com/v1/public';
const API_KEY = 'e1deb495f57e4ff291e185cfe0d853e3';
const PRIVATE_KEY = '5d318ff30da0fa66a64583a35766a49583a8c1c5';

function generateHash(ts) {
    const hash = md5(ts + PRIVATE_KEY + API_KEY);
    return hash;
}

async function getCharacters() {
    const ts = 1;
    // const hash = generateHash(ts);
    const hash = '3200d4b23a1b118f42bb12eeeaaa31e4'
  
    const response = await axios.get(`${BASE_URL}/characters`, {
      params: {
        apikey: API_KEY,
        ts: ts,
        hash: hash,
      },
      headers: {
        Accept: '*/*',
      },
    });
  
    const characters = response.data.data.results;
    return characters;
  }
  
  export default getCharacters;
