import Search from "@/components/Search";
import Popular from "@/components/Popular";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [email, setEmail] = useState("");
    const [likedItems, setLikedItems] = useState<string[]>([]);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
            const storedLikes = localStorage.getItem(`likedItems_${storedEmail}`);
            if (storedLikes) {
                setLikedItems(JSON.parse(storedLikes)); // Set likedItems state here
            }
        }
    }, []);

    const handleLogout = () => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            // Save likedItems before removing email
            localStorage.setItem(`likedItems_${storedEmail}`, JSON.stringify(likedItems));
            localStorage.removeItem("email");
        }
        window.location.reload();
    };

    return (
        <div>
            <img src="/images/header.jpeg" alt="headimage" className="sm:w-screen 2xl:w-screen" />
            <div className="flex justify-between m-[40px]">
                <div className="header-left">
                    <img src="/images/logo.png" alt="logo" className="w-[130px]" />
                </div>
                <div className="header-right">
                    {email ? (
                        <>
                            <span className="mr-1 font-medium">{email}</span>
                            <Link to={"/"} onClick={handleLogout} className="font-medium rounded-lg text-sm hover:underline">| Logout</Link>
                            <div className="flex justify-center mt-3 border-solid border-2 border-grey hover:border-dotted w-[145px]">
                                <Link to={"/favorite"}>❤️FavoritePage</Link>
                            </div>
                        </>
                    ) : (
                        <Link to={"/Form"} className="font-medium text-sm">Login</Link>
                    )}
                </div>
            </div>
            <div className='w-[90%] m-[auto]'>
                <Search />
                <br />
                <br />
                <Popular />
            </div>
        </div>
    );
}

export default HomePage;





