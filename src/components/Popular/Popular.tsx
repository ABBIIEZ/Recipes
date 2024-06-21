

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { listMenuServices } from "@/services/listMenu";
import { ListMenuResponse } from '@/interface/listMenu'




const Popular = () => {
    const [popularRecipes, setPopularRecipes] = useState<ListMenuResponse | undefined>(undefined);


    useEffect(() => {
        const fetchPopularRecipes = async (type: string) => {
            const response = await listMenuServices.getListMenu({ type });
            if (response.status === 200) {
                setPopularRecipes(response.data);
            }
        };
        fetchPopularRecipes('');
    }, []);

    return (
        <div className="mt-8 mb-20">
            <p className="text-4xl mb-10 font-sans">interesting food recipes</p>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                navigation={true}
                modules={[Navigation]}
                className="pl-16 pr-12"

            >
                {popularRecipes?.results.map((recipe) => (
                    <SwiperSlide key={recipe.id} >
                        <div>
                            <img className="rounded-2xl w-[250px]" src={recipe.image} alt="" />
                            <div className="flex justify-start w-[250px] sm:text-[10px] lg:text-[15px]">{recipe.title}</div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Popular;


