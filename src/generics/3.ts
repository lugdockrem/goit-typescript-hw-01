function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  // Приклад використання
  const obj1 = { name: 'Max' };
  const obj2 = { age: 30 };
  
  const mergedObj = merge(obj1, obj2);
  
  console.log(mergedObj); // Виведе: { name: 'Max', age: 30 }