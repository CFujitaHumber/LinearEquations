
"use client";
import PropTypes, { func } from 'prop-types'
import styles from './Graph.module.css'
import { use, useState } from 'react'
import Slider from '../Slider/Slider';
import Vector from './vector';
import SimpleGraph from '../SimpleGraph/SimpleGraph';
import { Port_Lligat_Sans } from 'next/font/google';

/**
 * Plots a Graph
 * @param {Graph.propTypes} props 
 * @returns a graph
 */
function Graph(props){
    return (
        <div className={styles.container}>
             < SimpleGraph
                rise = {props.rise}
                run = {props.run}
             /> 
            <div className={styles.controlPanel}>
                <Slider 
                    label={"Rise"}
                    value={props.rise}
                    min={-4}
                    max={4}
                    step={1}
                    description={"Change the rise of the linear system"}
                    onChange={props.setRise}
                />
                <Slider 
                    label={"Run"}
                    value={props.run}
                    min={-4}
                    max={4}
                    step={1}
                    description={"Change the run of the linear system"}
                    onChange={props.setRun}
                />
            </div>
        </div>
    )
}

Graph.propTypes = {
    rise: PropTypes.number.isRequired,
    setRise: PropTypes.func.isRequired,

    run: PropTypes.number.isRequired,
    setRun: PropTypes.func.isRequired
}

export default Graph;