import {useState, useEffect} from 'react';
import {animals} from 'components/data/animals';
import {displayDate, getCategoryName, getDisplayName, handleFilterAndSort, subText, logger} from 'helpers';

import Tag from 'components/reusables/Tag';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FoundChip from 'components/reusables/FoundChip';
import {useNavigate} from 'react-router-dom';
import {Animal, TagObj} from 'components/types';
import {categories} from 'components/data/categories';

interface Props {
  selectedFilterStatusOption: number;
  selectedFilterTypeOption: number;
  selectedSortOption: number;
  tagInput: string;
}

const AnimalsList: React.FC<Props> = ({
  selectedFilterStatusOption,
  selectedFilterTypeOption,
  selectedSortOption,
  tagInput
}) => {
  const [animalsList, setAnimalsList]: [any[], Function] = useState([]);
  const navigate = useNavigate();
  const textLengthLimit: number = 70;

  useEffect(() => {
    // will be an api call here
    const res = animals as Animal[];
    const animalsFilteredAndSorted = handleFilterAndSort(
      res,
      selectedFilterStatusOption,
      selectedFilterTypeOption,
      selectedSortOption,
      'animals',
      tagInput,
      categories.animals
    ) as Animal[];
    setAnimalsList([...animalsFilteredAndSorted]);
  }, [selectedFilterStatusOption, selectedFilterTypeOption, selectedSortOption, tagInput]);

  return (
    <Grid container spacing={1}>
      {animals.length ? (
        animalsList.map((animal) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={animal.id}>
            <Card sx={{maxWidth: 350}} onClick={() => navigate(`/animals/${animal.id}`)}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={animal.image} alt={animal.description} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {animal.name} {animal.is_found && <FoundChip />}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {animal.description.length > textLengthLimit
                      ? animal.description.substring(0, textLengthLimit) + '...'
                      : animal.description.substring(0, textLengthLimit)}
                  </Typography>

                  <Typography variant="body2">
                    Last seen on {animal.last_seen.datetime.substring(0, 10)} in {animal.last_seen.location}, US
                  </Typography>
                </CardContent>

                <CardActions>
                  <Stack direction="row" spacing={1}>
                    {animal.tags.length
                      ? animal.tags.map((tag: TagObj) => (
                          <Tag
                            label={tag.label}
                            key={tag.label}
                            color={tag.type === 'age' ? 'primary' : tag.type === 'breed' ? 'success' : ''}
                          />
                        ))
                      : ''}
                  </Stack>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <div>
          <p>No animals</p>
        </div>
      )}
    </Grid>
  );
};

export default AnimalsList;
