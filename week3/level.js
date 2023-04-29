const person = {
    name: 'csa',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2021, title: 'GoodStudent' }]
}
const { name } = person;
const { age: year } = person;
const { address: { city } } = person;
const { address: { area } } = person;
const {title: [title1]}= person;
const { title: [, { title:title2}] } = person;
const{title3='God'}=person;
console.log(name);
console.log(year);
console.log(city);
console.log(area);
console.log(title1);
console.log(title2);
console.log(title3);