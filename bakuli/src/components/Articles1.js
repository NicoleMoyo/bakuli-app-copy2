import React, { useEffect, useState } from "react";
import Article from '../components/Article';
import { FormControl, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "../assets/icons/search-normal.svg"
import Navbar from "./Navbar";
// 800bbab699b046b8a5f2e8fb05c86ae4
// 7344e4f238454198a0ce0b656d026654
const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const url = 'https://newsapi.org/v2/everything?' + 
            'q=health& AND nutrition& AND fitness& AND skincare& AND diet& AND nutrient&' +
            'searchIn=title&' +
            'domains=news-medical.net, healthline.com, sharecare.com, medicalnewstoday.com, everydayhealth.com, healthblog.uofmhealth.org,verywellfit.com' +
            'pageSize=10&' +
            'apiKey=7344e4f238454198a0ce0b656d026654'
            ;

    const getArticles = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        console.log(data);

    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        getArticles()
    },[])

    const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div>
        <Navbar />
        <div className="articles-render">
        {/* <input type="text" placeholder="Search articles..." onChange={handleSearch} /> */}
                    <FormControl 
                    variant="outlined" 
                    size="small" 
                    className="search-input"
                    >
                        <InputLabel htmlFor="search">Search articles...</InputLabel>
                        <OutlinedInput 
                        id="search"
                        name="search" 
                        onChange={handleSearch}
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="search icon"
                                edge="end"
                                >
                                    <img src={SearchIcon} alt="search"/>
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
        {filteredArticles.length > 0 && (
            <>
            {filteredArticles.map((article, index) => (
                <Article 
                    key={index}
                    postTime={article.publishedAt}
                    title={article.title}
                    description={article.content}
                    image={article.urlToImage}
                    readMoreLink={`/dashboard/healthspace/${index}`}
                    short={true}
                />
                ))}
            </>
            )}
        </div>
        </div>
    )
}

export default Articles;