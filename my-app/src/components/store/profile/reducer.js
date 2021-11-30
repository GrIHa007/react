import { UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "firstName",
  lastName: "lastName",
  role: "admin",
  phone: "89005761123",
  country: "ru",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
