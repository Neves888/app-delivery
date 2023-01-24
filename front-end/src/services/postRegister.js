import axios from 'axios';

const postRegister = async ({ name, email, password }) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/register',
    data: {
      name,
      email,
      password,
    },
  });
  return response.data;
};

export default postRegister;
