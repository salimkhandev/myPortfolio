import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';


const Contact = () => {
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        if (!recaptchaValue) {
            alert("Please complete the reCAPTCHA.");
            setSubmitting(false);
            return;
        }

        console.log("the the token is",recaptchaValue);
        // Form submission logic here
        // alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);/

        // Example of how to submit the form data
        // You can use fetch or axios to send form data to your server
        try {
            const response = await axios.post('http://localhost:3000/submit-form', {
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
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <div className="relative z-10 max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-900">Contact Me</h2>
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
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700">
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
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700">
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
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700">
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
                                className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default Contact;
