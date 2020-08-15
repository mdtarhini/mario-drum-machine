export const fetchButtons = () => {
  return {
    type: "FETCH_BUTTONS",
  };
};

export const showDescription = (text) => {
  return {
    type: "SHOW_DESCRIPTION",
    payload: text,
  };
};
