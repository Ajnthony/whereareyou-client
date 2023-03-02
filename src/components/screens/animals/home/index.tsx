import AnimalsList from 'components/animalsList';
import AnimalsFilter from 'components/screens/animals/home/AnimalsFilter';

const AnimalsScreen = () => {
  return (
    <div>
      <AnimalsFilter />
      <AnimalsList />
    </div>
  );
};

export default AnimalsScreen;
