import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';
import Gender from './gender';
import Mobile from './mobilephone';
import Nationalities from './nationality';

export const dataContext = createContext()
export const Form=()=>{
  const [subM,setSubM] = useState(false)
  const {data,func} = useContext(dataContext)
  const {register, handleSubmit, formState:{errors}, setValue} = useForm()
  const onSubmit=d=>{
    setSubM(true)
    localStorage.setItem(Object.keys(data).length,JSON.stringify(d))
  }
  useEffect(()=>{
    if(subM){
      setSubM(false)
      func({...localStorage})
      window.location.reload()
    }
  },[subM])
  return(
    <div className="App">
      <h1>Presonal data form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
            <h4>Title</h4>
            <h4 style={{color:"red"}}>*</h4>
          <select {...register('title',{required:true})} className="col custom-select">
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          <h4>First name</h4>
          <h4 style={{color:"red"}}>*</h4>
          <div className="col">
            <input 
            {...register('firstname',{required:true})} 
            type='text'
            className="form-control" />
          </div>
          <h4>Last name</h4>
          <h4 style={{color:"red"}}>*</h4>
          <div className="col">
            <input 
            {...register('lastname',{required:true})}
            type="text" 
            className="form-control" />
          </div>
        </div>
        <div className="form-row">
            <h4>Birthday</h4>
            <h4 style={{color:"red"}}>*</h4>
          <div className="col">
            <input {...register('birthday',{required:true})} type="date" className="form-control"/>
          </div>
            <h4>Nationality</h4>
            <h4 style={{color:"red"}}>*</h4>
          <div className="col" {...register('nationality',{required:true})}>
            <Nationalities />
          </div>
        </div>
        <div className="form-row">
            <h4 style={{marginRight:"10px"}}>CitizenID</h4>
            <input style={{width:"50%"}} {...register('ID')} className='form-control' type='text' placeholder='x-xxxx-xxxxx-xx-x'/>
        </div>
        <div className="form-row">
            <h4 >Gender</h4>
            <div {...register('gender')}>
                <Gender handleRadio={(sended)=>{setValue("gender",sended)}} />
            </div>
        </div>
        <div className="form-row">
            <h4>Mobile phone</h4>
            <h4 style={{color:"red"}}>*</h4>
            <Mobile register={register} setValue={setValue}/>
        </div>
        <div className='form-row'>
            <h4 style={{marginRight:"10px"}}>Passport NO</h4>
          <input style={{width:"50%"}} {...register('passport')} className='form-control' type="number"/>
        </div>
        <div className="form-row">
            <h4 >Expected salary</h4>
            <h4 style={{color:"red"}}>*</h4>
          <input style={{width:"50%"}} {...register('salary',{required:true})} className='form-control' type="number"/>
          <button style={{marginLeft:'10%'}} type='submit' className="btn btn-primary">SUBMIT</button>
        </div>
        {(errors.firstname||errors.lastname||errors.birthday||errors.phone||errors.salary) && 
        <p style={{marginLeft:"10px",color:"red"}}>please enter {errors.firstname?'first name,':''} {errors.lastname?'last name,':''} {errors.birthday?'birthday,':''} {errors.phone?'mobile phone,':''} {errors.salary?'expected salary':''}</p>}
      </form>
    </div>
    )
}
