import "./Cardboard.css";
import React, {Component} from "react";
import rules from "./config/rules"

function readRules(){
  let ruleLevelID = this.props.level;
  this.setState({
      nbCard: rules.level.levelId.numberOfCard
  });
}


export default class Cardboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            defaultLevel: 1,
            nbCard: 16,
            isTime: false,
            isLife: false
        };
    }

    static defaultProps = {
        background: "grey"
    }

    render() {
        return(
            <div level={this.props.level}>
                <p>Il y à {this.state.nbCard} carte(s)</p>
                <div id={this.props.id}
                    className={this.props.className}>
                    <img alt={this.props.alt}
                        src={this.props.img}>
                    </img> 
                </div>
            </div>
        );
    }
}
