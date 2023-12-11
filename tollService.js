import axios from 'axios';
import API_KEY from '../api';

const baseURL = 'https://api.tollguru.com/v1';

const calculateToll = async (start, end) => {
  const response = await axios.post(
    `${baseURL}/calculate?`,
    {
      source: start,
      destination: end,
      vehicleType: '2AxlesAuto',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    }
  );

  return response.data;
};

export { calculateToll };
