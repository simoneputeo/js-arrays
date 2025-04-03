const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log('1.-----------------------------------------------------')
const reversedTeachers = null;
console.log('-------------------------------------------------------');

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log('2.-----------------------------------------------------')
const longNames = teachers.filter(name => name.length >= 5);
console.log(longNames)
console.log('-------------------------------------------------------');

// 3. Rimuovi 'Ed' dall'array teachers
console.log('3.-----------------------------------------------------')
console.table(teachers);
teachers.splice(1,1);
console.table(teachers);
console.log('-------------------------------------------------------');

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
console.log('4.-----------------------------------------------------')

const isFabioPresent = null;
console.log('-------------------------------------------------------');

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
console.log('-------------------------------------------------------');
