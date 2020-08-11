const { default: events } = require("../../src/events");

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");


const appendMsg = (text, nickname) =>{
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "out": "self" }"> ${
            nickname ? nickname: "You"
        }:</span> ${text}
         `;
         messages.appendChild(li);
};

const hadleSendMsg = event =>{
    event.preventDefault();
    const input = sendMsg.querySelector("input");
    const { value } = input;
    input.value = "";
    appendMsg(value);
 };

if (sendMsg) {
    sendMsg.addEventListener("submit", hadleSendMsg);
}

