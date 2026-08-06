import {
  getLocalStorage,
  setLocalStorageStoreHuman,
  setLocalStorageStorePet,
} from '../localStorage/localStorage';
import { navigateTo } from '../router/router';
import { store } from '../store';

export function renderProfileFormPage(parentEl: HTMLElement) {
  parentEl.innerHTML = ``;
  if (store.getState().person == 'human') {
    const details = getLocalStorage('human');

    const greetingEl = document.createElement('p');
    greetingEl.classList.add('greeting');
    greetingEl.textContent = `Greetings, ${details[0]} ${details[1]}! `;
    // greetingEl.textContent = `Greetings, ${store.getState().humanInfo.name} ${store.getState().humanInfo.surname}! `;
    parentEl.appendChild(greetingEl);
    const formEl = document.createElement('div');
    formEl.classList.add('form-container');
    parentEl.appendChild(formEl);
    formEl.innerHTML = `
    <form>
        <p>Please, add a few more details about yourself</p>
        <div>
        <label for="human age">Enter your age </label>
        <input type="text" name="human age" class="input-human-age" required/>
        </div>
        <div>
            <label for="hobby">Enter your hobby </label>
            <input type="text" name="hobby" class="input-human-hobby" required/>
        </div>
        <div>
            <label for="email">Enter your email </label>
            <input type="email" name="email" class="input-human-email" required>
        </div>
        <button type="button" class="button-form">Save</button>
    </form>
    `;
  } else {
    const greetingEl = document.createElement('p');
    greetingEl.classList.add('greeting');
    const detailsP = getLocalStorage('pet');
    greetingEl.textContent = `Greetings, ${detailsP[0]} ${detailsP[1]}`;
    // greetingEl.textContent = `Greetings, ${store.getState().petInfo.petType} ${store.getState().petInfo.petName}`;
    parentEl.appendChild(greetingEl);
    const formEl = document.createElement('div');
    formEl.classList.add('form-container');
    parentEl.appendChild(formEl);
    formEl.innerHTML = `
      <form> 
        <p>Please, add a few more details about your pet </p>
        <div>
            <label for="size">Enter your pet's size</label>
            <input type="text" name="size" class="input-pet-size" required/>
        </div>
        <div>
            <label for="color">Enter your pet's color</label>
            <input type="text" name="color" class="input-pet-color" required/>
        </div>
        <div>
            <label for="age">Enter your pet's age</label>
            <input type="text" name="age" class="input-pet-age" required/>
        </div>
        <button type="button" class="button-form">Save</button>
      </form>
      `;
  }

  const formBtnEl = document.querySelector('.button-form');
  const inputHumanAge =
    document.querySelector<HTMLInputElement>('.input-human-age');
  const inputHumanHobby =
    document.querySelector<HTMLInputElement>('.input-human-hobby');
  const inputHumanEmail =
    document.querySelector<HTMLInputElement>('.input-human-email');
  const inputPetSize =
    document.querySelector<HTMLInputElement>('.input-pet-size');
  const inputPetColor =
    document.querySelector<HTMLInputElement>('.input-pet-color');
  const inputPetAge =
    document.querySelector<HTMLInputElement>('.input-pet-age');

  formBtnEl?.addEventListener('click', () => {
    if (store.getState().person == 'human') {
      store.dispatch({
        type: 'addInfoToHuman',
        payload: {
          age: inputHumanAge!.value.trim(),
          hobby: inputHumanHobby!.value.trim(),
          email: inputHumanEmail!.value.trim(),
        },
      });
      setLocalStorageStoreHuman();
    } else {
      store.dispatch({
        type: 'addInfoToPet',
        payload: {
          petAge: inputPetAge!.value.trim(),
          petColor: inputPetColor!.value.trim(),
          petSize: inputPetSize!.value.trim(),
        },
      });
      setLocalStorageStorePet();
    }
    navigateTo('profile', parentEl);
  });
}
