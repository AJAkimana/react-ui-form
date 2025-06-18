import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ReactJsonFormInputs',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', /^@mui\//, /^@emotion\//],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/icons-material': 'MaterialUIIcons',
          '@mui/lab': 'MaterialUILab',
          '@mui/system': 'MaterialUISystem',
          '@mui/styles': 'MaterialUIStyles',
          '@mui/utils': 'MaterialUIUtils',
          '@mui/base': 'MaterialUIBase',
          '@mui/x-date-pickers': 'MaterialUIXDatePickers',
          '@mui/x-date-pickers/AdapterDayjs':
            'MaterialUIXDatePickersAdapterDayjs',
          '@mui/x-date-pickers/AdapterDateFns':
            'MaterialUIXDatePickersAdapterDateFns',
        },
      },
    },
  },
});
