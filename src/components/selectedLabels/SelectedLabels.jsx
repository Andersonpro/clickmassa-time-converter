/* eslint-disable react/prop-types */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectLabels = ({tempo, setTempo, setResultado, valorDigitado}) => {
  
  if (tempo === undefined) {
    setTempo(10);
  }

  const handleChange = (event) => {
    const novoTempo = event.target.value;
    let novoResultado;
    switch (novoTempo) {
      case 10:
        novoResultado = Number(valorDigitado*60);
        break;
      case 20:
        novoResultado = Number(valorDigitado*1440);
        break;
      case 30:
        novoResultado = Number(valorDigitado*10080);
        break;
    }
    setTempo(novoTempo);
    setResultado(novoResultado);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={tempo}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>Horas para minutos</MenuItem>
          <MenuItem value={20}>Dias para minutos</MenuItem>
          <MenuItem value={30}>Semanas para minutos</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}