import React, { useState } from 'react'
import MultipleInputForm from './MultipleInputForm'

function HandleMultipleInputForm() {
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setFormData((prevData)=>({
            ...prevData,
            [name] : value
        }))
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        // alert(`Your submitted data is ${JSON.stringify(formData,null, 2)}`)
    }
  return (
    <div>
      <MultipleInputForm
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      formData={formData}
      />
    </div>
  )
}

export default HandleMultipleInputForm