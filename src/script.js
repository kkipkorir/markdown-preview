
import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom";
import ReactMarkdown from "https://esm.sh/react-markdown";

const defaultMarkdown = `
# Main Header (H1)

## Sub Header (H2)

[OpenAI](https://www.openai.com) - A link to OpenAI's website.

Here is some \`inline code\` for demonstration.

\`\`\`javascript
// Code block
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`

- List item 1
- List item 2
  - Sub-item 2.1
  - Sub-item 2.2
- List item 3

> This is a blockquote. It’s often used to highlight important information or quotations.

![Placeholder Image](https://via.placeholder.com/150)

**This text is bold.**
`;


class ViewComponents extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:defaultMarkdown,
      onFocused:false,
      isMax:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleOnFocus=this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event){
    this.setState({input:event.target.value});
  } 
  handleOnFocus(){
    this.setState({onFocused:true});
  }
  handleOnBlur(){
    this.setState({onFocused:false});
  }
  handleClick(){
    this.setState(state=>({isMax:!state.isMax}))
  }
  render(){
    const styleTextArea = {
    width: '70%',
     minWidth:'450px',
    height: '200px',
    padding: '10px',
    fontSize: '16px',
    lineHeight: '1.5',
    border: '2px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
    color: '#333',
    display: this.state.isMax?"none":"block",
    outline: 'none',
    resize: 'vertical',
    transition: 'border-color 0.3s ease-in-out',
    }
    const styleTextAreaFocus = {
      borderColor: '#66afe9',
    boxShadow: '0 0 5px rgba(102, 175, 233, 0.5)',
    }
    const previewContainerStyle = {
      width:'80%',
      minWidth:'450px',
  backgroundColor: '#f8f9fa',
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  fontFamily: '"Helvetica", "Arial", sans-serif',
  color: '#333',
  overflowY: 'auto',
  minHeight: '200px',
  maxHeight: 'fit-content',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'pre-wrap',
};
    return(
      <div>
        <textarea id="editor" onChange={this.handleChange} value={this.state.input} style={this.state.onFocused?{...styleTextArea,...styleTextAreaFocus}:styleTextArea} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />
        
        
        <div id="preview-container" style={previewContainerStyle}>
          <div className="button-container">
            <button>{this.state.isMax?"minimize":"maximize"}</button>
          </div>
          <div id="preview">
          <ReactMarkdown>{this.state.input}</ReactMarkdown>
           </div>
        </div>
        <p style={{textAlign:"center"}} ><i><a target="_blank" href="https://www.linkedin.com/in/kelvin-kipkorir-a89a651b8">By Kkipkorir</a></i></p>
      </div>
    )
  }
}
ReactDOM.render(<ViewComponents/>,document.getElementById('root'));