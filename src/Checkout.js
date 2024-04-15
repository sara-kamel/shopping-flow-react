import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  Box,
  InputLabel,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setItemInLocalStorge, userInformationValidation } from "./helper";
import * as Yup from "yup";

export default function Checkout() {
  const DisplayingErrorMessagesSchema = userInformationValidation(Yup);
  const navigate = useNavigate();


  const FormikError = ({ name }) => (
    <ErrorMessage name={name}>
      {(msg) => <Typography color="error">{msg}</Typography>}
    </ErrorMessage>
  );

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        streetAdress: "",
        city: "",
        zipCode: "",
        state: "",
        country: "",
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setItemInLocalStorge("values", values);
          navigate("/confirmation");
          alert(`Congratulations ${values.name}, you completed shopping successfully!`)
          setSubmitting(false);
       
        }, 300);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form >
          <h1>Enter The Shipping Adress:</h1>
          <Box margin={1}>
            <Field
              name="name"
              required
              as={TextField}
              label="Name"
              helperText={<FormikError name="name" />}
              error={Boolean(touched.name && errors.name)}
            />
          </Box>
          <Box margin={1}>
            <Field
              name="email"
              required
              type="email"
              as={TextField}
              label="Email"
              helperText={<FormikError name="email" />}
              error={Boolean(touched.email && errors.email)}
            />
          </Box>
          <Box margin={1}>
            <Field
              name="streetAdress"
              required
              as={TextField}
              label="Street Adress"
              helperText={<FormikError name="streetAdress" />}
              error={Boolean(touched.streetAdress && errors.streetAdress)}
            />
          </Box>
          <Box margin={1}>
            <Field
              name="city"
              required
              as={TextField}
              label="City"
              helperText={<FormikError name="city" />}
              error={Boolean(touched.city && errors.city)}
            />
          </Box>

          <Box margin={1}>
            <Field
              name="zipCode"
              required
              as={TextField}
              label="Zip Code"
              helperText={<FormikError name="zipCode" />}
              error={Boolean(touched.zipCode && errors.zipCode)}
            />
          </Box>
          <Box>
            <FormControl sx={{ margin: " 8px", width: " 220px" }}>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Field
                name="state"
                required
                as={Select}
                label="state"
                helperText={<FormikError name="state" />}
                error={Boolean(touched.state && errors.state)}
              >
                <MenuItem value={"CA"}>CA</MenuItem>
                <MenuItem value={"NY"}>NY</MenuItem>
                <MenuItem value={"PA"}>PA</MenuItem>
                <MenuItem value={"FL"}>FL</MenuItem>
                <MenuItem value={"TN"}>TN</MenuItem>
              </Field>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ margin: " 8px", width: " 220px" }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Field
                name="country"
                required
                as={Select}
                label="country"
                helperText={<FormikError name="country" />}
                error={Boolean(touched.country && errors.country)}
              >
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"Canda"}>Canda</MenuItem>
              </Field>
            </FormControl>
          </Box>
          <Box margin={1}>
            <Field
              name="creditCard"
              required
              as={TextField}
              label="Credit Card "
              helperText={<FormikError name="creditCard" />}
              error={Boolean(touched.creditCard && errors.creditCard)}
            />
          </Box>
          <Box margin={1}>
            <Field
              name="expiredDate"
              required
              as={TextField}
              label="Expired Date"
              helperText={<FormikError name="expiredDate" />}
              error={Boolean(touched.expiredDate && errors.expiredDate)}
            />
          </Box>
          <Box margin={1}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
