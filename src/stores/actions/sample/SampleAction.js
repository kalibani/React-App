
export const SET_DATA = 'sampleAction/SET_DATA';

export const sampleAction = () => (dispatch) => {
  dispatch({
    type: SET_DATA,
    data: 'halo'
  });
};
