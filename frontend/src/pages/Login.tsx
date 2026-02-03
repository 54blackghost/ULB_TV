import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signup } from '../services/authService';
import toast from 'react-hot-toast'; // Assuming react-hot-toast is available

const AuthPage = () => {
    const [state, setState] = useState("login"); // "login" or "register"
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { loginUser, isAdmin, user } = useAuth();

    useEffect(() => {
        if (user) { // If user is logged in
            if (isAdmin) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        }
    }, [user, isAdmin, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if (state === "login") {
                await loginUser(formData.email, formData.password);
                toast.success('Logged in successfully!');
            } else { // state === "register"
                await signup(formData.name, formData.email, formData.password);
                toast.success('Account created successfully! Please log in.');
                setState("login"); // Switch to login state after successful signup
            }
        } catch (err: unknown) {
            const errorMessage = (err instanceof Error) ? err.message : 'An unknown error occurred.';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[url('/logo.png')] bg-cover bg-center overflow-hidden">
            {/* Keeping the BlurCircle placeholders for now, can be removed if not desired */}
            {/* <BlurCircle top="100px" left="0px" />
            <BlurCircle bottom="50px" right="50px" /> */}

            <form
                onSubmit={handleSubmit}
                className="sm:w-87.5 w-full text-center bg-gray-900 border border-gray-800 rounded-2xl px-8 py-8 z-10" // Added py-8 for vertical padding
            >
                <h1 className="text-white text-3xl mt-2 font-medium"> {/* Adjusted mt-10 to mt-2 */}
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">Please {state === "login" ? "sign in" : "sign up"} to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none " value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center mt-4 w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none " value={formData.email} onChange={handleChange} required />
                </div>

                <div className=" flex items-center mt-4 w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none" value={formData.password} onChange={handleChange} required />
                </div>

                {state === "login" && (
                    <div className="mt-4 text-left">
                        <button type="button" className="text-sm text-indigo-400 hover:underline">
                            Forget password?
                        </button>
                    </div>
                )}

                {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

                <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition " disabled={loading}> {/* Adjusted mt-2 to mt-4 */}
                    {loading ? (state === "login" ? 'Logging in...' : 'Signing up...') : (state === "login" ? "Login" : "Sign up")}
                </button>

                <p onClick={() => {
                    setState(prev => prev === "login" ? "register" : "login");
                    setError(null); // Clear error when switching state
                }} className="text-gray-400 text-sm mt-3 mb-4 cursor-pointer" > {/* Adjusted mb-11 to mb-4 */}
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-indigo-400 hover:underline ml-1">click here</span>
                </p>
            </form>
        </div>
    );
};

export default AuthPage;