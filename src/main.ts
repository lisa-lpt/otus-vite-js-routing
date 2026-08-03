import './style.css';
import { renderApp } from './app.ts';

const rootEl = document.querySelector<HTMLDivElement>('#app');
renderApp(rootEl!);
