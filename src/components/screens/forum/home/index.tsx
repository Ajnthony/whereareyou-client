import {useState} from 'react';
import Container from '@mui/material/Container';
import Posts from 'components/posts';
import ListFilter from 'components/reusables/ListFilter';
import {categories} from 'components/data/categories';

const ForumHomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState(1);

  const dataProps = {
    selectedCategory,
    setSelectedCategory,
    selectedSortOption,
    setSelectedSortOption,
    categories
  };

  return (
    <Container maxWidth="md">
      <ListFilter page="forum" dataProps={dataProps} />
      <Posts
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
    </Container>
  );
};

export default ForumHomeScreen;
