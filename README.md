# frontend-dream-team
 
cd frontend-dream-team
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//meterse al tailwind.config.js y debes modificar hasta que se vea asi:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//meterse al index.css y poner esto:
@tailwind base;
@tailwind components;
@tailwind utilities;

//ejecuta esto:
npm install axios

//una vez instalado todo, solo se debe ejecutar esto para levantar el front
npm run dev
