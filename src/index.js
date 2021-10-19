import './styles/index.css';

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