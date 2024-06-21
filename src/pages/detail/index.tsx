
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DetailMenuResponse } from '@/interface/detailMenu'
import { DetailMenuServices } from '@/services'
import parse from 'html-react-parser';
import Header from "@/components/Header";

const DetailPage = () => {
    const params = useParams()
    const [detailMenu, setDetailMenu] = useState<DetailMenuResponse | null>()

    const callDetail = async (id: number) => {
        // Api detail Menu
        const responseDetail = await DetailMenuServices.getDetailMenu(id)
        setDetailMenu(responseDetail.data)
    }


    useEffect(() => {
        if (params.id) {
            callDetail(Number(params.id))
        }
    }, [params.id])

    return (
        <div>
            <Header />

            <div className='w-full m-[auto]'>
                {detailMenu && (
                    <div>
                        <img className=" w-[100%] rounded pb-10 h-[900px]  m-[auto] " src={detailMenu.image} alt="" />
                        <Link to={`/`} className='mt-[50px] m-10 text-xl font-sans text-red-300 hover:text-red-200'>‹  BACK</Link>
                        <div className='w-[80%] m-[auto]'>

                            <h2 className='flex justify-center pb-5 mt-11 mb-5 text-4xl'>{detailMenu.title}</h2>

                            <div className='flex justify-center gap-9 m-auto mb-16  mt-16 font-serif'>
                                <div className='bg-slate-300  '>Cuisines : {detailMenu.cuisines} </div>
                                <div className='bg-lime-300 rounded'>Health Score : {detailMenu.healthScore} score </div>
                                <div className='bg-red-300 rounded'>Total Time : {detailMenu.readyInMinutes} mins</div>
                                <p className='bg-orange-300 rounded'>For : {detailMenu.servings} Servings</p>
                            </div>

                            <p>{parse(detailMenu.summary)}</p>
                            <br />
                            <h2 className='text-2xl  mb-3 mt-7'>Ingredients</h2>
                            <ul>

                                {detailMenu.extendedIngredients.map((ingredient) => (
                                    <li key={ingredient.id}>{ingredient.name}</li>
                                ))}

                            </ul>

                            <br />
                            <h1 className='text-2xl  mb-3 mt-7 '>How to cook</h1>


                            <div className='mb-16'>{parse(detailMenu.instructions)}</div>


                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailPage