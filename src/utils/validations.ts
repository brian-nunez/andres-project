import { z } from 'zod';

const firstNameValidation = z.string()

const lastNameValidation = z.string();

const dateOfBirthValidation = z.string();

const titleValidation = z.string();

export {
  firstNameValidation,
  lastNameValidation,
  dateOfBirthValidation,
  titleValidation,
};
