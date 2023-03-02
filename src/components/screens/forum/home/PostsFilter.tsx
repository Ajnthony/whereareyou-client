import {useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {categories} from 'components/data/categories';
import {tags} from 'components/data/tags';
import TextField from '@mui/material/TextField';

const PostsFilter = ({selectedCategory, setSelectedCategory, selectedSortOption, setSelectedSortOption}) => {
  const filterOptions = [
    {id: 1, name: 'new'},
    {id: 2, name: 'top'}
  ];

  const fullTagsList = [
    ...tags.age.labels,
    ...tags.breed.labels.cat,
    ...tags.breed.labels.dog,
    ...tags.breed.labels.others
  ];

  return (
    <Stack direction="row">
      <Select value={selectedCategory} label="Category" onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>

      <Select value={selectedSortOption} label="Sort by" onChange={(e) => setSelectedSortOption(e.target.value)}>
        {filterOptions.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>

      <Autocomplete
        disablePortal
        options={fullTagsList}
        renderInput={(params) => <TextField {...params} label="Input tags" />}
      />
    </Stack>
  );
};

export default PostsFilter;
