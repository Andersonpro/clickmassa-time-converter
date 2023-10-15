/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const HelperTextMisaligned = ({valorDigitado, setValorDigitado, tempo, setResultado}) => {

  const handleChange = (event) => {
    const valor = event.target.value;
    setValorDigitado(valor);
    let tempoAux;
    if(tempo === 10) {
      tempoAux = Number(valor*60);
    } else if(tempo === 20){
      tempoAux = Number(valor*1440);
    } else {
      tempoAux = Number(valor*10080);
    }
    setResultado(tempoAux);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Por favor, digite o valor a ser convertido"
        id="demo-helper-text-misaligned"
        label="Valor"
        value={valorDigitado}
        onChange={handleChange}
        type='number'
      />
      
    </Box>
  );
}
