import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getItemsFromLocalStorge} from "./helper";
export default function Checkout() {

  const userInformation = getItemsFromLocalStorge("values");
  console.log(userInformation);
  const navigate = useNavigate();
  const FormikError = ({ name }) => (
    <ErrorMessage name={name}>
      {(msg) => <Typography color="error">{msg}</Typography>}
    </ErrorMessage>
  );

  return (
    <>
      <div>
        <h4>name:</h4> <span>{userInformation.name}</span>
        <h4>email: </h4> <span>{userInformation.email}</span>
        <h4>
          Adress: </h4><span>{userInformation.streetAdress} {userInformation.city}{" "}
          {userInformation.zipCode} {userInformation.state}{" "}
          {userInformation.country}
          </span>
       
      </div>
      <Formik
        initialValues={{ creditCard: "", expiredDate: "" }}
        // validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          alert(" Gongratlation");
          setTimeout(() => {
            navigate("/");
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ isSubmitting}) => (
          <Form>
       

            <Box margin={1}>
              <Button
                variant="outlined"
                type="submit"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
