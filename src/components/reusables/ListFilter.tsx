import React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {categories} from 'components/data/categories';
import TextField from '@mui/material/TextField';
import {logger} from 'helpers';

interface Props {
  page: string;
  dataProps: any;
}

interface SortOption {
  id: number;
  name: string;
}

const ListFilter: React.FC<Props> = ({page, dataProps}) => {
  const isAnimalsFilter: boolean = page && page === 'animals' ? true : false;
  const isForumFilter: boolean = page && page === 'forum' ? true : false;

  const sortOptions: SortOption[] = [
    {id: 1, name: 'new'},
    {id: 2, name: 'top'}
  ];

  return (
    <Stack direction="row" spacing={4} sx={{width: '100%', justifyContent: 'flex-end', marginY: 2}}>
      {isAnimalsFilter ? (
        <Select
          value={dataProps.selectedFilterStatusOption}
          label="Status"
          onChange={(e) => dataProps.setSelectedFilterStatusOption(e.target.value)}
          sx={{width: 100}}
        >
          {categories.animals.filter_status.map((status) => (
            <MenuItem key={status.id} value={status.id}>
              {status.name}
            </MenuItem>
          ))}
        </Select>
      ) : isForumFilter ? (
        <Select
          value={dataProps.selectedCategory}
          label="Category"
          onChange={(e) => dataProps.setSelectedCategory(e.target.value)}
          sx={{width: 100}}
        >
          {categories.forum.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        ''
      )}

      {isAnimalsFilter ? (
        <Select
          value={dataProps.selectedFilterTypeOption}
          label="Species"
          onChange={(e) => dataProps.setSelectedFilterTypeOption(e.target.value)}
          sx={{width: 100}}
        >
          {categories.animals.filter_type.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        ''
      )}

      <Select
        value={dataProps.selectedSortOption} // shares the same name
        label="Sort by"
        onChange={(e) => dataProps.setSelectedSortOption(e.target.value)}
        sx={{width: 100}}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>

      {isAnimalsFilter ? (
        <Autocomplete
          disablePortal
          options={dataProps.tags ? dataProps.tags : []}
          renderInput={(params) => <TextField {...params} label="Input tags" />}
          inputValue={isAnimalsFilter ? dataProps.tagInput : isForumFilter ? '' : ''}
          onInputChange={(e) => {
            if (isAnimalsFilter) {
              dataProps.setTagInput((e.target as HTMLInputElement).value);
            }
          }}
          onChange={() => logger('Component changed')}
          sx={{width: 200}}
        />
      ) : (
        ''
      )}
    </Stack>
  );
};

export default ListFilter;
