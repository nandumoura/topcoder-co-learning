import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice";
import learningSpacesSlice from "../redux/learningSpacesSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    learningSpaces: learningSpacesSlice,
  },
});
