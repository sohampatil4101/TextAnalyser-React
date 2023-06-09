import React, {useState} from 'react'
// import propTypes from 'prop-types';

export default function Textform(props) {

    // code for operating buttons
    const [text, setTexts] = useState('Enter the text here ')

    const handleonchange = (event)=>{
        setTexts(event.target.value)
    }

    const onclickfun = ()=>{
        let txt  = text.toUpperCase();
        setTexts(txt)
    }

  return (
    <>
    
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
    <strong>{props.alert.msg}</strong>     
    </div>}
    </div>

    <div className="container" style={props.mystyle} >{props.title}
    <div className="mb-13 " style={props.mystyle} >
        <textarea name="form-control" value={text} onChange={handleonchange} style={{"borderRadius": "20px", "padding": "22px"}} id="mybox" rows="8"></textarea>
    </div>
        <button  className="btn btn-success  my-1" disabled={text.length===0} onClick={onclickfun} >Uppercase</button>

    <div>
        <button className="btn btn-success  my-1" onClick={props.onclickfun2} >{props.mode}</button>
    </div>
    </div>

    <div className="container my=13 " style={props.mystyle} >
        Summary of your text
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>

</>
  )
}


// Navbar.defaultProps = {
// title : 'Heading here...',
// desc : 'description here...'
// }

// Navbar.propTypes = {
// title: propTypes.string,
// desc: propTypes.string

// }


// Validating prop types
// ComponentExample.propTypes = {
//     arrayProp: PropTypes.array,
//     stringProp: PropTypes.string,
//     numberProp: PropTypes.number,
//     boolProp: PropTypes.bool,
// }

// Creating default props
// ComponentExample.defaultProps = {

//     arrayProp: ['Ram', 'Shyam', 'Raghav'],
//     stringProp: "GeeksforGeeks",
//     numberProp: "10",
//     boolProp: true,
// }

