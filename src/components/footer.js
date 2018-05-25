import React from "react";

const styles = {
    footer: {
        background: "#86AC41",
        display: "flex",
        bottom: "0",
        width: "100%",
        marginTop: "40px",
        justifyContent: "center",
    },
    p: {
        marginTop: "10px",
        color: "white",
    }
}

const Footer = () => (
    <footer style={styles.footer} className="footer">
        <p style={styles.p}>© 2018 Acevedo</p>
    </footer>
);

export default Footer;