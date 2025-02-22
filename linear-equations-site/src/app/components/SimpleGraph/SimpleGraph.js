"use client";

import styles from "./SimpleGraph.module.css";
/**
 * style of axis lines of graph
*/
const AXIS = {
    stroke: "#000000", //black
    strokeWidth: 1 
};

/**
 * style of graph lines
 */
const GRAPH_LINES = {
    stroke: "#6e6e6e", //grey
    strokeWidth: 0.5
}

/**
 * Width in pixels
 */
const WIDTH = 300;

/**
 * Height in pixels
 */
const HEIGHT = 300;

/**
 * Number of rows in graph
 */
const NUMBER_ROWS = 8;

/**
 * Number of columns in graph
 */
const NUMBER_COLUMN = 8;

/**
 * Spacing in px of text in graph
 */
const TEXT_SPACING = 2;

/**
 * Center Point of Graph
 */
const CENTER_POINT = [WIDTH/2, HEIGHT/2];

/**
 * Minimum x value on the graph
 */
const GRAPH_MIN_X = 0-NUMBER_ROWS/2;

/**
 * Maximum x value on graph
 */
const GRAPH_MAX_X = NUMBER_ROWS/2;

/**
 * Creates a simple graph of a linear system of Y=MX containing no y-intercept.
 * @param {{rise: number, run: number}} param0 
 * @returns 
 */
function SimpleGraph({rise = 0, run = 0}){

    const slope = rise/run;

    //Create rows
    const graphBackground = [];
    var increment = 0;

    /**
     * converts y graph values to y svg values
     * @param {number} yPosition the y value on the graph
     * @returns the y value on the svg
     */
    function getY(yPosition){
        yPosition = NUMBER_ROWS/2 - yPosition;
        return HEIGHT / NUMBER_ROWS * yPosition;
    }

    /**
     * converts x graph values to x svg values
     * @param {number} xPosition  the x value on graph
     * @returns the x value on svg
     */
    function getX(xPosition){
        xPosition = xPosition + NUMBER_COLUMN/2
        return HEIGHT / NUMBER_COLUMN * xPosition;
    }
    
    /**
     * Creates the line on the graph.
     * @returns The line of the linear system
     */
    function makeLine(){
        if(run == 0){
            return <line 
                key={"line"}
                x1={WIDTH/2} y1={0} 
                x2={WIDTH/2} y2={HEIGHT}
                style={{stroke: "#00ff44", strokeWidth: 1.5}} 
            /> 
        } else if (rise == 0){
            return <line 
                key={"line"}
                x1={0} y1={WIDTH/2} 
                x2={WIDTH} y2={WIDTH/2}
                style={{stroke: "#00ff44", strokeWidth: 1.5}} 
            /> 
        }
        const x1 = getX(GRAPH_MIN_X);//start
        const y1 = getY(slope*(GRAPH_MIN_X));

        const x2 = getX(GRAPH_MAX_X);
        const y2 = getY(slope*(GRAPH_MAX_X));


        return <line
            key={"line"}
            x1={x1} y1={y1}
            x2={x2} y2={y2}
            style={{stroke: "#00ff44", strokeWidth: 1.5}}
        />
    }


    //GRAPH making

    //the linear system
    const line = makeLine();


    //the rows of the graph. we shifted the values so that the rows start with values at negative. 
    for (let row = 0-NUMBER_ROWS/2 /*start with values at negative.*/; row <= NUMBER_ROWS/2; row++) {        
        increment = getY(row); //convert to svg coordinates
        
        graphBackground.push(
            <line 
                key={"row"+row}
                x1={0} y1={increment} 
                x2={WIDTH} y2={increment} 
                style={(increment == CENTER_POINT[1] ? AXIS: GRAPH_LINES )}
            />
        );

        //add text for points
        graphBackground.push(
            <text
                key={"row-point"+row} 
                x={CENTER_POINT[1]+TEXT_SPACING}  //spacing so they can be read/not overlapping lines
                y={increment-TEXT_SPACING} 
                fill={"red"}
                fontSize={12}
            >
                {row}
            </text>
        )
    } 


    //creating the columns. Same thing as before. the values are skewed to start at negatives
    for (let columns = 0-NUMBER_ROWS/2; columns <= NUMBER_COLUMN/2; columns++) {
        increment = getX(columns);    // convert to svg coordinates

        graphBackground.push(
            <line 
                key={"column"+columns}
                x1={increment} y1={0} 
                x2={increment} y2={HEIGHT} 

                style={(increment == CENTER_POINT[0] ? AXIS: GRAPH_LINES )} //changes color of line if the line is in the center of graph
            />
        );

        //add text
        graphBackground.push(
            <text 
                key={"column-point"+columns} 
                x={increment+TEXT_SPACING} 
                y={CENTER_POINT[0]-TEXT_SPACING} 
                fill={"red"}
                fontSize={12}
   
            >
                {columns}
            </text>
        )
    }  
    return (
        <div className={styles.container}>
            <svg width={WIDTH} height={HEIGHT} xmlns={"http://www.w3.org/2000/svg"}>
                {graphBackground}
                {line}
            </svg>
        </div>
    )
}

export default SimpleGraph;