import backgroundColors from "./consts";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


interface LegendProps {
    labels: string[];
}

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    legendItem: {
        display: 'flex',
        alignItems: 'baseline',
        marginTop: '7px'
    },
    marker: {
        width: '20px',
        height: '15px',
        flex: '0 0 20px',
        marginRight: '10px',
        position: 'relative',
        top: '3px'
    }
});


const Legend = (props: LegendProps) => {
    const styles = useStyles();
    const legendList = props.labels.map((label: string, index: number) => {
        return (
            <li className={styles.legendItem} key={index}>
                <span className={styles.marker} style={{backgroundColor: backgroundColors[index]}}></span>
                <span>{label}</span>
            </li>
        );
    });
    return(
        <ul className={styles.root}>
            {legendList}
        </ul>
    )
}

export default Legend;
