import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCET_PROGRESS, GET_PRODUCET_PROGRESS, POST_PRODUCET_PROGRESS, UPDATE_PRODUCET_PROGRESS } from '../redux-saga/Producet/Action/Action'

const Data = () => {

  const dispatch = useDispatch()

  const data = useSelector((state)=>state.getProducerReducer)

  useEffect(() => {
    dispatch({ type: GET_PRODUCET_PROGRESS });
  }, []);

  // console.log(data);

  const [Udata,setUdata] = useState([])

  const handlchang = (e) =>{
    setUdata({...Udata,[e.target.name]:e.target.value})
  }

  const Submitdata = () =>{
    dispatch({type:POST_PRODUCET_PROGRESS, paylod : Udata})
  }

  const Deletedata = (id) =>{
    dispatch({type:DELETE_PRODUCET_PROGRESS, paylod: id})
  }

  const Editdata = (e)=>{
    // console.log(e);
    setUdata(e)
  }

  const Update = ()=>{
    console.log(Udata);
    dispatch({type:UPDATE_PRODUCET_PROGRESS, paylod: Udata })
  }

  return (
    <>

      <input type="text" onChange={handlchang} name='title' value={Udata.title}/>
      <input type="text" onChange={handlchang} name='author' value={Udata.author} />
      <button onClick={Submitdata}>Submit</button>
      <button onClick={Update}>Update</button>

      {
        data.producet.map((e,index)=>{
          return(
            <div key={index}>
              <>{e.title}_</>
              <>{e.author}</>
              <button onClick={()=>Deletedata(e.id)}>Delete</button>
              <button onClick={()=>Editdata(e)}>Edit</button>
            </div>
          )
        })
      }
    </>
  )
}

export default Data