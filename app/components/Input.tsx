// "use client"
// import { Autocomplete,TextField} from "@mui/material";
// import { TextFieldProps } from "@mui/material";

// import React, { useState } from "react";
 
// export const IngredientsLists = () => {
//   const ingredients = ["Cat", "Dog", "Bird", "Pigeon"];
//   const [selectedingredients, setSelectedingredients] = useState([ingredients[2], ingredients[3]]);
//   const [petInputValue, setPetInputValue] = useState("");
 
//   console.log(selectedingredients);
 
//   return (
//     <React.Fragment>
//       <h5 style={{ marginBottom: "1rem", textAlign: "left" }}>
//         You selected:{" "}
//         <span style={{ color: "dodgerblue", fontWeight: "800" }}>
//           {selectedingredients
//             .map((pet, i, arr) =>
//               arr.length > 1 && arr.length - 1 === i ? ` and ${pet}.` : pet
//             )
//             .join(", ") || "Nothing yet"}
//         </span>
//       </h5>
//       <Autocomplete
//         multiple
//         defaultValue={selectedingredients}
//         style={{ width: "40%" }}
//         options={ingredients}
//         onChange={(event, newIngredient) => {
//           setSelectedingredients(newIngredient);
//         }}
//         inputValue={petInputValue}
//         onInputChange={(event, newIngredientInputValue) => {
//           setPetInputValue(newIngredientInputValue);
//         }}
//         renderInput={(params) => {
//           return <TextField label='Select your favourite ingredients' {...params} />;
//         }}
//       ></Autocomplete>
//     </React.Fragment>
//   );
// };

"use client"
import { theme } from "@chakra-ui/react";
import { Autocomplete, createTheme, TextField, ThemeProvider } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React, { useState } from "react";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }
 
export const IngredientLists = () => {
  const ingredients = ["Carrot", "Letus", "Potato", "Spinach","Salad","Bread","Salt","Scrum","Agile","Kanban","Butter","Soy sauce"];
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientInputValue, setIngredientInputValue] = useState("");
 
  console.log(selectedIngredients);

  const theme = createTheme({
    status: {
      danger: red[500],
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
        
    <React.Fragment>
      <h5 style={{ marginBottom: "1rem", textAlign: "left" }}>
        {/* You selected:{" "}
        <span style={{ color: "dodgerblue", fontWeight: "800" }}>
          {selectedIngredients
            .map((pet, i, arr) =>
              arr.length > 1 && arr.length - 1 === i ? ` and ${pet}.` : pet
            )
            .join(", ") || "Nothing yet"}
        </span> */}
      </h5>
      <Autocomplete
        multiple
        style={{ width: "80%" }}
        options={ingredients}
        onChange={(event, newIngredient:any) => {
          setSelectedIngredients(newIngredient);
        }}
        inputValue={ingredientInputValue}
        onInputChange={(event, newIngredientInputValue) => {
          setIngredientInputValue(newIngredientInputValue);
        }}
        renderInput={(params) => {
          return <TextField  label='Select your ingredients' {...params}  />;
        }}
      ></Autocomplete>
    </React.Fragment>
    </ThemeProvider>
  );
};

