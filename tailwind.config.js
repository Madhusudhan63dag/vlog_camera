/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       colors: {
         'brand-orange': '#FD5200',
         'brand-orange-light': '#FF6D26',
         'brand-orange-dark': '#E14A00',
       }
     },
   },
   plugins: [],
 }