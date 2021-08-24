import { onNavigate } from './app.js';

export const Post = () => {
  const postView = document.createElement('p');
  postView.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
  return postView;
};
/*const signOutBtn = document.createElement('button');
signOutBtn.setAttribute('type', 'button');
signOutBtn.textContent = 'Salir';
signOutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('te saliste');
  });
});*/

const signupRoute = document.querySelector('#post');
signupRoute.addEventListener('click', () => {
  onNavigate('/post');
});