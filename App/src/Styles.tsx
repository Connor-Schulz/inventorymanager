export default {
  primary1: "#2b52f0",
  primary2: "#5563f3",
  primary3: "#7275f5",
  primary4: "#8a88f7",
  primary5: "#a09bf9",
  primary6: "#b4aefb",

  black1: "#121212",
  black2: "#282828",
  black3: "#3f3f3f",
  black4: "#575757",
  black5: "#717171",
  black6: "#8b8b8b",

  mixed1: "#201e38",
  mixed2: "#36334c",
  mixed3: "#4c4960",
  mixed4: "#636075",
  mixed5: "#7b798b",
  mixed6: "#9492a1",

  white1: "#f8f8f8",

  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: "1em",
  fontWeight: "400",
  lineHeight: "1.5em",

  borderRadius: "4px",

  scrollBar: `  
   &::-webkit-scrollbar {
      width: 15px;
   }

   &::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #201e38;
   }

   &::-webkit-scrollbar-thumb {
      background: #8a88f7;
      border-radius: 8px;
      position: absolute;
      left: -10px;

      &:hover {
      background: #7275f5;
      }
   }
   `,
} as const;
