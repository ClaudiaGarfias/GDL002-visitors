import createElement from '../lib/createElement';

export default props =>
  createElement('h1', {
    innerText: props.text
  });
