import React from 'react'
import { Link } from 'react-router-dom'
import { imgs , categories } from '../data'

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
            <Link 
                to={`/category/${categories.kanto}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgKanto} alt={`Categoria ${categories.kanto}`} className='scale-125'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.kanto}
                </h1>
            </Link>

            {/* Category Link Johto */}
            <Link 
                to={`/category/${categories.johto}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-pink-500 to-red-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgJohto} alt={`Categoria ${categories.johto}`} className='scale-125'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.johto}
                </h1>
            </Link>

            {/* Category Link Hohen */}
            <Link 
                to={`/category/${categories.hohen}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-red-500 to-blue-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgHohen} alt={`Categoria ${categories.hohen}`} className='scale-125'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.hohen}
                </h1>
            </Link>

            {/* Category Link Sinnoh */}
            <Link 
                to={`/category/${categories.sinnoh}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-yellow-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgSinnoh} alt={`Categoria ${categories.sinnoh}`} className='scale-125'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.sinnoh}
                </h1>
            </Link>

            {/* Category Link Teselia */}
            <Link 
                to={`/category/${categories.teselia}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-500 to-lime-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgTeselia} alt={`Categoria ${categories.teselia}`} className='scale-150'/> {/* Revisar imagen porque se ve un tanto pequeña. */}
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.teselia}
                </h1>
            </Link>

            {/* Category Link Kalos */}
            <Link 
                to={`/category/${categories.kalos}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-lime-500 to-teal-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgKalos} alt={`Categoria ${categories.kalos}`} className='w-screen'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.kalos}
                </h1>
            </Link>

            {/* Category Link Alola */}
            <Link 
                to={`/category/${categories.alola}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-teal-500 to-purple-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgAlola} alt={`Categoria ${categories.alola}`} className='w-screen'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.alola}
                </h1>
            </Link>

                        {/* Category Link Galar */}
                        <Link 
                to={`/category/${categories.galar}`} 
                className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-teal-500 to-purple-500 transition-all hover:scale-105'>
                <div className='p-5 flex justify-center items-center'>
                    <img src={imgGalar} alt={`Categoria ${categories.galar}`} className='w-screen'/>
                </div>

                <h1 className="text-center text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                    {categories.galar}
                </h1>
            </Link>
        </div>
    )
}

export default CategoryList
