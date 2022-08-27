import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@mui/material";

import Textfield from "../components/FormsUI/Textfield";
import Select from "../components/FormsUI/Select";
import countries from "../data/countries.json";
import countriesKeys from "../data/countries-keys.json";

const INITIAL_FORM_STATE = {
	userFullName: "",
	userBusinessEmail: "",
	userCountry: "",
	userCountryKey: "",
	userPhone: "",
};

const FORM_VALIDATION = Yup.object().shape({
	userFullName: Yup.string().required("Required"),
	userBusinessEmail: Yup.string().email("Invalid email.").required("Required"),
	userCountry: Yup.string().required("Required"),
	userCountryKey: Yup.string().required("Required"),
	userPhone: Yup.number()
		.integer()
		.typeError("Please enter a valid phone number")
		.required("Required"),
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
			<Form autoComplete="off">
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
							name="userFullName"
							label="Full Name"
							placeholder="Enter Your Full Name"
						/>
					</Grid>
					<Grid item xs={12}>
						<Textfield
							name="userBusinessEmail"
							label="Business Email"
							placeholder="Enter Your Business Email"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							name="userCountry"
							label="Choose Your Country"
							options={countries}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container>
							<Grid item xs={3}>
								<Select
									name="userCountryKey"
									label="Country Key"
									options={countriesKeys}
								/>
							</Grid>
							<Grid item xs={9}>
								<Textfield
									name="userPhone"
									label="Phone Number"
									placeholder="Enter Your Phone Number"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default Home;
