import { Button } from "bootstrap";


function Assistido(props) {
    return (
     <button className="btn btn-primary">
        {
            props.assistido ? "Assistir Novamente": "Assistir"
        }
     </button> 
     
    );
  }
  
  export default Assistido;