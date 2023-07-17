// vite.config.js
import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        patientSignup: resolve(__dirname, 'patient-signup.html'),
        patientLogin: resolve(__dirname, 'patient-login.html'),
        doctorSignup: resolve(__dirname, 'doctor-signup.html'),
        doctorLogin: resolve(__dirname, 'doctor-login.html'),
      }
    }
  }
}