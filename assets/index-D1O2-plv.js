(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`humanInfo`,t=()=>{try{let t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch{}return null},n=t=>{if(t){localStorage.setItem(e,JSON.stringify(t));return}localStorage.removeItem(e)},r=`person`,i=()=>{try{let e=localStorage.getItem(r);if(e===`human`||e===`pet`)return e}catch{}return null},a=e=>{if(e){localStorage.setItem(r,e);return}localStorage.removeItem(r)},o=`petInfo`,s=()=>{try{let e=localStorage.getItem(o);if(e)return JSON.parse(e)}catch{}return null},c=e=>{if(e){localStorage.setItem(o,JSON.stringify(e));return}localStorage.removeItem(o)},l=(e,t)=>{let n=t,r=new Set;return{getState(){return n},dispatch(t){n=e(n,t),r.forEach(e=>e())},subscribe(e){return r.add(e),()=>r.delete(e)}}},u={person:`human`,humanInfo:{name:`John`,surname:`Doe`,age:`37`,hobby:`skiing`,email:`aaa@aaa.com`},petInfo:{petType:`cat`,petName:`Mr. Orange`,petSize:`small`,petColor:`orange`,petAge:`2`}},d=(e,t)=>{switch(t.type){case`addInfoToHuman`:{let r={...e,humanInfo:{...e.humanInfo,...t.payload}};return n(r.humanInfo),r}case`addInfoToPet`:{let n={...e,petInfo:{...e.petInfo,...t.payload}};return c(n.petInfo),n}case`setPerson`:{let n={...e,person:t.payload};return a(n.person),n}case`clearState`:return a(null),n(null),c(null),u;default:return e}};u.person=i()||u.person,u.humanInfo=t()||u.humanInfo,u.petInfo=s()||u.petInfo;var f=l(d,u);function p(e){e.innerHTML=`
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
    `;let t=document.querySelector(`.button-login`),n=document.querySelector(`.input-name`),r=document.querySelector(`.input-surname`),i=document.querySelector(`.input-pet-type`),a=document.querySelector(`.input-pet-name`);t?.addEventListener(`click`,()=>{let t=document.querySelector(`.input-person-check:checked`)?.value;f.dispatch({type:`setPerson`,payload:t}),f.dispatch({type:`addInfoToHuman`,payload:{name:n.value.trim(),surname:r.value.trim()}}),f.dispatch({type:`addInfoToPet`,payload:{petType:i.value.trim(),petName:a.value.trim()}}),x(`profileForm`,e)})}function m(e){e.innerHTML=`
    <h1>404</h1>
    <h2>Страница не найдена</h2>
  `}var h=`/otus-vite-js-routing/`;function g(){return window.location.pathname.replace(h,`/`)}function _(e){e.innerHTML=``;let{person:t,humanInfo:n,petInfo:r}=f.getState();if(t==`human`){let t=document.createElement(`p`);t.classList.add(`greeting`),t.textContent=`Greetings, ${n.name} ${n.surname}!`,e.appendChild(t);let r=document.createElement(`div`);r.classList.add(`form-container`),e.appendChild(r),r.innerHTML=`
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
    `}else{let t=document.createElement(`p`);t.classList.add(`greeting`),t.textContent=`Greetings, ${r.petType} ${r.petName}`,e.appendChild(t);let n=document.createElement(`div`);n.classList.add(`form-container`),e.appendChild(n),n.innerHTML=`
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
      `}let i=document.querySelector(`.button-form`),a=document.querySelector(`.input-human-age`),o=document.querySelector(`.input-human-hobby`),s=document.querySelector(`.input-human-email`),c=document.querySelector(`.input-pet-size`),l=document.querySelector(`.input-pet-color`),u=document.querySelector(`.input-pet-age`);i?.addEventListener(`click`,()=>{f.getState().person==`human`?f.dispatch({type:`addInfoToHuman`,payload:{age:a.value.trim(),hobby:o.value.trim(),email:s.value.trim()}}):f.dispatch({type:`addInfoToPet`,payload:{petAge:u.value.trim(),petColor:l.value.trim(),petSize:c.value.trim()}}),x(`profile`,e)})}function v(e){e.innerHTML=`
  <div class="account-container"></div>
  <button class="button-switch-acc">Switch account</button>
  <button class="button-change-details">Go to change details</button>
  <button class="button-logout">Logout</button>
  `;let t=e.querySelector(`.account-container`);function n(){let{person:e,petInfo:n,humanInfo:r}=f.getState();e===`human`?t.innerHTML=`
    <div>
      <h2>Your account details <h2>
      <p>Your name: ${r.name} ${r.surname}</p>
      <p>Your age: ${r.age}</p>
      <p>Your hobby: ${r.hobby}</p>
      <p>Your email: ${r.email}</p>
    </div>
  `:t.innerHTML=`
      <div>
        <h2>${n.petName}'s account details <h2>
        <p>Pet type: ${n.petType}</p>
        <p>Pet's name: ${n.petName}</p>
        <p>Pet's size: ${n.petSize}</p>
        <p>Pet's color: ${n.petColor}</p>
        <p>Pet's age: ${n.petAge}</p>
      </div>
    `}n();let r=document.querySelector(`.button-switch-acc`),i=document.querySelector(`.button-change-details`),a=document.querySelector(`.button-logout`);r?.addEventListener(`click`,()=>{f.dispatch({type:`setPerson`,payload:f.getState().person==`human`?`pet`:`human`}),n()}),i?.addEventListener(`click`,()=>{x(`profileForm`,e)}),a?.addEventListener(`click`,()=>{f.dispatch({type:`clearState`}),x(``,e)})}var y=`/otus-vite-js-routing/`;function b(e){let t=g();return t===`/`?p(e):t===`/profileForm`?_(e):t===`/profile`?v(e):m(e)}var x=(e,t)=>{history.pushState(null,``,y+e),b(t)};function S(e){e.innerHTML=`
    <section id="center"></section>
  `;let t=document.querySelector(`#center`);window.addEventListener(`popstate`,()=>b(t)),b(t)}S(document.querySelector(`#app`));