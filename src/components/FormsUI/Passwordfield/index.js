import React, { useState } from "react";
import { useField } from "formik";

import {
	IconButton,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordfieldWrapper = ({
	name,
	id,
	text,
	label,
	children,
	...otherProps
}) => {
	const [field, meta] = useField(name);

	const configPasswordfield = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: "outlined",
	};

	if (meta && meta.touched && meta.error) {
		configPasswordfield.error = true;
		configPasswordfield.helpertext = meta.error;
	}

	const [mainPassword, setMainPassword] = useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (e) => {
		setMainPassword({ ...mainPassword, [prop]: e.target.value });
	};

	const handleClickShowPassword = () => {
		setMainPassword({
			...mainPassword,
			showPassword: !mainPassword.showPassword,
		});
	};

	// const handleMouseDownPassword = (e) => {
	// 	e.preventDefault();
	// };
	return (
		<>
			<FormControl
				sx={{ width: "100%" }}
				variant="outlined"
				{...configPasswordfield}
			>
				<InputLabel htmlFor={id}>{label}</InputLabel>
				<OutlinedInput
					{...configPasswordfield}
					label={label}
					type={mainPassword.showPassword ? "text" : "password"}
					value={mainPassword.password}
					onChange={handleChange("password")}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								id={id}
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								// onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{mainPassword.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				{meta && meta.touched && meta.error ? (
					<Typography
						sx={{
							color: "#d32f2f",
							fontWeight: "400",
							fontSize: "0.75rem",
							margin: "3px 14px 0px 14px",
							lineHeight: "1.66",
							letterSpacing: "0.03333em",
							textAlign: "left",
						}}
					>
						{meta.error}
					</Typography>
				) : (
					""
				)}
			</FormControl>
		</>
	);
};

export default PasswordfieldWrapper;
