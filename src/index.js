import render from './lib/render';
import LogForm from './pages/LogForm';
import LogFormApp from './lib/LogFormApp';

if (location.hash === '#visitantes') {
  render(LogForm, document.getElementById('root'));
}

LogFormApp();