import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/index'
import * as emailjs from 'emailjs-com';
import './style.css';

const FormComponent = () => {

  const [successMessage, setSuccessMessage] = useState(false)

  return (
  <>
     <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } 
         if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = 'Required';
        } 
         return errors;
       }}
       
       onSubmit={(values, { setSubmitting, resetForm }) => {
        // try{
        //   emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID , process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)
        //     .then(() => {
        //        setSuccessMessage(true)
        //        setSubmitting(false);
        //        resetForm();
        //           });
        //    }
        //    catch {
        //       setSubmitting(false);
        //   }
          setSuccessMessage(true)
          resetForm();
         return
       }}
     >
       {({ isSubmitting }) => (
         <Form className='form'>
           <Field type="text" name="name" placeholder="Name*"/>
           <ErrorMessage name="name" component="span" />
           <Field type="email" name="email" placeholder="Email*"/>
           <ErrorMessage name="email" component="span" />
           <Field type="message" name="message" placeholder="Message*" className="form__message"/>
           <ErrorMessage name="message" component="span" />
           <Button
              type={'submit'}
              variant={'primary'}
              size={'lg'}
              name={'Shoot us a message'}
              className={successMessage ? 'form__btn form__btn-sent' : 'form__btn'}
              >
              Shoot us a message
            </Button>
            {successMessage && <p className='form__success'>Thank you for your message! <br />Let's stay in touch.</p>}
         </Form>
       )}
     </Formik>
  </>
  )
};

export default FormComponent;