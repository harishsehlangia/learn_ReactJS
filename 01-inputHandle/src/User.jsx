import { useState } from 'react'


function User(){

    const [val, setVal] = useState("")


    return(
        <div>
        <h5 style={{textAlign:'center', color:'GrayText'}}>output board</h5>
        <div style={{
            backgroundColor:'rgb(117, 255, 75)', color:'black' , height:'50vh', width:'70vh', borderRadius:'10px', padding:'10px', border:'1px solid black',
        }}>
            <h2 style={{
                textAlign:'left' , color:'black', padding:'1px', wordWrap:'break-word',  
                whiteSpace:'pre-wrap', fontSize:'17px'
            }}>{val}</h2>
        </div>
            <br />
        <div style={{alignContent: 'center', display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
            {/* <h2>{val}</h2> */}
            <input type="text" value={val} placeholder='Type someting...' onChange={(e)=>setVal(e.target.value)}
                style={{height:'40px', width:'50vh', borderRadius:'10px', border:'none', padding:'5px', margin:'5px'}}
            />
            <br /><br />
            <button onClick={()=>setVal("")}
                style={{backgroundColor:'green'}}
            >Clear Value</button>
        </div>
        </div>
    )
}

export default User;