import React, { useState } from 'react';
import Outstaffing from '../Outstaffing/Outstaffing';
import Description from '../Description/Description';
import front from '../../images/front_end.png';
import back from '../../images/back_end.png';
import design from '../../images/design.png';

export const candidatesList = [
  {
    id: 1,
    name: 'Frontend',
    img: front,
    tags: 'JavaScript · Html · Css · Vue.js · ReactJS · Angular · MobX',
  },

  {
    id: 2,
    name: 'Backend',
    img: back,
    tags: 'Node.js · Express · Php · Ruby on Rails · Python · Wordpress · Java',
  },
  {
    id: 3,
    name: 'Design',
    img: design,
    tags: 'Figma · Avocode · PhotoShop · Xara · Pinegrow · Macaw · KompoZer',
  },
];

const Home = () => {
  const [tabs, setTabs] = useState([]);

  const handleTabBar = (name) => {
    const tabFilter = candidatesList.filter((el) => el.name.toLowerCase() === name);

    console.log(tabFilter);

    setTabs(tabFilter);
  };
  return (
    <>
      <Outstaffing onhandleTabBar={(name) => handleTabBar(name)} />
      <Description candidatesListArr={tabs.length > 0 ? tabs : candidatesList} />
    </>
  );
};

export default Home;
