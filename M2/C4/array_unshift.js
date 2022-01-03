let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]

  let nuevoEstudiante = {nombre: 'Mariana', promedio: 9, curso: 'Full Stack'};
  console.log(nuevoEstudiante);
  estudiantes.unshift(nuevoEstudiante);

nuevoEstudiante = {nombre: 'Francisco', promedio: 2, curso: 'Android'};
console.log(nuevoEstudiante);
estudiantes.unshift(nuevoEstudiante);

console.log(estudiantes);

