import './styles/index.css';

import { render } from 'react-dom';

const person = {
    name : "Ramanan",
    age : 20
};
const profession = {
    ...person,
    sector : 'IT',
}
console.log(profession);
console.log(person);

render(<h1> React setup </h1>, document.getElementById('root'));