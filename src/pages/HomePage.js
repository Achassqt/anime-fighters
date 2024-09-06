import HomeBanner from '../components/HomeBanner';
import './home.css'

import luffy from '../assets/images/luffy.png';
import zoro from '../assets/images/zoro.png';
import sanji from '../assets/images/sanji.png';

const characters = [
  { name: 'Monkey D. Luffy', description: 'BLABLABLA', image: luffy },
  { name: 'Roronoa Zoro', description: 'BLABLABLA', image: zoro },
  { name: 'Vinsmoke Sanji', description: 'BLABLABLA', image: sanji },
  // Ajoutez autant de personnages que nécessaire
];

const HomePage = () => {
  return (
    <div className='home-container'>
      <HomeBanner characters={characters} />
    </div>
  );
};

export default HomePage;
