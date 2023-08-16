import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question.jsx';
import { questions , imgs , gifImages } from '../data.js'; /* Importo el array de preguntas de data.js */
import loadingPikachu from '../assets/loadingPikachu.gif'

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

    //const imageQuiz = imgs.filter(img => img === `/src/assets/${category.toLowerCase()}.png`)
    
    //console.log(imageQuiz)

    // useState. Tomo de data.js, buscando todos los questions que coincidan con la categoría dada. 
    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
        )

    const [indexQuestion, setIndexQuestion] = useState(0);

    const [ activeQuiz, setActiveQuiz ] = useState(false)

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
        //console.log(newQuestions)
    }, []);
        //console.log(questionsFiltered.length)

    const randomGifIndex = Math.floor(Math.random() * gifImages.length);
    const randomGif = gifImages[randomGifIndex];

    return (
        <div className='container flex flex-col items-center justify-center gap-10' style={{height: 'calc(100vh - 5rem)'}}>

            {activeQuiz ? (<Question 
                filteredQuestion={questionsFiltered[indexQuestion]} 
                setIndexQuestion={setIndexQuestion}
                indexQuestion={indexQuestion}
                questionsFiltered={questionsFiltered}
                setActiveQuiz={setActiveQuiz}
            />) : (
                <>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl text-teal-900 text-center font-bold">
                            {category}
                        </h1>
                        
                        <div className="flex justify-center items-center">
                            <img src={randomGif} alt={category} className='w-72' />
                        </div>
                    </div>

                    <button className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
                        onClick={() => setActiveQuiz(true)}>
                        Iniciar Quiz
                    </button>
                </>
            ) }
            
        </div>
    )
}
