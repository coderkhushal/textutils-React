import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:"50px"}}>
         {/* this syntax basically says if props.alert is null then further html will not be returned otherwise it will be returned and will be shown as alert */}
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-0`} role="alert" >
                <strong  >{props.alert.msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>}
        </div>
    )
}
