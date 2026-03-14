import type { Quiz } from "src/types/Quiz";

export const Arrays: Quiz[] = [
  {
    id: 1,
    question: "Elige el resultado correcto de ejecutar el siguiente código:",
    options: [
      {
        text: "[10, 2, 30, 4, 5]",
        isCorrect: true,
        explication:
          "¡Correcto! En JavaScript, los arrays son mutables, lo que significa que puedes cambiar sus elementos después de haberlos creado. En este caso, el primer elemento (índice 0) se cambia a 10 y el tercer elemento (índice 2) se cambia a 30, resultando en el array [10, 2, 30, 4, 5].",
      },
      {
        text: "[1, 2, 3, 4, 5]",
        isCorrect: false,
        explication:
          "¡No! En JavaScript, los arrays son mutables, lo que significa que puedes cambiar sus elementos después de haberlos creado. En este caso, el primer elemento (índice 0) se cambia a 10 y el tercer elemento (índice 2) se cambia a 30, resultando en el array [10, 2, 30, 4, 5].",
      },
    ],
  },
];
