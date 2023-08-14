import React from 'react'
import { Link } from 'react-router-dom'
import { imgs , categories } from '../data'
import CategoryCard from './CategoryCard'

const [ 
    imgKanto, 
    imgJohto, 
    imgHohen, 
    imgSinnoh, 
    imgTeselia,
    imgKalos,
    imgAlola,
    imgGalar,
] = imgs

const CategoryList = () => {
    return (
        <div className='flex flex-wrap flex-row justify-center gap-4 mt-10'>

            {/* Category Link Kanto */}
{/*             <Link 
                to={`/category/${categories.kanto}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img 
                    src={imgKanto} 
                    alt={`Categoria ${categories.kanto}`} 
                    className='w-screen'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.kanto}
                </h1>
            </Link> */} {/* Todo el link fue construido primero, y luego se lo refactoriza en componente CategoryCard. */}
            <CategoryCard 
                category={categories.kanto} /* props */
                src={imgKanto} 
                alt={`Categoria ${categories.kanto}`}
                gradientColor='from-purple-500 to-pink-500'
                />

            {/* Category Link Johto */}
            <CategoryCard 
                category={categories.johto} /* props */
                src={imgJohto} 
                alt={`Categoria ${categories.johto}`}
                gradientColor='from-pink-500 to-red-500'
                />

            {/* Category Link Hohen */}
            <CategoryCard 
                category={categories.hohen} /* props */
                src={imgHohen} 
                alt={`Categoria ${categories.hohen}`}
                gradientColor='from-red-500 to-blue-500'
                />

            {/* Category Link Sinnoh */}
            <CategoryCard 
                category={categories.sinnoh} /* props */
                src={imgSinnoh} 
                alt={`Categoria ${categories.sinnoh}`}
                gradientColor='from-blue-500 to-yellow-500'
                />

            {/* Category Link Teselia */}
            <CategoryCard 
                category={categories.teselia} /* props */
                src={imgTeselia} 
                alt={`Categoria ${categories.teselia}`}
                gradientColor='from-yellow-500 to-lime-500'
                />

            {/* Category Link Kalos */}
            <CategoryCard 
                category={categories.kalos} /* props */
                src={imgKalos} 
                alt={`Categoria ${categories.kalos}`}
                gradientColor='from-lime-500 to-pink-500'
                />

            {/* Category Link Alola */}
            <CategoryCard 
                category={categories.alola} /* props */
                src={imgAlola} 
                alt={`Categoria ${categories.alola}`}
                gradientColor='from-pink-500 to-orange-500'
                />

            {/* Category Link Galar */}
            <CategoryCard 
                category={categories.galar} /* props */
                src={imgGalar} 
                alt={`Categoria ${categories.galar}`}
                gradientColor='from-orange-500 to-lime-500'
                />
        </div>
    )
}

export default CategoryList
