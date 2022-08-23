const Gender=(props)=>{
    const set=(e)=>{
        props.handleRadio(e.target.value)
    }
    return(
            <div className="form-row">
                <div style={{margin:"10px"}} className="form-check">
                    <input onChange={set} value='male' className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                </div>
                <div style={{margin:"10px"}} className="form-check">
                    <input onChange={set} value='female' className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                    </label>
                </div>
                <div style={{margin:"10px"}} className="form-check">
                    <input onChange={set} value='unisex' className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" />
                    <label className="form-check-label" htmlFor="gridRadios3">
                        Unisex
                    </label>
                </div>
            </div>
    )
}

export default Gender