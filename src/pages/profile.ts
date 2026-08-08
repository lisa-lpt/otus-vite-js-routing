import { navigateTo } from '../router/router';
import { store } from '../store';

export function renderProfilePage(parentEl: HTMLElement) {
  parentEl.innerHTML = `
  <div class="account-container"></div>
  <button class="button-switch-acc">Switch account</button>
  <button class="button-change-details">Go to change details</button>
  <button class="button-logout">Logout</button>
  `;
  const containerEl = parentEl.querySelector('.account-container');
  function renderAccount() {
    const { person, petInfo, humanInfo } = store.getState();
    if (person === 'human') {
      containerEl!.innerHTML = `
    <div>
      <h2>Your account details <h2>
      <p>Your name: ${humanInfo.name} ${humanInfo.surname}</p>
      <p>Your age: ${humanInfo.age}</p>
      <p>Your hobby: ${humanInfo.hobby}</p>
      <p>Your email: ${humanInfo.email}</p>
    </div>
  `;
    } else {
      containerEl!.innerHTML = `
      <div>
        <h2>${petInfo.petName}'s account details <h2>
        <p>Pet type: ${petInfo.petType}</p>
        <p>Pet's name: ${petInfo.petName}</p>
        <p>Pet's size: ${petInfo.petSize}</p>
        <p>Pet's color: ${petInfo.petColor}</p>
        <p>Pet's age: ${petInfo.petAge}</p>
      </div>
    `;
    }
  }
  renderAccount();

  const switchAccBtn = document.querySelector('.button-switch-acc');
  const changeDetailsBtn = document.querySelector('.button-change-details');
  const logoutBtn = document.querySelector('.button-logout');

  switchAccBtn?.addEventListener('click', () => {
    store.dispatch({
      type: 'setPerson',
      payload: store.getState().person == 'human' ? 'pet' : 'human',
    });
    renderAccount();
  });

  changeDetailsBtn?.addEventListener('click', () => {
    navigateTo('profileForm', parentEl);
  });

  logoutBtn?.addEventListener('click', () => {
    store.dispatch({ type: 'clearState' });
    navigateTo('', parentEl);
  });
}
