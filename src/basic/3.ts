// Змінна, яка може містити або рядок, або число (Union Type)
let mixedValue: string | number;

mixedValue = "Привіт"; // Коректно, рядок
mixedValue = 123;      // Коректно, число
// mixedValue = true;  // Помилка, булеве значення не дозволено

// Змінна, яка може містити лише 'enable' або 'disable' (Literal Type)
let state: 'enable' | 'disable';

state = 'enable';  // Коректно
state = 'disable'; // Коректно
// state = 'active'; // Помилка, значення 'active' не дозволено