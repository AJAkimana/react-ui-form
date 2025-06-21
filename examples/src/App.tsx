import { Box, Typography } from '@mui/material';
import React from 'react';
import { MFForm, type MFFormField } from 'react-mui-form';

const initialStates = {
  text: '',
  number: 0,
  select: '',
  checkbox: false,
};

const fields = [
  [
    {
      name: 'text',
      label: 'Text Input',
      fieldType: 'text-field',
    },
    {
      name: 'number',
      label: 'Number Input',
      fieldType: 'text-field',
    },
  ],
  [
    {
      name: 'select',
      label: 'Select Input',
      fieldType: 'text-field',
      select: true,
      options: [
        { id: 'option1', name: 'Option 1' },
        { id: 'option2', name: 'Option 2' },
        { id: 'option3', name: 'Option 3' },
      ],
    },
  ],
  [
    {
      name: 'checkbox',
      label: 'Checkbox Input',
      fieldType: 'switch-field',
      isBool: true,
    },
  ],
  [
    {
      name: 'radio',
      label: 'Radio Input',
      fieldType: 'switch-field',
      isBool: true,
    },
  ],
] as MFFormField[][];

function App() {
  const [formState, setFormState] = React.useState(initialStates);
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        React MUI Form Example
      </Typography>
      <MFForm fields={fields} states={formState} setStates={setFormState} />
    </Box>
  );
}

export default App;
