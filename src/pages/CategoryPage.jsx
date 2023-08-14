import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question.jsx';
import { questions } from '../data.js'; /* Importo el array de preguntas de data.js */

//Función para barajar las preguntas de cada categoria y también reducirla al numero deseado.
const shuffleArray = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
}


export const CategoryPage = () => {

    /* Para leer el parametro de la URL, uso UseParams */
    const { category } = useParams()
    //console.log(category)
    //console.log(questions)

    // useState. Tomo de data.js, buscando todos los questions que coincidan con la categoría dada. 
    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
        )

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
        //console.log(newQuestions)
    }, []);

    return (
        <div className='container flex flex-col items-center justify-center gap-10' style={{height: 'calc(100vh - 5rem)'}}>
            <Question/>
        </div>
    )
}
