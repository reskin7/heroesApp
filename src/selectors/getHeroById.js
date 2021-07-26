import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
  if (id > heroes.length) {
    throw new Error(`No existe el heroe con el ${id}`);
  }

  return heroes.find((hero) => hero.id === id);
};
