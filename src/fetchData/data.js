import axios from 'axios'
export const dataChar = async ()  => {
    const data = await axios.get('https://rickandmortyapi.com/api/character/')
     return  data;
}
