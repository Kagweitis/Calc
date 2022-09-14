import React from 'react'
import OutputScreenRow from './OutputScreenRow'

const OutputScreen = (props) => {
  
  return (

    <div className='screen'>
      <OutputScreenRow value={props.question_inp}  />
      <OutputScreenRow value ={props.answer_inp} />
    </div>
  )
}

export default OutputScreen
