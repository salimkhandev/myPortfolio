import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Snackbar from "@mui/material/Snackbar";


const Contact = () => {
    const [recaptchaValue, setRecaptchaValue] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: "Hello and" });

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        if (!recaptchaValue) {
            alert("Please complete the reCAPTCHA.");
            setSubmitting(false);
            return;
        }

        // console.log("the the token is",recaptchaValue);
        // Form submission logic here
        // alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);/

        // Example of how to submit the form data
        // You can use fetch or axios to send form data to your server
        try {
            const response = await axios.post('https://portfolio-backend-git-main-salimkhandevs-projects.vercel.app/submit-form', {
                ...values,
                recaptchaToken: recaptchaValue,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response data
            console.log('Success:', response.data);
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }




        setSubmitting(false);
        setSnackbar({ open: true, message: "form submitted!" });
    };
    const handleCloseSnackbar = () => {
        setSnackbar({ open: false, message: "" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center relative bg-black bg-opacity-70"
        >
            <div className="absolute"></div>
            <div className="relative z-10  p-6 w-[904px] rounded-lg shadow-lg"
                style={{
                    backgroundColor: 'rgba(0,0 ,0 ,0.5)', backdropFilter: 'blur(10px)', // Adjust the blur intensity
                    WebkitBackdropFilter: 'blur(10px)',
                }}>
                <h2 className="text-3xl font-bold black-ops-one-regular text-white text-center">Contact Me</h2>
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
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-8 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-white">
                                    Name:
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border px-3 py-2 rounded-md"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-white">
                                    Email:
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border px-3 py-2 rounded-md"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-white">
                                    Message:
                                </label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    className="w-full border px-3 py-2 rounded-md"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mt-4">
                                <ReCAPTCHA
                                    sitekey="6LfPzhUqAAAAAC7Qz5KXAwdmLlHVE83PtS2uyzXO" // Replace with your site key
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <button
                            
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gray-700 ml-72 w-52 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                            >
                                {isSubmitting ? (
                                    <div className="flex place-content-center items-center">
                                        <div className="spinner"></div>
                                    </div>
                                ) : (
                                    'Submit' 
                                )}
                            </button>
                        </Form>
                    )}
                </Formik>
                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={3000}
                        onClose={handleCloseSnackbar}
                        message={snackbar.message}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    />
            </div>
        </section>
    );
};

export default Contact;
