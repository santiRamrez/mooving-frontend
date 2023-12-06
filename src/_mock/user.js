import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------
const rut = 1000;
const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/mooving-frontend/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.firstName(),
  lastname: faker.person.lastName(),
  email: faker.internet.email(),
  local_id: String(rut + index),
  phone: sample(['9 8965 8965', '2 2222 5426']),
  scope: sample(['RM']),
  status: sample(['Pendiente', 'Verificado', 'Banned']),
  id_car: sample(['KLKBEBE', 'HOLA123', 'KIKOCRAZY']),
}));

async function fakeNetwork(time) {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * time));
}

export async function getCarriers() {
  await fakeNetwork();
  return users;
}

// sample(['25.000.235-5', '9.254.659-8', '16.521.256-6']),
