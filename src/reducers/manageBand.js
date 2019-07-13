import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    let id = uuid()
    let newBand = {...action.name, id}
    return ({
      ...state,
      bands: [
        ...state.bands,
        newBand
      ]
    })
    case 'DELETE_BAND':
    let result = {bands: state.bands.filter(band => band.id !== action.id)}
    return result
    default:
      return state;
  }
};
