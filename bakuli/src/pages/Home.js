import React, { useState, useEffect } from "react";

function Home() {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => setText(data.text));
    }, []);

    return (
        <div className="App">
        <h1>{text}</h1>
        </div>
    );
}

export default Home;