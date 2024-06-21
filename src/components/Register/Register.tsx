import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // บันทึกข้อมูลลง localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        window.location.href = "/Form";
    };

    useEffect(() => {

        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        if (email && password) {
            setEmail(email);
            setPassword(password);
        }
    }, []);
    return (
        <div className='m-5' >

            <Link to={"/Form"} className='m-10 text-xl font-sans  text-blue-300 hover:text-blue-200 '>‹ BACK</Link>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
                <img src="/images/logo.png" alt="logo" className="w-[280px] mb-8" />
                <hr />

                <div className='text-[35px] mt-2'><b>Register</b></div>
                <div className='mb-8'>It's quick and easy.</div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Repeat password" required value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </div>
    )
}

export default Register