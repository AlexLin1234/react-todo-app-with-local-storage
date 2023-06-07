import React, { useState } from 'react'

import styles from './TaskItem.module.css';

//library imports
import { CheckIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import {PencilIcon} from '@heroicons/react/24/outline'
const TaskItem = ({task}) => {
    const [isChecked, setIsChecked] = useState(task.checked);
    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked);
    }
  return (
    <li className={styles.task}>
        
        <div className={styles["task-group"]}>

            <input
             type = "checkbox" 
             className= {styles.checkbox} 
             checked = {isChecked} 
             onChange={handleCheckBoxChange}
             name = {task.name} 
             id = {task.id}/>


                <label htmlFor={task.id}
                        className = {styles.label}
                >
                    {task.name}
                        <p className={styles.checkmark}> 
                            <CheckIcon strokeWidth={2} width={24} height={24}></CheckIcon>
                        </p>
                </label>


            
        </div>
        <div className={styles["task-group"]}>
            <button
                className='btn'
                aria-label = {`Update ${task.name} Task`}

                //onClick = {}          
            >

            <PencilIcon strokeWidth={2} width={24} height={24}></PencilIcon>
            </button>
            <button
                className={`btn ${styles.delete}` }
                aria-label = {`Delete ${task.name} Task`}

                //onClick = {}          
            >

            <TrashIcon strokeWidth={2} width={24} height={24}></TrashIcon>
            </button>
            


        </div>

    </li>
  )
}

export default TaskItem