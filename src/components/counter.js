import React from "react";

const styles = {
    navStyle: {
        background: "#86AC41",
        boxShadow: "0px 3px 10px #292929",
    },
    h1: {
        color: "white",
        fontWeight: "bold",
        marginRight: "1050px",
    },
    score: {
        color: "white",
    },
    content: {
        display: "inline-block",
        textAlign: "center",
    }
};

const Counter = props => (
    <div className="fluid sticky-top">
        <nav style={styles.navStyle} className="navbar navbar-expand-lg">
            <ul>
                <li style={styles.content}><h1 style={styles.h1}>Clicky Match Game</h1></li>
                <li style={styles.content}><h1 style={styles.score}>Score: {props.count}</h1></li>    
            </ul>
        </nav>
    </div>
);   

export default Counter;

