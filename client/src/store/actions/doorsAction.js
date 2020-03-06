import { CREATE_DOOR } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const createDoor = img => {
  return async dispatch => {
    let response = await sendDoorData(img);
    // console.log(response1);
    // console.log("Response 2: " + response2);
    // axios({
    //   method: "POST",
    //   url: `${domain}/admin/login`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: doc
    // })
    //   .then(data => {
    //     // dispatch(setAuthToken(data.data.token));
    //   })
    //   .catch(e => console.log("Not Allowed"));
    if (response.success) {
      return { success: true };
    }
  };
};

const sendDoorData = async img => {
  let response = await axios.post(`${domain}/doors/`, img, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};
