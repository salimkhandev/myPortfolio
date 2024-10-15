import { useState,useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Snackbar from "@mui/material/Snackbar";
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animations
        });
    }, []);
    const [recaptchaValue, setRecaptchaValue] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });
    const recaptchaRef = useRef();

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (values, { setSubmitting ,resetForm }) => {
        if (!recaptchaValue) {
            alert("Please complete the reCAPTCHA.");
console.log(recaptchaRef.current,'❤️');
            setSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('https://portfolio-backend-git-main-salimkhandevs-projects.vercel.app/submit-form', {
                ...values,
                recaptchaToken: recaptchaValue,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            resetForm();
            // setRecaptchaValue('');
            recaptchaRef.current.reset();

            console.log('Success:', response.data);
            
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }




        setSubmitting(false);
        setSnackbar({ open: true, message: "Thank you! Your message has been sent." });
    };
    const handleCloseSnackbar = () => {
        setSnackbar({ open: false, message: "" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center relative bg-black bg-opacity-70"
        >
          
            <div className="relative z-10  p-6 w-[904px] a70 border border-gray-600  rounded-md shadow-lg"
                style={{
                    backgroundColor: 'rgba(0,0 ,0 ,0.5)', backdropFilter: 'blur(10px)', // Adjust the blur intensity
                    WebkitBackdropFilter: 'blur(10px)',
                }}>
                <h3 className="text-2xl font-semibold text-white black-ops-one-regular mt-6">Get in Touch</h3>
                <div data-aos="fade-up" className="flex space-x-4 my-4">
                    <a href="https://wa.me/923201970649" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-400 transition duration-300" />
                    </a>
                    <a href="http://github.com/salimkhandev" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/salim-khan-969492256" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-600 hover:text-blue-500 transition duration-300" />
                    </a>
                </div>
                <h2 data-aos="fade-in" className="text-3xl font-bold black-ops-one-regular text-white text-center ">Direct Contact Me</h2>
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
                        <Form data-aos="fade-in" data-aos-delay="200" className="mt-8 space-y-4 ">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-white">
                                    Name:
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border text-white px-3 py-2 rounded-md bg-transparent  "
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
                                    className="w-full text-white  bg-transparent border px-3 py-2 rounded-md"
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
                                    className="w-full border text-white  bg-transparent px-3 py-2 rounded-md"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mt-4" >

                                <ReCAPTCHA
                                    sitekey="6LfPzhUqAAAAAC7Qz5KXAwdmLlHVE83PtS2uyzXO" // Replace with your site key
                                    onChange={handleRecaptchaChange}
                                    ref={recaptchaRef}
                                    

                                />
                        
                            </div>
                            <div className='w-full  flex justify-center '>

                            <button
                            
                                type="submit"
                                disabled={isSubmitting}
                                    className="bg-blue-900 hover:bg-blue-500  text-white font-bold py-2 px-4 rounded"
                            >
                                {isSubmitting ? ( 
                                    <div className="flex place-content-center text-blue-900 items-center">
                                        <div className="spinner"></div>
                                    </div>
                                ) : (
                                    'Submit' 
                                )}
                            </button>
                            </div>
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
