import { store } from './store';
import { changeStatus } from './actions/status';


const statusParagraph = document.querySelector('.status');
const usernameInput = document.querySelector('.username');

function hanleInput (e) {
    const username = e.target.value;
    store.dispatch(changeStatus(username))
}

//muda o status
usernameInput.oninput = hanleInput;

//recebe o status
store.subscribe(() => {
    const state = store.getState();
    statusParagraph.textContent = state.status;
})