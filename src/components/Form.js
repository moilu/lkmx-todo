import React, { useState } from 'react';
import { addTodo } from '../utils/addTodo';
import { ToDoList } from './ToDoList';

export const Form = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };
    
    const handleClick = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {
            addTodo(inputValue);
            setInputValue('');
        }

    };

    return (
        <>
        <form id='form'>
            <div className='container'>
                <input 
                    autoComplete='off'
                    className='input' 
                    id='input' 
                    onChange={ handleInputChange }
                    placeholder='Ingresa una tarea' 
                    type='text' 
                    value={ inputValue }
                />
                <button onClick={ handleClick }>Agregar</button>
            </div>
        </form>
        </>
    )
};