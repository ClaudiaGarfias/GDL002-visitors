export default () => {
  const page = document.CreateElement('div');
  page.className = 'sign-in';

  const signInButton = document.CreateElement('button');
  signInButton.innerText = 'Sign in';

  page.appendChild(signInButton);
  return page;
};
