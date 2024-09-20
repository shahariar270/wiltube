import axios from 'axios';

const Api = async(url) => {


    const options = {
      method: 'POST',
      url: 'https://youtube-quick-video-downloader.p.rapidapi.com/api/youtube/links',
      headers: {
        'x-rapidapi-key': 'd0c7888f59msh3dbf0f94457204ap1d36c5jsnc78d818f8bdd',
        'x-rapidapi-host': 'youtube-quick-video-downloader.p.rapidapi.com',
        'Content-Type': 'application/json',
        'X-Forwarded-For': '70.41.3.18'
      },
      data: {
        url: url
      }
    };
    
    try {
        const response = await axios.request(options);
       return response
    } catch (error) {
        console.error(error);
    }

 
}

export default Api