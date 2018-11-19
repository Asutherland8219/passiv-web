export const getData = (url = '') => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Authorization": "JWT " + localStorage.getItem('jwt'),
    },
  })
  .then(response => response.json());
};

export const postData = (url = '', data = {}) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Authorization": "JWT " + localStorage.getItem('jwt'),
    },
  })
  .then(response => response.json());
};
