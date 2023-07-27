import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter ({ total, completed }) {
  
  const {completedTodos,
         totalTodos} = React.useContext(TodoContext)

      return(
      <>
      {(completedTodos/totalTodos) !== 1 ?

        <>
          <h1 className='TodoCounter'>
          Felicidades, has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
        </>

        :
        
        <>
          <h1 className='TodoCounter'>
          Felicidades, has completado todos tus TODOS</h1>
        </>

      }
      </>
    );
}

export {TodoCounter};