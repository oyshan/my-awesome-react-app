const api = require('../services/api');

/**
 * Constants
 */
export const POPULATE_MESSAGES_PENDING = 'POPULATE_MESSAGES_PENDING';
export const POPULATE_MESSAGES_SUCCESS = 'POPULATE_MESSAGES_SUCCESS';
export const POPULATE_MESSAGES_FAILED = 'POPULATE_MESSAGES_FAILED';
export const POST_MESSAGE_PENDING = 'POST_MESSAGE_PENDING';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';

/**
 * Actions - simple objects
 */
function populateMessagesPending() {
  return {
    type: POPULATE_MESSAGES_PENDING,
  };
}

function populateMessagesSuccess(messages) {
  return {
    type: POPULATE_MESSAGES_SUCCESS,
    messages
  };
}

function populateMessagesFailed(error) {
  return {
    type: POPULATE_MESSAGES_FAILED,
    error
  };
}

function postMessagePending() {
  return {
    type: POST_MESSAGE_PENDING,
  };
}

function postMessageSuccess() {
  return {
    type: POST_MESSAGE_SUCCESS,
  };
}

function postMessageFailed(error) {
  return {
    type: POST_MESSAGE_FAILED,
    error
  };
}

/**
 * Action creators - able to dispatch any number of actions
 * The functions we export and make available for calling in components or elsewhere
 */
export function postMessage({ name, text }) {
  return (dispatch) => {

    dispatch(postMessagePending());

    /**
     * Here we use our API abstraction to post
     * a message to the server
     */
    return api.postMessage({ name, text })
    .then(() => dispatch(postMessageSuccess()))
    .catch((err) => dispatch(postMessageFailed(err)))

  };
}

export function populateMessages() {
  return (dispatch) => {
    dispatch(populateMessagesPending());

    /**
     * Here we use our API abstraction to
     * fetch all available messages from the server
     */
    return api.fetchMessages()
    .then((messages) => dispatch(populateMessagesSuccess(messages)))
    .catch((err) => dispatch(populateMessagesFailed(err)))
  };
}