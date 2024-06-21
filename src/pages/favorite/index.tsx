import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorite: React.FC = () => {
    const [likedItems, setLikedItems] = useState<any[]>([]);
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
            const storedLikes = localStorage.getItem(`likedItems_${storedEmail}`);
            if (storedLikes) {
                setLikedItems(JSON.parse(storedLikes));
            } else {
                setLikedItems([]);
            }
        }
    }, []);


    useEffect(() => {
        if (email) {
            const storedLikes = localStorage.getItem(`likedItems_${email}`);
            if (storedLikes) {
                setLikedItems(JSON.parse(storedLikes));
            } else {
                setLikedItems([]);
            }
        }
    }, [email]);

    const handleUnlike = (itemId: string) => {
        if (!email) return;

        const updatedLikedItems = likedItems.filter(item => item.id !== itemId);
        setLikedItems(updatedLikedItems);
        localStorage.setItem(`likedItems_${email}`, JSON.stringify(updatedLikedItems));
    };

    return (
        <div>
            <div className="flex justify-between pt-16 mx-16 mb-2">
                <Link to={"/"} className='text-xl font-sans  text-red-300 hover:text-red-200 '>‹ BACK</Link>
                <h1 className="flex justify-end font-serif text-xl lg:text-3xl ">Favorites Menu</h1>
            </div>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 mt-[50px] gap-6 w-[90%] m-[auto]'>
                {likedItems.length > 0 ? (
                    likedItems.map((item) => (
                        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg w-full " src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>
                                <div className='flex justify-between'>
                                    <Link to={`/detail/${item.id}`} className="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-300 hover:bg-red-200 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 " >
                                        Ingredients
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                    <button onClick={() => handleUnlike(item.id)} className='mt-10 text-lg'>Unlike</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No items liked yet.</div>
                )}
            </div>
        </div>
    );
};

export default Favorite;



