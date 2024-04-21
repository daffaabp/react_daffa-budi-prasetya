/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
                jost: ["Jost"],
                sans: ["Open Sans"],
            },
            colors: {
                biru: "#0D6EFD",
                "biru-button": "#47B2E4",
                "biru-background": "#37517E",
                tulisan: "#212529",
                newsletter: "##F3F5FA",
            },
        },
    },
    plugins: [],
};
