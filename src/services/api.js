import request from 'axios';

const apiURL = 'https://react-workshop-chat.herokuapp.com/chat';

export function postMessage({ name, text }, callback) {
  return request.post(apiURL, { name, text });
}

export function fetchMessages(callback) {
  return request
  .get(apiURL)
  .then((response) => response.data);
}