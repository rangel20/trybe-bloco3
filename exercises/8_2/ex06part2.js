const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Objeto com os 3 lessons dentro, atrubuído a allLessons.
const allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

const numStudents = () => { // Retorna quantidade de alunos de todos OBJS.
  const keys = Object.keys(allLesson); 
  const number = 'numeroEstudantes';
  let qtd = 0;
  for (lesson of keys) {
    qtd += allLesson[lesson][number];
  }
  return `Quantidade total de estudantes: ${qtd}`;
};

console.log(numStudents());
