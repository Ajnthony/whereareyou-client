import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {posts} from 'components/data/posts';
import {usersCard} from 'components/data/usersCard';
import {categories} from 'components/data/categories';
import {displayDate, getCategoryName, getDisplayName, handleFilterAndSort, logger, subText} from 'helpers';

const Posts = ({selectedCategory, selectedSortOption}) => {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // there should be an api call later
    // Let's pretend that I received the posts list from the call
    const res = posts;
    const postsFilteredAndSorted = handleFilterAndSort(res, selectedCategory, selectedSortOption);
    setPostsList(postsFilteredAndSorted);
  }, [selectedCategory, selectedSortOption]);

  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2}>
        {postsList.map((post) => (
          <Card sx={{padding: 0}} key={post.id} onClick={() => navigate(`/community/${post.id}`)}>
            <CardActionArea sx={{paddingX: 1, paddingY: 2}}>
              <CardContent>
                <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
                  <Typography>category/{getCategoryName(post.category, categories)}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    Posted by {getDisplayName(post.user, usersCard)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {displayDate(post.date_created)} ago
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>

                  <Typography>{subText(post.content)}</Typography>
                </Stack>
              </CardContent>

              <Stack direction="row" spacing={2} sx={{paddingLeft: 2}}>
                <Typography>Likes</Typography>
                <Typography>Comments</Typography>
                <Typography>Share</Typography>
                <Typography>Save</Typography>
              </Stack>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default Posts;
