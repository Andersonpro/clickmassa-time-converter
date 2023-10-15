/* eslint-disable react/prop-types */

import Box from '@mui/material/Box';

export const BoxComponent = ({resultado}) => {

  return (
    <Box component="span" sx={{ p: 1 }}>
      <p>{resultado} minutos</p>
    </Box>
  );
}