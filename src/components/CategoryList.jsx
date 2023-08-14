import React from 'react'
import { imgs , categories } from '../data'
import CategoryCard from './CategoryCard'

const [ 
    imgKanto, 
    imgJohto, 
    imghoenn, 
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

            {/* Category Link hoenn */}
            <CategoryCard 
                category={categories.hoenn} /* props */
                src={imghoenn} 
                alt={`Categoria ${categories.hoenn}`}
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
