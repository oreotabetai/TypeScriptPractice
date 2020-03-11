import { uuid } from 'uuidv4';

import { User } from "./User";

const user = new User('鈴木', '太郎', 44);

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

saibanButton.onclick = (e) => {
    uuidSpan.innerText = uuid();
}