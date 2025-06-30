/* 
action creators -> action creator are simple function that return an object

*/

export const updateLoader = (value) => {
  return {
    type: "UPDATE_LOADER",
    value,
  };
};

export const updateData = (value) => {
  return {
    type: "UPDATE_DATA",
    value,
  };
};

export const updateError = (value) => {
  return {
    type: "UPDATE_ERROR",
    value,
  };
};

export const updateCart = (value) => {
  return {
    type: "UPDATE_CART",
    value,
  };
};
