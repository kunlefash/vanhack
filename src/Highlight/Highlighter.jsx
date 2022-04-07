import {useState} from "react";
import "./highlighter.css"


const escapeRegExp = (str = '') => (
  str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
);

const HighlightThis = ({ query = '', children = '' }) => {
  const Querychunk = new RegExp(`(${escapeRegExp(query)})`, 'i');
  const splitQuery = String(children).split(Querychunk);

  if (query) {
    return splitQuery.map((part, index) => (
      Querychunk.test(part) ? <mark key={index}>{part}</mark> : part
    ));
  } else {
    return children;
  }
};


function Highlighter(){
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  
  return(
    <div className="highlight">
      <textarea data-testid="source-text" onChange={(e) => {setText(e.target.value)}}/>
      <input data-testid="search-term" placeholder="Search" onChange={e=>setQuery(e.target.value)} />
      <input type="checkbox"  data-testid="case-sensitive" />

      <HighlightThis query={query} children={text} />
    </div>
  )
  
}
export default Highlighter;
