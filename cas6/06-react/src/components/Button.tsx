import React, { Component } from "react";

interface Props {
  naslov: string,
  clicked: Function
}

interface State {
  selected: boolean,
  color: string
}
class MyButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state ={
      selected:true,
      color:'#ff0000'
    }
  }
  render() {
    return (
      <button style={{backgroundColor:this.state.color}} onClick={() => this.props.clicked(this.props.naslov)}>{this.props.naslov}</button>
    );
  }

  setColor(){
    this.setState({color: '#00ff00'})
  }
}

export default MyButton;