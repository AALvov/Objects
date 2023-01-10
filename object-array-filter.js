function filter(object, key, value) {
  let newArr = [];
  let entries = Object.entries(object);
  for (let [keys, values] of entries) {
    let valueEntries = Object.entries(values);
    for (let [arrayKeys, arrayValues] of valueEntries) {
      if (arrayKeys === key && arrayValues === value) {
        newArr.push(object[keys]);
      }
    }
  }
  return newArr;
}


let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]


let result = filter(objects, 'name', 'Иван');

console.log(result);
