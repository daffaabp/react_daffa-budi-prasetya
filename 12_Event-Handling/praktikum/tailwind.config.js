/** @type {import('tailwindcss').Config} */
export default {
content: [
"./src/**/*.{js,jsx}",
"node_modules/flowbite-react/lib/esm/**/*.js",
'node_modules/daisyui/dist/**/*.js',
'node_modules/react-daisyui/dist/**/*.js',
],
theme: {
extend: {},
},
plugins: [
require("flowbite/plugin"),
require('daisyui')
],
}
