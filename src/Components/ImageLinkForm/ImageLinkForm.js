import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return (
        <div>
            <p className="f3">
                {'This app will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center pa2">
                <div className=" form center pa4 br4 shadow-5">
                    <input type='text' className="f4 pa2 w-70 center" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg" onClick={onPictureSubmit} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;