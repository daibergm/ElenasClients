interface IErrors<T> {
  [id: string]: T;
}

export const ERRORS: IErrors<string> = {
  ValidationErrors: 'Celular o contraseña incorrectos.',
  LoginFailure: 'Error desconocido, intente de nuevo mas tarde.',
};
