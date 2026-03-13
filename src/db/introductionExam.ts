export const introQuestions = [
  {
    id: 1,
    question: "¿JavaScript sólo se puede usar para crear páginas web?",
    options: [
      {
        text: "Verdadero",
        isCorrect: false,
        explication:
          "JavaScript es un lenguaje de propósito general. También se usa en servidores, apps de escritorio, robots, etc.",
      },
      {
        text: "Falso",
        isCorrect: true,
        explication:
          "Correcto. JavaScript es un lenguaje de propósito general. También se usa en servidores, apps de escritorio, robots, etc.",
      },
    ],
  },
  {
    id: 2,
    question: "¿Qué es programar en el mundo del software?",
    options: [
      {
        text: "Crear páginas web",
        isCorrect: false,
        explication:
          "Programar no se limita sólo a crear páginas web. Eso es una de las muchas cosas que podemos hacer programando.",
      },
      {
        text: "Construir instrucciones para que una computadora haga algo",
        isCorrect: true,
        explication:
          "Correcto. Programar es definir instrucciones precisas para que un ordenador realice tareas concretas.",
      },
      {
        text: "Cualquier cosa que hagamos en un ordenador",
        isCorrect: false,
        explication:
          "No todo lo que hacemos en un ordenador es programar. Usar aplicaciones creadas por otros no implica estar programando.",
      },
    ],
  },
];

export const dataTypes = [
  {
    id: 1,
    question: "¿Cuántos tipos de datos existen en JavaScript?",
    options: [
      {
        text: "Sólo existen 2 tipos de datos",
        isCorrect: false,
        explication:
          "¡Eso no es así! A día de hoy existen 9 tipos de datos distintos en JavaScript (aunque en el futuro puede que se añadan más). Lo que están divididos en 2 grandes grupos: los tipos primitivos y los no primitivos.",
      },
      {
        text: "9 tipos de datos que se dividen en dos grandes grupos",
        isCorrect: true,
        explication:
          "¡Efectivamente! A día de hoy existen 9 tipos de datos distintos en JavaScript (aunque en el futuro puede que se añadan más). Lo que están divididos en 2 grandes grupos: los tipos primitivos y los no primitivos.",
      },
    ],
  },
  {
    id: 2,
    question:
      "¿Cuántos valores se pueden representar en el tipo de dato Boolean?",
    options: [
      {
        text: "true y false",
        isCorrect: true,
        explication:
          "Exacto, los tipos booleanos sólo pueden ser verdadero o falso.",
      },
      {
        text: "Cualquier valor que se te ocurra",
        isCorrect: false,
        explication:
          "¡No! Los tipos booleanos sólo pueden ser verdadero o falso.",
      },
      {
        text: "Números, cadenas de texto y verdadero/falso",
        isCorrect: false,
        explication:
          "No. Los números y las cadenas de texto son tipos de datos distintos. Los booleanos sólo pueden ser verdadero o falso.",
      },
    ],
  },
  {
    id: 3,
    question: "El operador + se utiliza para...",
    options: [
      {
        text: "Sólo sirve para sumar dos números",
        isCorrect: true,
        explication:
          "Sí, sirve para sumar dos números pero al usarse con cadenas de texto, el operador + también sirve para concatenar.",
      },
      {
        text: "Concatenar dos textos",
        isCorrect: false,
        explication:
          "Sí, sirve para concatenar dos textos pero al usarse con números, el operador + sirve para sumarlos.",
      },
      {
        text: "Depende del tipo de dato que se esté utilizando",
        isCorrect: true,
        explication:
          "¡Exacto! El operador + será utilizado para sumar dos números o para concatenar dos cadenas de texto, dependiendo del tipo de dato que se esté utilizando en la operación.",
      },
    ],
  },
];
