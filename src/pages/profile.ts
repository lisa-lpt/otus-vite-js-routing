import { getLocalStorage } from '../localStorage/localStorage';
import { navigateTo } from '../router/router';
import { store } from '../store';

export function renderProfilePage(parentEl: HTMLElement) {
  parentEl.innerHTML = `
  <div class="account-container"></div>
  <button class="button-switch-acc">Switch account</button>
  <button class="button-change-details">Go to change details</button>
  `;
  const containerEl = parentEl.querySelector('.account-container');
  function renderAccount() {
    if (store.getState().person == 'human') {
      const details = getLocalStorage('human');
      containerEl!.innerHTML = `
    <div>
      <h2>Your account details <h2>
      <p>Your name: ${details[0]} ${details[1]}</p>
      <p>Your age: ${details[2]}</p>
      <p>Your hobby: ${details[3]}</p>
      <p>Your email: ${details[4]}</p>
    </div>
  `;
    } else {
      const details = getLocalStorage('pet');
      containerEl!.innerHTML = `
      <div>
        <h2>${details[1]}'s account details <h2>
        <p>Pet type: ${details[0]}</p>
        <p>Pet's name: ${details[1]}</p>
        <p>Pet's size: ${details[2]}</p>
        <p>Pet's color: ${details[3]}</p>
        <p>Pet's age: ${details[4]}</p>
      </div>
    `;
    }
  }
  renderAccount();

  const switchAccBtn = document.querySelector('.button-switch-acc');
  const ChangeDetailsBtnEl = document.querySelector('.button-change-details');

  switchAccBtn?.addEventListener('click', () => {
    store.dispatch({
      type: 'setPerson',
      payload: store.getState().person == 'human' ? 'pet' : 'human',
    });
    renderAccount();
  });

  ChangeDetailsBtnEl?.addEventListener('click', () => {
    navigateTo('profileForm', parentEl);
  });
}
