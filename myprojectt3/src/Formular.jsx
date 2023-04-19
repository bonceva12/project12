import { useRef, useState } from "react"
import "./formularcss.css"

function Form() {
    const nameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const modelRef = useRef();
    const combustibilRef = useRef();
    const culoareaRef = useRef();
    const anfabricatieRef = useRef();

    
    const [submit, setSubmit] = useState(false)
    
    const formSubmitt = () => {
        console.log(nameRef.current.value);
        console.log(lastnameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
        console.log(modelRef.current.value);
        console.log(combustibilRef.current.value);
        console.log(culoareaRef.current.value);
        console.log(anfabricatieRef.current.value);

        setSubmit(true);
    }

return(
    <>
    <div style={{
        display: !submit ? "block" : "none"
    }}>
          <h1>Formular</h1>
          <input placeholder="Nume" ref={nameRef} />
          <br />
          <input placeholder="Prenume" ref={lastnameRef}/>
          <br />
          <input type="email" placeholder="Email" ref={emailRef}/>
          <br />
          <input type="phone" placeholder="Phone" ref={phoneRef}/>
          <br />
          <input placeholder="model" ref={modelRef}/>
          <br />
          <input placeholder="combustibil" ref={combustibilRef}/>
          <br />
          <input placeholder="culoarea" ref={culoareaRef}/>
          <br />
          <input placeholder="anfabricatie" ref={anfabricatieRef}/>
          <br />
          <button onClick={()=>formSubmitt() }>Primeste nimic</button>
    </div>
    <div style={{
        display: submit ? "block" : "none"
    }}>
        <p> Multumesc pentru inregistrare</p>
        <img src="https://cdn.shopify.com/s/files/1/0520/4158/0707/collections/bmw-g30-g38-5-series_600x600_crop_center.jpg?v=1668659049" alt="" />
        
    </div>
    </>
        )
    }

export default Form;