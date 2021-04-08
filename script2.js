class Message {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }
}

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.messages = [];
  }

  addMessage(message) {
    this.messages.push(message);
  }

  deleteMessage(message) {
    let index = this.messages.indexOf(message);
    this.messages.splice(imdex, 1);
  }
}

let users = [];
let userId = 0;

cliq('submit', () => {
  users.push(new User(userId++, getValue('userName'), getValue('userAge')));
  enterChat();
});

function cliq(id, action) {
  let el = document.getElementById(id);
  el.addEventListener('click', action);
  return el;
}
const getValue = (id) => {
  return document.getElementById(id).value;
};

function enterChat() {
  let userDiv = document.getElementById('userDiv');
  let displayDiv = document.getElementById('displayDiv');
  let messageDiv = document.getElementById('messageDiv');
  for (user of users) {
    let h3 = document.createElement('h3');
    h3.classList = 'alert alert-success text-center';
    h3.innerText = `Hello ${user.name}, meet Alexandria!`;
    userDiv.classList = 'm-auto';
    userDiv.innerHTML = '';
    userDiv.appendChild(h3);
    let table = document.getElementById('table');
    table.classList = '';
    messageDiv.classList = '';
  }
}

let botText = [];
let text1 = `
<td><p class="mr-5 bg-light text-dark p-2 rounded border text-nowrap"><b>Alexandria</b> | 32</p></td>
<td><p class="mr-5 bg-warning px-5 py-1 rounded border">I'm from South India. Where are you from?</p></td>
`;
let text2 = `
<td><p class="mr-5 bg-light text-dark p-2 rounded border text-nowrap"><b>Alexandria</b> | 32</p></td>
<td><p class="mr-5 bg-warning px-5 py-1 rounded border">Oh wow! I've lost a lot of money there!</p></td>
`;
let text3 = `
<td><p class="mr-5 bg-light text-dark p-2 rounded border text-nowrap"><b>Alexandria</b> | 32</p></td>
<td><p class="mr-5 bg-warning px-5 py-1 rounded border">Bless up! Praises to the most high! Life is good.</p></td>
`;

botText.push(text1, text2, text3);
let textId = 0;
let btn = document.getElementById('submitMessage');
btn.onclick = () => {
  for (user of users) {
    let msgInput = document.getElementById('messageInput');
    user.addMessage(document.getElementById('messageInput').value);
    console.log(user.messages);
    msgInput.value = '';
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    let profTd = document.createElement('td');
    row.appendChild(profTd);
    let profP = document.createElement('p');
    profTd.appendChild(profP);
    profP.classList = 'mr-5 bg-warning px-5 py-1 rounded border text-nowrap';
    profP.innerHTML = `<b>${user.name}</b> | ${user.age}`;
    let messageTd = document.createElement('td');

    row.appendChild(messageTd);
    let messageP = document.createElement('p');
    messageTd.appendChild(messageP);
    messageP.classList = 'mr-5 bg-light text-dark p-2 rounded border';
    for (message of user.messages) {
      messageP.innerText = `${message}`;
    }
  }
  enterChat();
  botResponse(textId);
  textId++;
};

function botResponse(id) {
  setTimeout(() => {
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    row.innerHTML += botText[id];
  }, 5500);
}
