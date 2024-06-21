import { useSearch } from "@/components/Search";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {


    const { register, handleSubmit } = useSearch();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        navigate(`/category/${data.search}`);

    };

    useEffect(() => {
        document.title = "Home Page";
    }, []);


    return (
        <div className="m-[30px]">

            <form className="max-w-full" onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full  p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Recipe Search" required {...register("search")} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-300 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
                </div>
            </form>

        </div>)
}


export default Header
