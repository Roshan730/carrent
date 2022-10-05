// import axios from "axios";

// import { toast } from "react-toastify";

// export const userLogin = (reqObj) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });

//   try {
//     const user = await axios.post("/api/users/login", reqObj);

//     localStorage.setItem("user", JSON.stringify(user.data));

//     toast.success("Login SuccessFull");

//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     console.log(error);

//     toast.error("Error, Try again !");

//     dispatch({ type: "LOADING", payload: false });
//   }
// };

