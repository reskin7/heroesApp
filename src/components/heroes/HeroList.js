import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import './HeroList.css';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
