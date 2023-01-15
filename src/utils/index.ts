import {faker, SexType} from "@faker-js/faker";

type Role =
  'Allergists'
  | 'Dermatologists'
  | 'Ophthalmologists'
  | 'Obstetrician'
  | 'Cardiologists'
  | 'Endocrinologists'
  | 'Gastroenterologists'
  | 'Nephrologists'
  | 'Urologists'
  | 'Neurologists'
  | 'Psychiatrists'
  | 'Radiologists';

export interface IUser {
  _id: string;
  avatar: string;
  appointmentDate: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  role?: Role
}

export const createRandomUser = (): IUser => {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);

  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    appointmentDate: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    role: faker.helpers.arrayElement(["Allergists", "Cardiologists", "Dermatologists", "Endocrinologists", "Gastroenterologists", "Nephrologists", "Neurologists", "Obstetrician", "Ophthalmologists", "Psychiatrists", "Radiologists", "Urologists"]),
  };
}

/**
 * convert number with commas
 */
export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
