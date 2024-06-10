'use strict';
const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;


window.alert = function() {
  originalPrompt.apply(window, arguments);
};

window.prompt = function() {
  originalConfirm.apply(window, arguments);
};

window.confirm = function() {
  originalAlert.apply(window, arguments);
};

alert("Hello");
prompt('Hello');
confirm('Hello');

// window.alert = prompt;
// window.prompt = confirm;
// window.confirm = alert;
// alert("Hello");
// prompt('Hello')