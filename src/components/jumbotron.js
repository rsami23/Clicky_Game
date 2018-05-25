import React from "react";

const styles = {
    heading: {
        color: "white",
        textAlign: "center",
    },
    tron: {
        borderRadius: "0",
        backgroundColor: "#324851",
    }
};

const Jumbotron = () => (
    <div style={styles.tron} className="jumbotron">
        <h2 style={styles.heading}>Click an Image to begin!</h2>
        <h3 style={styles.heading}>Click on an image to earn points, but don't click on an image more than once or you will LOSE!</h3>
        
    </div>
);

export default Jumbotron;