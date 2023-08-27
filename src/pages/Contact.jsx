import { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [valid, setValid] = useState(false);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        if (name === 'email') setEmail(value)
        else if (name === 'name') setName(value)
        else setMessage(value)
    };

    const handleValidation = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            if (!validateEmail(value)) setErrorMessage(`Your email isn't valid`)
            else {
                setErrorMessage('')
                setValid(true)
            }
        } else {
            if (!value.length) setErrorMessage(`This is a required field.`)
            else setErrorMessage('')
        }
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        setErrorMessage(`Email sent!`)
        setName('')
        setEmail('')
        setMessage('')
    };

    return (
        <div className="container text-center">
            <h1>
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    onBlur={handleValidation}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    onBlur={handleValidation}
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                    onBlur={handleValidation}
                ></textarea>
                <button type="submit" disabled={(!(email && name && message && valid && !errorMessage))}>
                    Submit
                </button>
            </form>
            {errorMessage && (<div>{errorMessage}</div>)}
        </div>
    );
}

export default Form;
