import React from 'react'

const AddClient = () => {
    return (
        <div className=' w-100 h-100'>
            <iframe
                id="JotFormIFrame-242443887723061"
                title="Form"
                // onload="window.parent.scrollTo(0,0)"
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/242443887723061"
                frameBorder="0"
                // style={{ top: 0, left: 0, width: "100%", height: "99%", position: "absolute", border: 0, borderRadius: ".7rem" }}
                style={{minWidth:"100%",maxWidth:"100%",height:"99%",border:"none"}}
                scrolling="no"
            >
            </iframe>
        </div>
    )
}

export default AddClient