import React from "react";

const styles = {
    images: {
        float: "left",
        marginRight: "60px",
        marginBottom: "50px",
        border: "1px solid #2A3132",
        borderRadius: "3px",
        padding: "4px",
        boxShadow: "2px 2px 10px #888888",
    }
}

const Animal = props => (
    <div style={styles.images} className="img-container">
        <img alt={props.alt} src={require("../images/" + props.image)} onClick={() => props.handleClick(props.id)} />
    </div>
);

export default Animal;

