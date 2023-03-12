import {useState} from 'react';
import AnimalsList from 'components/animalsList';
import ListFilter from 'components/reusables/ListFilter';
import {tags} from 'components/data/tags';

const AnimalsScreen = () => {
  const [selectedFilterStatusOption, setSelectedFilterStatusOption] = useState(1);
  const [selectedFilterTypeOption, setSelectedFilterTypeOption] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState(1);
  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // this will be in redux
  const fullTagsList = [
    ...tags.age.labels,
    ...tags.breed.labels.cat,
    ...tags.breed.labels.dog,
    ...tags.breed.labels.others
  ];

  const dataProps = {
    selectedFilterStatusOption,
    setSelectedFilterStatusOption,
    selectedFilterTypeOption,
    setSelectedFilterTypeOption,
    selectedSortOption,
    setSelectedSortOption,
    tagInput,
    setTagInput,
    selectedTags,
    setSelectedTags,
    tags: fullTagsList
  };

  return (
    <div>
      <ListFilter page="animals" dataProps={dataProps} />
      <AnimalsList
        selectedFilterStatusOption={selectedFilterStatusOption}
        selectedFilterTypeOption={selectedFilterTypeOption}
        selectedSortOption={selectedSortOption}
        tagInput={tagInput}
        selectedTags={selectedTags}
      />
    </div>
  );
};

export default AnimalsScreen;
