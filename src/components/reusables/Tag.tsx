import React from 'react';
import Chip from '@mui/material/Chip';

const Tag = (props) => {
  return <Chip size="small" label={props.label} color={props.color} />;
};

export default Tag;
