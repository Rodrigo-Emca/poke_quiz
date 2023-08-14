import React from 'react'

const Question = ({ filteredQuestion, setIndexQuestion, indexQuestion, questionsFiltered,
}) => {

  return (
    <>
      <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg">
        <span className="text-xl font-bold">
          {/* numero de pregunta actual y numero de preguntas totales. */}
          {indexQuestion + 1} / {questionsFiltered.length}
        </span>

        <div>
          <span className="font-semibold">Dificultad: </span>
          <span className="font-bold">{filteredQuestion.difficulty}</span>
        </div>

        <button className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900">
          Reiniciar
        </button>

        <div>
          <h1 className="font-bold">
            Titulo de la pregunta.
          </h1>
        </div>

        {/* Las respuestas del usuario van aqui */}
        <div className="grid grid-cols-2 gap-5">
          {/* Mapeamos un arreglo de respuesta correcta e incorrectas */}
          <button className="border p-5 rounded-lg flex justify-center items-center hoover:scale-105">
            <p className="font-medium text-center text-sm">
              Alguna Respuesta
            </p>
          </button>
        </div>

        {/* Aqui va el condicional para mostrar el boton de siguiente pregunta o el de finalizar. */}
        <button className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium">
          Finaliar o siguiente pregunta.
        </button>
      </div>
    </>
  )
}

export default Question
