import createPalette from "@mui/material/styles/createPalette";


const LightPalette = createPalette({
    primary: {
        light:"#255A84",
        main: "#044C84",
        dark:"#00355E"
    },
    secondary: {
        light: "#F7BF6D",
        main: "#F7A730",
        dark: "#D1891D"
    }
})


const DarkPalette = createPalette({
    mode:"dark",
    primary: {
        light:"#255A84",
        main: "#044C84",
        dark:"#00355E"
    },
    secondary: {
        light: "#F7BF6D",
        main: "#F7A730",
        dark: "#D1891D"
    },
    background:{
        paper:"#3B3B3B",
        default:"#3B3B3B"
    }
})

export {LightPalette, DarkPalette}