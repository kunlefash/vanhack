import {useState} from "react";
import "./highlighter.css"

function Highlighter(){
  const [query, setQuery] = useState("")
  console.log(query)
  
  return(
    <div className="highlight">
      <textarea data-testid="source-text"/>
      <input data-testid="search-term" placeholder="Search" onChange={e=>setQuery(e.target.value)} />
      <input type="checkbox"  data-testid="case-sensitive" />
    </div>
  )
  
}
export default Highlighter;
