import { useContext, useState } from "react"
import { dataContext } from "./form"

const Table =()=>{
    const {data} = useContext(dataContext)
    const dataArr = Object.values(data)
    const [result_sort,setResult] = useState(Object.values(data))
    const test = Object.values(data)
    const defaultArr = Object.keys(data)
    const nameArr = Object.values(data).map(item=>JSON.parse(item).firstname+JSON.parse(item).lastname)
    const genderArr = Object.values(data).map(item=>JSON.parse(item).gender)
    const mobilephoneArr = Object.values(data).map(item=>Number(JSON.parse(item).code+JSON.parse(item).phone))
    const nationalityArr = Object.values(data).map(item=>JSON.parse(item).nationality)
    const maxrow = 3
    const pages = (Math.floor(Object.keys(data).length/maxrow)===Object.keys(data).length/maxrow)?
    Math.floor(Object.keys(data).length/maxrow):Math.floor(Object.keys(data).length/maxrow)+1
    const [page,setPage] = useState(1)

    const Looprow=(props)=>{
        return(
            <tr style={{textAlign:'center'}}>
                <td><input type="checkbox" className="form-check-input"/></td>
                <td>{props.name}</td>
                <td>{props.gender}</td>
                <td>{props.mobilephone}</td>
                <td>{props.nationality}</td>
                <td>
                    <button className="btn btn-link">edit</button>
                    <button style={{color:'red'}} className="btn btn-link">del</button>
                </td>
            </tr>
        )
    }

    const argsort=(arr1,arr2)=>{
        arr1.map((item,index)=> [arr2[index],item])
        .sort(([arg1],[arg2])=>arg2-arg1)
        .map(([,item],index)=>test[index]=item)
    }

    const argsortstring=(arr1,arr2)=>{
        arr1.map((item,index)=> [arr2[index],item])
        .sort(([arg1],[arg2])=>{
            if(arg2<arg1){
                return -1
            }
            if (arg2>arg1){
                return 1
            }
            return 0
        })
        .map(([,item],index)=>test[index]=item)
    }

    const sort=(e)=>{
        let sortby = e.target.value
        if(sortby==='default'){
            argsort(dataArr,defaultArr)
        }
        if(sortby==='name'){
            argsortstring(dataArr,nameArr)
        }
        if(sortby==='gender'){
            argsortstring(dataArr,genderArr)
        }
        if(sortby==='mobilephone'){
            argsort(dataArr,mobilephoneArr)
        }
        if(sortby==='nationality'){
            argsortstring(dataArr,nationalityArr)
        }
        test.reverse()
        setResult(test)
    }
    
    return(
        <div style={{marginTop:"50px"}}>
            <div>
                <input style={{marginLeft:'10px'}} type='checkbox'/>
                <label style={{marginLeft:'10px'}} htmlFor='deleteAll'>Select All</label>
                <button style={{marginLeft:'10px'}} id='deleteAll' className="btn btn-danger">DELETE</button>
                <div style={{float:'right'}}>
                    <button onClick={()=>page===1?null:setPage(page-1)} style={{width:"20px",marginRight:'20px'}} className="btn btn-link">prev</button>
                    {Array.from(Array(pages).keys()).map((item)=>
                    {return <button id='page' onClick={()=>setPage(item+1)} style={{width:"20px"}} className="btn btn-link">{item+1}</button>
                    })}
                    <button onClick={()=>page===pages?null:setPage(page+1)} style={{width:"20px",marginRight:'20px'}} className="btn btn-link">next</button>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr style={{backgroundColor:'#DAF7A6'}}>
                        <th style={{width:'50px',textAlign:'center'}}>select</th>
                        <th style={{width:'300px',textAlign:'center'}}>name</th>
                        <th style={{width:'100px',textAlign:'center'}}>genger</th>
                        <th style={{textAlign:'center'}}>mobile phone</th>
                        <th style={{width:'200px',textAlign:'center'}}>nationality</th>
                        <th style={{textAlign:'center'}}>manage</th>
                    </tr>
                </thead>
                <tbody>
                    {result_sort.map((item,index)=>
                        Math.floor(index/maxrow)+1===page?(
                            <Looprow 
                                name={JSON.parse(item).firstname+' '+JSON.parse(item).lastname}
                                gender={JSON.parse(item).gender}
                                mobilephone={'('+JSON.parse(item).code+') '+JSON.parse(item).phone}
                                nationality={JSON.parse(item).nationality} 
                            />
                        ):null
                    )}
                </tbody>
            </table>
            <div>
                <label htmlFor="sort">sort by :</label>
                <select onChange={sort} id='sort'>
                    <option value="default">default</option>
                    <option value="name">name</option>
                    <option value="gender">gender</option>
                    <option value="mobilephone">mobilephone</option>
                    <option value="nationality">nationality</option>
                </select>
            </div>
        </div>
    )
}
export default Table