import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Container, Grid } from "@mui/material";

const App = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12} sx={{ marginTop: "3rem" }}>
				<Container maxWidth="md">
					<Home />
				</Container>
			</Grid>
		</Grid>
	);
};

export default App;
