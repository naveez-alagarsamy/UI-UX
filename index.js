
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




