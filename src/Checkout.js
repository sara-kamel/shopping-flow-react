import { useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import {
  TextField,
  Button,
  Box,
  InputLabel,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Modal,
} from "@mui/material";
import { setItemInLocalStorge, userInformationValidation, getItemsFromLocalStorge } from "./helper";
import * as Yup from "yup";
import { TitleStyles, ModalStyles, FormStyles, FormFieldSyles } from "./Styles";

export default function Checkout() {

  const DisplayingErrorMessagesSchema = userInformationValidation(Yup);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalValues = getItemsFromLocalStorge("values")

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
        creditCard: "",
        expiredDate: "",
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setTimeout(() => {
          setItemInLocalStorge("values", values);
          handleOpen();
          setSubmitting(false);
          resetForm();
        }, 300);
      }}
    >
      {({ isSubmitting, touched, errors}) => (
        <>
          <Box sx={TitleStyles}>
            <h1> Checkout and Payment </h1>
          </Box>

          <Form style={FormStyles}>
            <Field
              style={FormFieldSyles}
              name="name"
              required
              as={TextField}
              label="Name"
              helperText={<FormikError name="name" />}
              error={Boolean(touched.name && errors.name)}
            />
            <Field
              style={FormFieldSyles}
              name="email"
              required
              type="email"
              as={TextField}
              label="Email"
              helperText={<FormikError name="email" />}
              error={Boolean(touched.email && errors.email)}
            />
            <Field
              style={FormFieldSyles}
              name="streetAdress"
              required
              as={TextField}
              label="Street Adress"
              helperText={<FormikError name="streetAdress" />}
              error={Boolean(touched.streetAdress && errors.streetAdress)}
            />{" "}
            <Field
              style={FormFieldSyles}
              name="city"
              required
              as={TextField}
              label="City"
              helperText={<FormikError name="city" />}
              error={Boolean(touched.city && errors.city)}
            />
            <Field
              style={FormFieldSyles}
              name="zipCode"
              required
              as={TextField}
              label="Zip Code"
              helperText={<FormikError name="zipCode" />}
              error={Boolean(touched.zipCode && errors.zipCode)}
            />
            <FormControl sx={FormFieldSyles}>
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
            <FormControl sx={FormFieldSyles}>
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
            <Field
              style={FormFieldSyles}
              name="creditCard"
              required
              as={TextField}
              label="Credit Card "
              helperText={<FormikError name="creditCard" />}
              error={Boolean(touched.creditCard && errors.creditCard)}
            />
            <Field
              style={FormFieldSyles}
              name="expiredDate"
              required
              as={TextField}
              label="Expired Date"
              helperText={<FormikError name="expiredDate" />}
              error={Boolean(touched.expiredDate && errors.expiredDate)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              style={{ width: "50%" }}
            >
              submit
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={ModalStyles}>
                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  component="h2"
                  style={{ color: "green" }}
                >
                  Congratulation {modalValues.name}!.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  you complate your shopping successfully! your order will
                  arrive on this Adress: {modalValues.streetAdress}, {modalValues.city},{" "}
                  {modalValues.state} {modalValues.zipCode} {modalValues.country}. We will send
                  the track number to this email: {modalValues.email}
                </Typography>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Ok
                </Button>
              </Box>
            </Modal>
          </Form>
        </>
      )}
    </Formik>
  );
}
