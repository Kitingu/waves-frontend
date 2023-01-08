import React,{useState} from 'react'
import "./styles.scss"

function CreateWave() {
    const [wave, setWave] = useState({
        title: "",
        description: "",
        category: "",
        date: "",
        creator: "",
        });
        const { title, description, category, date, creator } = wave;
        const onChange = e => setWave({
                ...wave,
                [e.target.name]: e.target.value
            })
    

  return (
    <div className='container create-wave'>
    <form className='relative m-auto flex flex-col justify-center w-80 '>

    <h1 className='text-2xl m-auto'>Create Wave</h1>
    <input  type="text" name='title' value={title} onChange={onChange} placeholder="title"/>
    <input  type="text" name='description' value={description} onChange={onChange} placeholder="description"/>
    <input  type="text" name='category' value={category} onChange={onChange} placeholder="category"/>
    <input  type="text" name='title' value={date} onChange={onChange} placeholder="date"/>
    <input  type="text" name='creator' value={creator} onChange={onChange} placeholder="creator"/>
    <button className='btn-main bg-slate-600 text-white'>Create</button>
    </form>
    
    </div>
  )
}

export default CreateWave