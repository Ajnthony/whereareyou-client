import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {posts} from 'components/data/posts';
import {usersCard} from 'components/data/usersCard';
import {categories} from 'components/data/categories';
import {displayDate, getCategoryName, getDisplayName, handleFilterAndSort, logger, subText} from 'helpers';
import {Post} from 'components/types';

interface Props {
  selectedCategory: number;
  selectedSortOption: number;
}

const Posts: React.FC<Props> = ({selectedCategory, selectedSortOption}) => {
  const [postsList, setPostsList]: [any[], Function] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    logger('====Displaying posts list====');
    // there should be an api call later
    // Let's pretend that I received the posts list from the call
    const res = posts as Post[];
    const postsFilteredAndSorted = handleFilterAndSort(
      res,
      selectedCategory,
      null,
      selectedSortOption,
      'forum',
      '',
      categories.forum
    ) as Post[];
    setPostsList([...postsFilteredAndSorted]);
  }, [selectedCategory, selectedSortOption]);

  return (
    <Stack direction="column" spacing={2}>
      {postsList.map((post) => (
        <Card sx={{padding: 0}} key={post.id} onClick={() => navigate(`/community/${post.id}`)}>
          <CardActionArea sx={{paddingX: 1, paddingY: 2}}>
            <CardContent>
              <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
                <Typography>category/{getCategoryName(post.category, categories.forum)}</Typography>

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

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingX: 4}}>
              <Stack direction="row" spacing={2}>
                <Typography>Comments</Typography>
                <Typography>Share</Typography>
                <Typography>Save</Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography>{post.likes ?? 0} Likes</Typography>
                <Typography>{post.views} Views</Typography>
              </Stack>
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

export default Posts;
