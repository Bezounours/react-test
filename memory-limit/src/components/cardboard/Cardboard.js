import "./Cardboard.css";
import React, {Component} from "react";
import rules from "../../config/rules";

export default class Cardboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            levelID: 1,
            nbCard: 16,
            isTime: false,
            isLife: false
        };
    }
    
    componentDidMount(){
        let selectedLevel = this.props.level;
        let amountOfCard = rules.level[selectedLevel || this.state.levelID].numberOfCard;
        this.setState({
            levelID: selectedLevel,
            nbCard: amountOfCard
        });
    }

    static defaultProps = {
        background: "grey"
    }

    render() {
        return(
            <div>
                <p>Vous avez choisi le niveau: {this.state.levelID}</p>
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
