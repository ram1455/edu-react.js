
const InputFoam =({label, type, nama, onChange, value})=>{
    return(
        <div>
            <label>
                {label}:
                <br/><input type={type} name={nama} onChange={e=> onChange(e.target.value)} value={value}/>
            </label>
            <br/>
            <br/>
        </div>
        
    )
}
const RadioFoam =({label, type, nama1, nama2,value, onChange,checked})=>{
    return(
        <div>
            <label>
                {label}:
                <br/>
                <input type={type} name={value} value={nama1} onChange={e=> onChange(e.target.value)} checked={checked} /> {nama1}
                <input type={type} name={value} value={nama2} onChange={e=> onChange(e.target.value)} defaultChecked={checked}/> {nama2}
            </label>
            <br/>
            <br/>
            
        </div>
        
    )
}
const SelectFoam =({label,nama,defValue,value1,value2,value3,value4, onChange, value})=>{
    return( <div>

            <label>
                {label}: 
                <br/><select name={nama} onChange={e=> onChange(e.target.value)} value={value}> 
                <option value="">{defValue}</option>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
                </select>
            </label>
            <br/>
            <br/>
            </div>

    )
}

const TextAreaFoam =({label, type, nama, cols,rows, onChange, value})=>{
    return(
        <div>
            <label>
                {label}:
                <br/><textarea type={type} name={nama} cols={cols} rows={rows} onChange={e=> onChange(e.target.value)}
                    value={value}
                />
            </label>
            <br/>
            <br/>
        </div>
        
    )
}
export {InputFoam, SelectFoam, TextAreaFoam,RadioFoam};