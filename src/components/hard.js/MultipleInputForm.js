import React from 'react'

function MultipleInputForm({formData,handleInputChange, handleFormSubmit}) {
    console.log(formData)
    console.log(formData.name)
  return (
    <div>
        <form onSubmit={e=>handleFormSubmit(e)}>
            <label>
                Name:
                <input
                name='name'
                type='text'
                value={formData.name}
                onChange={e=>handleInputChange(e)}
                />
            </label>
            <label>
                Email:
                <input
                name='email'
                type='email'
                value={formData.email}
                onChange={e=>handleInputChange(e)}
                />
            </label>
            <label>
                Password:
                <input
                name='password'
                type='password'
                value={formData.password}
                onChange={e=>handleInputChange(e)}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleInputForm