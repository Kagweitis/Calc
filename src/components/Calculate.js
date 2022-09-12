import { useState } from "react"


const Calculate = ( { calculate }) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const onSubmit = (e) => {
        
        e.preventDefault()
        
        calculate({value1, value2})
        console.log(value1, value2)
        // //need to output answer
        // https://www.freecodecamp.org/news/pass-data-between-components-in-react/ helped with understanding props
        setValue1('')
        setValue2('')
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form">
                    <label>enter first number</label>
                    <input type='text'
                    value={value1}
                    onChange={(e)=> setValue1(e.target.value)}/>
             </div>
             <div className="form">
                    <label>enter second number</label>
                    <input type='text'
                    value={value2}
                    onChange={(e)=> setValue2(e.target.value)}/>
            </div>
                
                <input type='submit' value='submit' className="submit-btn" />
        </form>
        
    </div>
    
  )
}

export default Calculate
