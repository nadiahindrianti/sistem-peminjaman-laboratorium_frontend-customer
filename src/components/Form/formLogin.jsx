import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import Buttonn from '../../components/Atom/button/button.jsx';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import '../../styles/formLogin.css';
import { useAuth } from '../Layout/AuthContext.jsx';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy data for login
        const dummyEmail = 'admin@labaccess.com';
        const dummyPassword = '12345';

        // Check if email and password match dummy data
        if (email === dummyEmail && password === dummyPassword) {
            // Login successful
            login('dummy-auth-token'); // Replace 'dummy-auth-token' with actual token if needed
            setError(null); // Clear any previous errors
            navigate('/home');
        } else {
            // Login failed
            setError('Incorrect email or password');
        }
    };

    return (
        <div>
            <Form style={{ width: '375px', height: 'auto' }} className="mt-4">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group controlId="formBasicEmail" className="mb-4">
                    <div className="input-with-icon">
                        <HiOutlineMail className="input-icon" />
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <div className="password-input-wrapper input-with-icon">
                        <HiOutlineLockClosed className="input-icon" />
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </div>
                    </div>
                </Form.Group>
                <div className='d-flex justify-content-center mt-5'>
                    <Buttonn className="bg-button px-5" label="Login" onClick={handleLogin}></Buttonn>
                </div>
            </Form>
        </div>
    );
};

export default FormLogin;
