import { navigateTo } from '../router/router';
import { store } from '../Store/configureStore';

export function renderLoginPage(parentEl: HTMLElement) {
  parentEl.innerHTML = `
    <form>
        <div>
            <label for="name">Enter your name </label>
            <input class="input-name"type="text" name="name"/>
        </div>
        <div>
            <label for="surname">Enter your surname</label>
            <input class="input-surname" type="text" name="surname"/>
        </div>
        <div>
           <label for="pet type">What kind of animal is your pet?</label>
           <input class="input-pet-type" type="text" name="pet type"/>
       </div>
        <div>
            <label for="pet name">Enter your pet's name</label>
            <input class="input-pet-name" type="text" name="pet name"/>
        </div>
        <div>
            <label for="type">Whose account to log in?</label>
                <label for="account"><input class="input-person-check" type="radio" name="account" value="human" checked/> human</label>
                <label for="account"><input class="input-person-check" type="radio" name="account" value="pet" /> pet</label>
        </div>
        <button type="button" class="button-login">Enter</button>
    </form>
    `;

  const loginBtnEl = document.querySelector('.button-login');

  const inputName = document.querySelector<HTMLInputElement>('.input-name');
  const inputSurname =
    document.querySelector<HTMLInputElement>('.input-surname');
  const inputPetType =
    document.querySelector<HTMLInputElement>('.input-pet-type');
  const inputPetName =
    document.querySelector<HTMLInputElement>('.input-pet-name');

  loginBtnEl?.addEventListener('click', () => {
    const inputAcc = document.querySelector<HTMLInputElement>(
      '.input-person-check:checked'
    );
    const checkedAcc = inputAcc?.value;
    if (checkedAcc == 'human') {
      store.dispatch({
        type: 'human',
        payloadName: inputName!.value.trim(),
        payloadSurname: inputSurname!.value.trim(),
      });
    } else {
      store.dispatch({
        type: 'pet',
        payloadPetType: inputPetType!.value.trim(),
        payloadPetName: inputPetName!.value.trim(),
      });
    }
    navigateTo('profileForm', parentEl);
  });
}
