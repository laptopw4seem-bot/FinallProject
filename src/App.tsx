import { Grid, grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" bg="green">
        NAv
      </GridItem>
      <GridItem area="main" bg="blue">
        NAv
      </GridItem>
    </Grid>
  );
}

export default App;
