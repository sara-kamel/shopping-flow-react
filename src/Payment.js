
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  creditCard: Yup.string()
    .matches(/^\d+$/, 'Credit card number must contain only digits')
    .length(16, 'Credit card number must be exactly 16 digits long')
    .required('Credit card number is required'),
  expiredDate: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      'Expiry date must be in MM/YY format'
    )
    .test('is-expiry-date-valid', 'Credit card has expired', (value) => {
      if (!value) {
        return false;
      }
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const [expMonth, expYear] = value
        .split('/')
        .map((val) => parseInt(val, 10));
      const expiryYearFull = 2000 + expYear;

      if (expiryYearFull < currentYear) {
        return false;
      }
      if (expiryYearFull === currentYear && expMonth < currentMonth) {
        return false;
      }
      return true;
    })
    .required('Expiry date is required'),
});

export default function Checkout() {
  const navigate = useNavigate();
  const FormikError = ({ name }) => (
    <ErrorMessage name={name}>
      {(msg) => <Typography color="error">{msg}</Typography>}
    </ErrorMessage>
  );

  return (
    <Formik
      initialValues={{ creditCard: '', expiredDate: '' }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        alert(' Gongratlation');
        setTimeout(() => {
          navigate('/');
          setSubmitting(false);
        }, 300);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
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
  );
}
