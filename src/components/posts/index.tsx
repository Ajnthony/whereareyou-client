import {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {posts} from 'components/data/posts';
import {usersCard} from 'components/data/usersCard';

const Posts = () => {
  const [postsList, setPostsList] = useState([]);

  const displayDate = (date) => {
    return date.substring(0, 10);
  };

  const subText = (text) => {
    if (text.length > 200) {
      return text.substring(0, 200) + '...';
    }
    return text;
  };

  const getDisplayName = (uid) => {
    for (let i = 0; i < usersCard.length; i++) {
      if (uid === usersCard[i].id) {
        return usersCard[i].display_name;
      }
    }
  };

  useEffect(() => {
    setPostsList(posts);
  }, []);

  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2}>
        {postsList.map((post) => (
          <Card sx={{padding: 2}} key={post.id}>
            <CardActionArea>
              <CardContent>
                <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                  <Typography>category/{post.category}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Posted by {getDisplayName(post.user)} on {displayDate(post.date_created)}
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
