import 'dotenv/config';
import axios from 'axios';

(async () => {

  try {
    const response = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}`)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }

})()

