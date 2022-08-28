import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Typography, Button } from "@mui/material";

import Textfield from "../components/FormsUI/Textfield";
import Select from "../components/FormsUI/Select";
import Passwordfield from "../components/FormsUI/Passwordfield";
import countries from "../data/countries.json";
import countriesKeys from "../data/countries-keys.json";
import language from "../data/language.json";

const INITIAL_FORM_STATE = {
	userFullName: "",
	userBusinessEmail: "",
	userCountry: "",
	userCountryKey: "",
	userPhone: "",
	password: "",
	passwordConfirmation: "",
	companyName: "",
	language: "",
	address: "",
	companyBusinessEmail: "",
	companyCountry: "",
	companyCity: "",
	companyCountryKey: "",
	companyPhone: "",
	companyCountryKeyAlternate: "",
	companyPhoneAlternate: "",
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
	password: Yup.string().required("Required"),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords didn't match")
		.required("Required"),
	companyName: Yup.string().required("Required"),
	language: Yup.string().required("Required"),
	address: Yup.string().required("Required"),
	companyBusinessEmail: Yup.string()
		.email("Invalid email.")
		.required("Required"),
	companyCountry: Yup.string().required("Required"),
	companyCity: Yup.string().required("Required"),
	companyCountryKey: Yup.string().required("Required"),
	companyPhone: Yup.number()
		.integer()
		.typeError("Please enter a valid phone number")
		.required("Required"),
	companyCountryKeyAlternate: Yup.string().required("Required"),
	companyPhoneAlternate: Yup.number()
		.integer()
		.typeError("Please enter a valid phone number")
		.required("Required"),
});

const Home = () => {
	const [info, setInfo] = useState({});
	return (
		<Formik
			initialValues={{
				...INITIAL_FORM_STATE,
			}}
			validationSchema={FORM_VALIDATION}
			onSubmit={(values) => {
				setInfo(values);
				console.log("info state", info.userBusinessEmail);
			}}
		>
			<Form autoComplete="off">
				<Grid container spacing={2}>
					{/* strat step one */}
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
					<Grid item xs={12}>
						<Passwordfield
							name="password"
							id="outlined-adornment-password"
							label="Choose Password"
						/>
					</Grid>
					<Grid item xs={12}>
						<Passwordfield
							name="passwordConfirmation"
							id="outlined-adornment-passwordConfirmation"
							label="Repeat Password"
						/>
					</Grid>
					{/* strat step two */}
					<Grid item xs={12}>
						<Typography
							variant="h5"
							sx={{ display: "flex", justifyContent: "center" }}
						>
							Verify Your Company
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="body2"
							sx={{ display: "flex", justifyContent: "center" }}
						>
							Entering this information correctly will facilitate the company
							verification process
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							<Grid item xs={9}>
								<Textfield
									name="companyName"
									label="Company Name"
									placeholder="Enter Your Company Name"
								/>
							</Grid>
							<Grid item xs={3}>
								<Select name="language" label="Language" options={language} />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Textfield
							name="address"
							label="Address"
							placeholder="Enter Your Address"
						/>
					</Grid>
					<Grid item xs={12}>
						<Textfield
							name="companyBusinessEmail"
							label="Company Business Email"
							placeholder="Enter Your Company Business Email"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							name="companyCountry"
							label="Choose Your Country"
							options={countries}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							name="companyCity"
							label="Choose Your City"
							options={countries}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container>
							<Grid item xs={3}>
								<Select
									name="companyCountryKey"
									label="Company Key"
									options={countriesKeys}
								/>
							</Grid>
							<Grid item xs={9}>
								<Textfield
									name="companyPhone"
									label="Company Phone Number"
									placeholder="Enter Your Company Phone Number"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container>
							<Grid item xs={3}>
								<Select
									name="companyCountryKeyAlternate"
									label="Company Key"
									options={countriesKeys}
								/>
							</Grid>
							<Grid item xs={9}>
								<Textfield
									name="companyPhoneAlternate"
									label="Alternate Company Phone Number"
									placeholder="Enter Your Company Phone Number"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							size="large"
							sx={{ width: "50%" }}
						>
							Submit
						</Button>
						<Typography>{info.userBusinessEmail}</Typography>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default Home;
