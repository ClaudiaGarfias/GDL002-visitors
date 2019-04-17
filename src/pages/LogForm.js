import createElement from '../lib/createElement';
import Button from '../components/Button';
import input from '../components/input';
import label from '../components/label';
import h1 from '../components/h1';

export default () => createElement('form', {
  className: 'log-form',
  children: [h1({ text: `Bienvenido por favor llena el registro:` }),
    label({ text: `Nombre Completo` }),
    input({ className: 'full-name-input', placeholder: 'nombre y apellidos' }),
    label({ text: 'Email' }),
    input({ placeholder: 'email' }),
    label({ text: 'Empresa' }),
    input({ placeholder: 'empresa u organización' }),
    label({ text: 'Anfitrión' }),
    input({ placeholder: 'anfitrión' }),
    label({ text: 'Tomar Fotografía' }),
    Button({ className: 'photo-btn', text: 'Tomar Foto' }),
    Button({ className: 'register-btn', text: 'Registrarse' })],
});
