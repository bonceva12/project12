import { useState } from "react";

const Main = () => {
    // const [ticket, setTicket] = useState("")
    
    
    // const [counter, setCounter] = useState(0)

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([]);
    

    return (
        // <div className="main"
        // style={{
        //     background: 
        //     ticket == "KIV - OR" ? "url(https://media.publika.md/md/image/202001/full/38880944_1807592655942970_8572627192352079872_o_08315300.jpg)"
        //     :
        //     ticket == "KIV - BL" ? "url(https://upload.wikimedia.org/wikipedia/commons/9/9f/Gara_Slobozia_din_B%C4%83l%C5%A3i.jpg)"
        //     :
        //     "URL(https://i.simpalsmedia.com/point.md/news/thumbnails/large/f387f31e7b45702dc4dae0a5491c3252.jpg)",
        //     height: "600px"


        // }}
        // >
            
        //     <h1>GaraDiNord.md</h1>
        //     <button onClick={() => setTicket("KIV - OR")}>Chisinau - Orhei</button>
        //     <button onClick={() => setTicket("KIV - BL")}>Chisinau - Balti</button>
        //     <button onClick={() => setTicket("BL - KIV")}>Balti - Chisinau</button>
        //     <button onClick={() => setTicket("OR - KIV")}>Orhei - Chisinau</button>
        //     <p>Your Ticket: {ticket}</p>
        // </div>
        
        
        
        
        <div className="Main">
            {/* <h1 style={{
                color: counter > 0 ? "green" : counter < 0 ? "red" : "black"
            }}>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(Math.round(Math.random() * 100))}>Random</button>
            <button onClick={() => setCounter(0)}>Reset</button>  */}



            <input type="text" placeholder="Task.." value={task} onChange={(event) => {
                setTask(event.target.value)}}/>
                <button onClick={() => {
                    setTodos([...todos, task])
                }}>Add todo</button>
                {
                    todos.map(todo => (
                        <div>{todo}</div>
                    ))
                }
        </div>
    )
}

export default Main;