/* eslint-disable react/prop-types */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {SelectLabels} from '../selectedLabels/SelectedLabels';
import {HelperTextMisaligned} from '../helperTextMisaligned/HelperTextMisaligned';
import {BoxComponent} from '../box/BoxComponent';
import logo_clickmassa from '../../assets/logo_clickmassa.svg';

export const SimpleContainer = ({valorDigitado, setValorDigitado, resultado, setResultado, tempo, setTempo}) => {
  return (  
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{
        bgcolor: 'rgb(243, 246, 249)',
        border: '1px solid rgb(229, 234, 242)'
        }}>
        <Box sx={{ bgcolor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logo_clickmassa} alt="Clickmassa logo" />
          <SelectLabels tempo={tempo} setTempo={setTempo} resultado={resultado} setResultado={setResultado} valorDigitado={valorDigitado} setValorDigitado={setValorDigitado}/>
          <HelperTextMisaligned valorDigitado={valorDigitado} setValorDigitado={setValorDigitado} tempo={tempo} setResultado={setResultado}/>
          <BoxComponent resultado={resultado} />
        </Box>
      </Container>
    </React.Fragment>
  );
}