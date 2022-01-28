import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { StyledCartForm } from './CartFormStyled';

const CartForm = ({ endPurchase }) => {

    const endPurchaseHandler = ({fname, lname, email}) => {
        endPurchase(fname, lname, email);
    }

    return (
        <Formik
            onSubmit={(values, { resetForm }) => {
                endPurchaseHandler(values)
                resetForm()
            }}
            initialValues={{ fname: '', lname: '', email: '' }}
            validate={(values) => {
                const errors = {};

                if (!values.fname) {
                    errors.fname = "Enter your name, please"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.fname)) {
                    errors.fname = "Name can only contain letters and spaces"
                }

                if (!values.lname) {
                    errors.lname = "Enter your Last Name, please"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lname)) {
                    errors.lname = "Last Name can only contain letters and spaces"
                }

                if (!values.email) {
                    errors.email = "Please enter a valid e-mail"
                } else if (!/^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/.test(values.email)) {
                    errors.email = "Must enter a valid e-mail format (example@mail.com)"
                }

                return errors;
            }}
        >
            {({ errors }) => (
                <StyledCartForm>
                    <Form className='form-cnt'>
                        <h2>Complete Payment Methods</h2>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="fname">Name</label>
                            <Field
                                className="field"
                                type="text"
                                id="fname"
                                name="fname"
                            />
                            <ErrorMessage  name="fname" component={() => {
                                return <div className='error-msg'>{errors.fname}</div>
                            }} />
                        </div>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="lname">Last Name</label>
                            <Field
                                className="field"
                                type="text"
                                id="lname"
                                name="lname"
                            />
                            <ErrorMessage name="lname" component={() => {
                                return <div className='error-msg'>{errors.lname}</div>
                            }} />
                        </div>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="email">E-mail</label>
                            <Field
                                className="field"
                                type="text"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component={() => {
                                return <div className='error-msg'>{errors.email}</div>
                            }} />
                        </div>
                        <button className='btn-submit' type="submit">End Purchase</button>
                    </Form>
                </StyledCartForm>
            )}
        </Formik>
    );
};

export default CartForm;