import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";

import Textfield from "../components/FormsUI/Textfield";

const INITIAL_FORM_STATE = {
	fullName: "",
	businessEmail: "",
};

const FORM_VALIDATION = Yup.object().shape({
	fullName: Yup.string().required("Required"),
	businessEmail: Yup.string().email("Invalid email.").required("Required"),
});

const Home = () => {
	return (
		<Formik
			initialValues={{
				...INITIAL_FORM_STATE,
			}}
			validationSchema={FORM_VALIDATION}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography
							variant="h5"
							sx={{ display: "flex", justifyContent: "center" }}
						>
							Tell us more about you.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Textfield
							name="fullName"
							label="Full Name"
							placeholder="Enter Your Full Name"
						/>
					</Grid>
					<Grid item xs={12}>
						<Textfield
							name="businessEmail"
							label="Business Email"
							placeholder="Enter Your Business Email"
						/>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default Home;
