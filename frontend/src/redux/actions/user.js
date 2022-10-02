import axios from "axios";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/api/users/login", reqObj);
    localStorage.setItem("user", JSON.stringify(user.data));
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
