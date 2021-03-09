import React, {useState} from 'react'

function BandInput(props) {

  const [name, setName] = useState("")

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addBand({name})
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Band Name:</label>
        <input type="text" name="name" onChange={handleChange} value={name}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default BandInput
