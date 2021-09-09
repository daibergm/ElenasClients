interface IErrors<T> {
  [id: string]: T;
}

export const ERRORS: IErrors<string> = {
  ValidationErrors: 'Celular o contraseña incorrectos.',
  ClientValidationErrors: 'Falta  información o el ciente ya existe.',
  LoginFailure: 'Error desconocido, intente de nuevo mas tarde.',
};
