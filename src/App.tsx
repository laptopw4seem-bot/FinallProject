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
      <GridItem area="aside">NAv</GridItem>
      <GridItem area="main">NAv</GridItem>
    </Grid>
  );
}

export default App;
