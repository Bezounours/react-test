import "./Card.css";
import React, {Component} from "react";

export default class Card extends Component {

    static defaultProps = {
        className: "card"
    }

    render() {
        return(
            <div id={this.props.id}
                 className={this.props.className}>
                <img alt={this.props.alt}
                     src={this.props.img}>
                </img> 
            </div>
        );
    }
}

