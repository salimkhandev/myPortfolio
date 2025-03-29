import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Snackbar from "@mui/material/Snackbar";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        <section id="contact" className="min-h-screen py-20 relative bg-gradient-to-b from-black via-[#0a1122] to-black">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto bg-[#1a2544]/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                    data-aos="fade-up"
                >
                    {/* Header Section */}
                    <div className="text-center p-8 border-b border-white/10">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                            Get in Touch
                        </h2>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mt-4">
                            {[
                                { icon: faWhatsapp, href: "https://wa.me/923201970649", color: "hover:text-green-400" },
                                { icon: faGithub, href: "http://github.com/salimkhandev", color: "hover:text-gray-400" },
                                { icon: faLinkedin, href: "https://www.linkedin.com/in/salim-khan-969492256", color: "hover:text-blue-400" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transform hover:scale-110 transition-all duration-300 ${social.color}`}
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-3xl text-white/80" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-8">
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.name) errors.name = 'Required';
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.message) errors.message = 'Required';
                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-6">
                                    {/* Input Fields */}
                                    {[
                                        { name: 'name', label: 'Name', type: 'text' },
                                        { name: 'email', label: 'Email', type: 'email' },
                                        { name: 'message', label: 'Message', type: 'textarea' }
                                    ].map((field) => (
                                        <div key={field.name} className="space-y-2">
                                            <label htmlFor={field.name} className="block text-sm font-medium text-white/80">
                                                {field.label}
                                            </label>
                                            <Field
                                                as={field.type === 'textarea' ? 'textarea' : 'input'}
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                                    transition-all duration-300"
                                                placeholder={`Enter your ${field.label.toLowerCase()}`}
                                                rows={field.type === 'textarea' ? 4 : undefined}
                                            />
                                            <ErrorMessage name={field.name}>
                                                {msg => <div className="text-red-400 text-sm mt-1">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                    ))}

                                    {/* ReCAPTCHA */}
                                    <div className="flex justify-center">
                                        <ReCAPTCHA
                                            sitekey="6LfPzhUqAAAAAC7Qz5KXAwdmLlHVE83PtS2uyzXO"
                                            onChange={handleRecaptchaChange}
                                            ref={recaptchaRef}
                                            theme="dark"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg
                                                text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                                                focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2">
                                                    <span>Send Message</span>
                                                    <FontAwesomeIcon 
                                                        icon={faPaperPlane} 
                                                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                                                    />
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

                {/* Snackbar */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message={snackbar.message}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    ContentProps={{
                        sx: {
                            background: '#1a2544',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }
                    }}
                />
            </div>
        </section>
    );
};

export default Contact;
