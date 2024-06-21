import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListMenuResponse } from '@/interface/listMenu';
import { listMenuServices } from '@/services';
import Header from '@/components/Header';
import Like from '@/components/Like';

const CategoryPages: React.FC = () => {
    const params = useParams();
    const [menuList, setMenuList] = useState<ListMenuResponse | null>(null);
    const [likedItems, setLikedItems] = useState<any[]>([]);
    const [email, setEmail] = useState<string | null>(null);

    const callData = async (type: string, query: string) => {
        try {
            const responseList = await listMenuServices.getListMenu({ type, query });
            setMenuList(responseList.data || null);
        } catch (error) {
            console.error("Failed to fetch menu list:", error);
            setMenuList(null); // Reset to null on error
        }
    };

    useEffect(() => {
        if (params.id) {
            callData(params.id, '');
        }
    }, [params.id]);

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

    const handleToggleLike = (itemId: string, liked: boolean) => {
        if (!email) return;

        let updatedLikedItems: any[];
        if (liked) {
            const selectedItem = menuList?.results.find(item => item.id === parseInt(itemId));
            if (selectedItem) {
                updatedLikedItems = [...likedItems, { id: itemId, image: selectedItem.image, title: selectedItem.title }];
            } else {
                updatedLikedItems = [...likedItems];
            }
        } else {
            updatedLikedItems = likedItems.filter(item => item.id !== itemId);
        }
        setLikedItems(updatedLikedItems);
        localStorage.setItem(`likedItems_${email}`, JSON.stringify(updatedLikedItems));
    };

    return (
        <div className='w-full m-[auto] '>
            <Header />
            <div className='w-[90%] m-[auto]'>
                <div className='flex justify-between'>
                    <Link to={"/"} className='mt-[50px] text-xl font-sans  text-red-300 hover:text-red-200 '>‹ BACK</Link>
                    <div className='m-8 lg:text-5xl sm:text-1xl font-sans '>
                        {params.id}
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-6 '>
                    {menuList && menuList.results.map((item) => (
                        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg w-full " src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>
                                <div className='flex justify-between'>
                                    <Link to={`/detail/${item.id}`} className="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-300 hover:bg-red-200 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 " >
                                        Ingredients
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                    <Like
                                        id={item.id.toString()}
                                        image={item.image}
                                        title={item.title}
                                        initialLiked={likedItems.some(likedItem => likedItem.id === item.id.toString())}
                                        onToggleLike={handleToggleLike}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPages;





