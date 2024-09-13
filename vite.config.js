import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},          // Polyfill del objeto global de Node.js
    'process.env': {},    // Polyfill de process.env si es necesario
  },
  optimizeDeps: {
    include: ['buffer'],  // Incluir el paquete 'buffer' para usarlo en la app
  },
});