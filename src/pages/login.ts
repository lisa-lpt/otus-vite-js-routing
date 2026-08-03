import { navigateTo } from '../router/router';

export function renderLoginPage(parentEl: HTMLElement) {
  parentEl.innerHTML = `
    <form>
        <div>
            <label for="name">Enter your name</label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label for="surname">Enter your surname</label>
            <input type="text" name="surname"/>
        </div>
        <div>
            <label for="pet name">Enter type of your pet</label>
            <input type="text" name="pet name"/>
        </div>
        <div>
        <label for="type">Who's account to log in?</label>
        <label for="checkbox"><input type="radio" name="account" checked/>human</label>
            <label for="checkbox"><input type="radio" name="account"/>pet</label>
        </div>
        <button type="button" class="button-login">Enter</button>
    </form>
    `;
  const loginBtnEl = document.querySelector('.button-login');
  loginBtnEl?.addEventListener('click', () =>
    navigateTo('profileForm', parentEl)
  );
}
