"use client";
/**
 * @file Scroll Indicator javascript
 * @author Carson Fujita
 * @copyright Carson Fujita, 2025
 */
import PropTypes from "prop-types";
import React, { Component } from "react";

//CSS
import styles from './ScrollIndicator.module.css';

class ScrollIndicator extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrolled: (50/100) *100 //amount scrolled
        };
    }

    /* runs on load */
    componentDidMount = () => {
        window.addEventListener('scroll', this.refreshIndicator);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.refreshIndicator);
    }


    refreshIndicator = () => {
        const newScroll =  {
            scrolled: ( 
                (document.body.scrollTop || document.documentElement.scrollTop) //pixels scrolled from top
                / 
                (document.documentElement.scrollHeight - document.documentElement.clientHeight) //pixel hieght of window
            ) * 100, //amount scrolled
        };
        this.setState({
            scrolled: newScroll.scrolled
        });
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.indicator} style={{width: `${this.state.scrolled}%`}}> 
                </div>
            </div>
        )
    }
}

export default ScrollIndicator;