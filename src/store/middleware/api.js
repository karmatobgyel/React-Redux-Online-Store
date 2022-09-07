import axios from "axios";
import * as apiActions from "./apiActions";

const api = (store) => (next) => (action) => {
  if (action.type === apiActions.apiCallBegan.type) {
    return next(action);
  }

  const { url, onSuccess, onStart, onError } = action.payload;
};
