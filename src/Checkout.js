
import { Formik, Form, Field,ErrorMessage } from 'formik';
import { TextField, Button, Box,InputLabel,Typography,  MenuItem, FormControl, Select} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
 
const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    streetAdress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    zipCode: Yup.string()
    .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Please enter a valid ZIP code')
.required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Checkout() {
  const navigate = useNavigate();
  const FormikError = ({ name }) => (
    <ErrorMessage name={name}>
      {msg => <Typography color="error" >{msg}</Typography>}
    </ErrorMessage>
  );
 
  return (
  
    <Formik
    initialValues={{name:"", email: '', streetAdress: "",city:"", zipCode:"" ,state:'', country:""}}
  validationSchema={DisplayingErrorMessagesSchema}

    onSubmit={(values, { setSubmitting }) => {
      console.log(values)
      setTimeout(() => {
        navigate('/Payment');
        setSubmitting(false);
      }, 300);
    } }
  >
   {({ isSubmitting, touched, errors}) => (
         <Form>
      <h1>Enter The Shipping Adress:</h1>
    <Box margin={1}>
      <Field name="name" required as={TextField}  label="Name" helperText={<FormikError name="name" /> }
        error={Boolean(touched.name && errors.name)}
        />
      
    </Box>
    <Box margin={1}>
      <Field name="email" required type="email" as={TextField} label="Email" helperText={<FormikError name="email" />}
          error={Boolean(touched.email && errors.email)} />
    </Box>
    <Box margin={1}>
      <Field name="streetAdress" required as={TextField} label="Street Adress" helperText={<FormikError name="streetAdress" />} 
          error={Boolean(touched.streetAdress && errors.streetAdress)}/>
    </Box>
    <Box margin={1}>
      <Field name="city" required as={TextField} label="City" helperText={<FormikError name="city" />}
          error={Boolean(touched.city && errors.city)} />
    </Box>
   
    <Box margin={1}>
      <Field name="zipCode" required  as={TextField} label="Zip Code" helperText={<FormikError name="zipCode" />} 
          error={Boolean(touched.zipCode && errors.zipCode)}/>
    </Box>
    <Box margin={1}>
      <Field name="state" required  as={TextField} label="State" helperText={<FormikError name="state" />} 
          error={Boolean(touched.state && errors.state)}/>
    </Box>
    <FormControl  sx={{margin : " 8px" ,width:" 220px"}}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Field name="country"  required as={Select}
       label="country"  helperText={<FormikError name="country" />} 
       error={Boolean(touched.country && errors.country)} >
         
        <MenuItem value={'usa'}>USA</MenuItem>
          <MenuItem value={'canda'}>Canda</MenuItem>
 </Field>
      </FormControl>
    <Box margin={1}>

       <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
             go to payment
             </Button> 
    </Box>
    </Form>
       )}
</Formik>
       
  );
}


