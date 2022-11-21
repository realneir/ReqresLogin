import axios from "axios";

export const ValidateUser = async (user) => {
  let val = '';
  try {
    const url = 'https://reqres.in/api/login';
    const params = {
      "email": user.email,
      "password": user.password
    }

    await axios.post(url, params)
    .then((res) => {
      const { data } = res;

      console.log('res ', res);

      val = data.token;
    })
    return await val;
  }catch (err){
    return err;
  };  
}