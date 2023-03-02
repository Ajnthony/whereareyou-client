import {useState} from 'react';
import Posts from 'components/posts';
import PostsFilter from 'components/screens/forum/home/PostsFilter';

const ForumHomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSortOption, setSelectedSortOption] = useState(1);

  return (
    <div>
      <PostsFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
      <Posts
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
    </div>
  );
};

export default ForumHomeScreen;
