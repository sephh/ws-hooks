import React, { useEffect } from 'react';
import { AppBar, Box, Container, Grid } from '@material-ui/core';

import Logo from '../components/Logo';
import CardGrid from '../components/CardGrid';
import {usePokemon} from "../hooks/pokemon.hook";

const Pokemons = () => {
  const { fetch, loading, pokemons } = usePokemon();

  useEffect(() => {
    fetch({});
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Box p={1}>
          <Logo width="100px" />
        </Box>
      </AppBar>

      <Container>
        <Box mt={2}>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2}>
                <CardGrid cards={pokemons} loading={loading} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokemons;
