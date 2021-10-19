import './styles/index.css';

import App from './components/App';

import ReactDom from 'react-dom';

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
ReactDom.render
(<App/>, document.getElementById('root'));