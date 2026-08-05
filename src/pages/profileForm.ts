import { navigateTo } from '../router/router';
import { store } from '../Store/configureStore';

export function renderProfileFormPage(parentEl: HTMLElement) {
  parentEl.innerHTML = ``;
  if (store.getState().person == 'human') {
    const greetingEl = document.createElement('p');
    greetingEl.classList.add('greeting');
    greetingEl.textContent = `Greetings, ${store.getState().name} ${store.getState().surname}! `;
    parentEl.appendChild(greetingEl);
    const formEl = document.createElement('div');
    formEl.classList.add('form-container');
    parentEl.appendChild(formEl);
    formEl.innerHTML = `
    <form>
        <p>Please, add a few more details about yourself</p>
        <div>
        <label for="human age">Enter your age </label>
        <input type="text" name="human age"/>
        </div>
        <div>
            <label for="hobby">Enter your hobby </label>
            <input type="text" name="hobby"/>
        </div>
        <div>
            <label for="email">Enter your email </label>
            <input type="email" name="email"/>
        </div>
        <button type="button" class="button-form">Save</button>
    </form>
    `;
  } else {
    const greetingEl = document.createElement('p');
    greetingEl.classList.add('greeting');
    greetingEl.textContent = `Greetings, ${store.getState().petType} ${store.getState().petName}`;
    parentEl.appendChild(greetingEl);
    const formEl = document.createElement('div');
    formEl.classList.add('form-container');
    parentEl.appendChild(formEl);
    formEl.innerHTML = `
      <form> 
        <p>Please, add a few more details about your pet </p>
        <div>
            <label for="size">Enter your pet's size</label>
            <input type="text" name="size"/>
        </div>
        <div>
            <label for="color">Enter your pet's color</label>
            <input type="text" name="color"/>
        </div>
        <div>
            <label for="age">Enter your pet's age</label>
            <input type="text" name="age"/>
        </div>
        <button type="button" class="button-form">save</button>
      </form>
      `;
  }

  const formBtnEl = document.querySelector('.button-form');
  formBtnEl?.addEventListener('click', () => navigateTo('profile', parentEl));
}
