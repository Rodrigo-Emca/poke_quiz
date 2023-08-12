import React from 'react'
/* Este archivo nos servirá de punto de entrada de las rutas. */
import { Route, Routes } from 'react-router-dom'
import { HomePage, CategoryPage } from './pages' /* Aqui lo importo desde la carpeta pages, gracias al archivo index.js contenida en la misma. */

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Routes path='/category/:category' element={<CategoryPage/>}/>
            </Routes>
        </>
    )
}
