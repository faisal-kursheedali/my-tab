import React from 'react'

const SubtaskCompleted = ({completedTask}) => {
  
  return (
        <div className="subtask-completed-container">
        <div className="subtask-completed-head">
          Completed
        </div>
        <ul className='subtask-completed-list'></ul>
        {
          completedTask.map(i=>{
            return(
              <li className="subtask-completed-list-item">
                <div className="completed-head">
                  {i.head}
                </div>
                <div className="completed-desc">
                  {i.desc}
                </div>
              </li>
            )
          })
        }
      </div>
  )
}

export default SubtaskCompleted