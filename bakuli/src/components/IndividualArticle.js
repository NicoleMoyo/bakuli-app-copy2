import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "../assets/icons/arrow-left.svg";
import "../styles/Article.css"
import { useNavigate } from "react-router-dom";
import TextButton1 from "./TextButton1";
import Navbar from "./Navbar";




const IndividualArticle = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard/healthspace");
    }
    const article = {
        publishedAt: "2022-12-09T23:15:32Z",
        title: "Heart Health: The Benefits of Yoga Plus Exercise - Healthline",
        content: <><ul><li>Researchers say yoga combined with regular exercise is more beneficial than stretching.</li><li>Experts say yoga can boost immunity, increase flexibility, and reduce anxiety, among other benefits.</li><li>They say yoga can be strenuous, so it’s best to consult with a medical professional before starting a regular routine.</li></ul><p>When added to an exercise regimen, yoga is more effective than stretching at supporting cardiovascular health and well-being, according to a study published today in the Canadian Journal of Cardiology.Researchers recruited 60 individuals previously diagnosed with high blood pressure and metabolic syndrome for the study.The scientists divided the participants into two groups. One group completed structured yoga for 15 minutes and then 30 minutes of aerobic exercise. The other group completed stretching exercises with 30 minutes of aerobic exercise.Both groups exercised five times per week.</p><h3>What researchers discovered about yoga and exercise</h3><p>At the start of the study, both groups had blood pressure, anthropometry, high-sensitivity c-reactive protein, glucose, and lipid levels measured.All the participants received Framingham and Reynolds Risk scores.There was no difference between the groups in terms of age, sex, smoking rates, body mass index (BMI), mean arterial blood pressure, heart rate, and pulse pressure.At the end of the three months, the researchers noted:A decrease of 10 mmHg in blood pressure in the group completing yoga and aerobic exercises compared to 4 mmHg in the group completing stretching exercises and aerobic exercises.Both groups saw decreases in resting systolic and diastolic blood pressure, mean arterial blood pressure, and heart rate.The group completing yoga and aerobic exercises reduced their resting heart rate and 10-year cardiovascular risk, assessed using the Reynolds Risk score."</p></>,
        urlToImage: "https://post.healthline.com/wp-content/uploads/2022/12/yoga-class-732x549-thumbnail.jpg"
    }

    return (  
        <>
        <Navbar />  
        <div className="individual-article">       
        <TextButton1  onClick={handleClick} label="Back To Articles" icon={ArrowLeftIcon} />
        {/* // <Article 
        //     key={0}
        //     postTime={article.publishedAt}
        //     title={article.title}
        //     description={article.content}
        //     image={article.urlToImage}
        //     readMoreLink={`/article/0`}
        //     short={false}
        //     button={false}
        // /> */}
            <div className="article-container">
            <div className="article-desc">
                <p className="article-title">{article.title}</p>
                <div className="article-date-details">
                    <div className="dot"></div>
                    <p className="article-date">{article.publishedAt}</p>
                </div>
            </div>
            <img className="article-illustration" src={article.urlToImage} alt="article-illustration" />
            <p className="article-body">{article.content} </p>

        </div>
        </div> 
        </>
    )

}

export default IndividualArticle;