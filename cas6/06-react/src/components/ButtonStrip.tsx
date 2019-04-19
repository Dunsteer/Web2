import React, { Component } from "react";
import MyButton from "./Button";

interface Props {
  titles: string[]
}

interface State {
  selected:boolean
}

class ButtonStrip extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: true
    }
  }
  render() {
    return (
      <div>
      {this.props.titles.map((x, i)=> <MyButton key={i} naslov={x} clicked={(naslov:any)=>this.setState({selected:naslov})}></MyButton>)}
      Selektovano: {this.state.selected}
      </div>
    )
  }
}

export default ButtonStrip;