
//creating a draft for git hub
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    return (
      <div>
      <h1>Hello,</h1>
      <h2>{this.state.date.toLocaleTimeString()}</h2>
       </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);



/*text box is created and the value is populated below on change value */
class Inputbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:""};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  render(){
    return(<div>
      <h1>type in box</h1>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <h1>{this.state.value}</h1>
      </div>
    )
  }
}

root.render(<Inputbox/>);