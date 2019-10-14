import Axios from 'axios';

export const updateObject = (oldObject, updtatedProperties) => {
  return {
    ...oldObject,
    ...updtatedProperties
  };
};
