import React from "react";
import TextButton from "./TextButton";
import ExportIcon from "../assets/icons/export.svg";
import "../styles/Article.css"

const truncate = (str) => {
    return str.length > 300 ? str.substring(0,297) + "..." : str;
}

const Article = (props) => {

    const handleClick = (event, readMoreLink) => {
    event.preventDefault();
    // Open the read more link in a new window or tab
    window.open(readMoreLink, 'blank');
    }

    return (
        <div className="article-container">
            <div className="article-desc">
                <p className="article-title">{props.title}</p>
                <div className="article-date-details">
                    <div className="dot"></div>
                    <p className="article-date">{ props.postTime }</p>
                </div>
            </div>
            <img className="article-illustration" src={props.image} alt="article-illustration" />
            <p className="article-body">{ props.short === true ? truncate(props.description) : props.description } </p>
            <TextButton href={props.readMoreLink} onClick={(e) => handleClick(e, props.readMoreLink)} label="View More" icon={ExportIcon} />
        </div>
    )
}

export default Article;