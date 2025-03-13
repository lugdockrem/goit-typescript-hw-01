type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
  type Params = Omit<Form, 'errors'>;
  
  // Приклад використання
  const formParams: Params = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
  };
  
  // formParams.errors; // Помилка: Властивість 'errors' відсутня в типі 'Params'.