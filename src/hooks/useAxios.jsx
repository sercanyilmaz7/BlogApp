import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  // const token = "5823059bacd7a98eedc421d3525c1578398edb02";

  const axiosPublic = axios.create({
    baseURL: "https://32176.fullstack.clarusway.com/"
  });
  const axiosWithToken = axios.create({
    baseURL: "https://32176.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosPublic,axiosWithToken};
};

export default useAxios;

//? Axios işlemlerini kısaltmak için ve içinde hooklar kullanacağım için ayrı bir CustomHook yapıyorum ve içinde instance larımı tanımlıyorum.



// {
//     "id": 2,
//     "username": "sssss",
//     "first_name": "",
//     "last_name": "",
//     "email": "sssss@gmail.com",
//     "image": "",
//     "bio": "",
//     "token": "5823059bacd7a98eedc421d3525c1578398edb02"
// }
