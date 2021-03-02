const messageInput = $("#message");
const send = $("#like");
const bodyChat = $(".body-chat");
let message = "";

$(document).ready(function () {});

send.click(function () {
  assignMessage();
  // alert(message);
  let returnedMessage = creatMessage(message);
  reportOnPromise(returnedMessage);
  clearMessage();
});

function assignMessage() {
  message = messageInput.val();
}

let creatMessage = function creatMessage(text) {
  let messageHolder = `   <div class="sender rtl">
          
          <div class="message-holder">
            <p id="message-par">${text}</p>
          </div>
        </div>`;
  bodyChat.append(messageHolder);

  return Promise.resolve(text);
};

const reportOnPromise = function (promise) {
  promise
    .then((result) => {
      let response = `   <div class="sender  ">
        <img
            src="images/portrait.jpg"
            alt="profile picture "
            id="profile-pic-message"
          />
      <div class="message-holder">
          <p id="message-par">${result}</p>
          </div>
          </div>`;
      setTimeout(function () {
        bodyChat.append(response);
      }, 1000);
    })
    .catch((message) => console.log(`Error calling ${message} `));
};

function clearMessage() {
  messageInput.val("");
}