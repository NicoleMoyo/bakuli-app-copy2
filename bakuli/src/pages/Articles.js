import React, { useState } from 'react';
// import "../styles/Articles.css";
import Article from '../components/Article';



// const Article = (props) => {
//   const handleClick = (event, readMoreLink) => {
//     event.preventDefault();
//     // Open the read more link in a new window or tab
//     window.open(readMoreLink, 'blank');
//   }

//   return (
//     <div className="article">
//       <p className="article-time">{props.postTime}</p>
//       <h2 className="article-title">{props.title}</h2>
//       <p className="article-description">{props.description}</p>
//       <a href={props.readMoreLink} onClick={(e) => handleClick(e, props.readMoreLink)}>Read more</a>
//     </div>
//   );
// }


// const readMoreLink = () => {
//   return (
//   <div className="read-more-page">
//   <h1>Article Title</h1>
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//   </div>
//   );
//   }

// const url = 'https://newsapi.org/v2/top-headlines?' + 
//             'category=health&' +
//             'q=health& OR "heath tips"& OR nutrition& OR fitness& OR skincare&' +
//             'pageSize=10&' +
//             'apiKey=800bbab699b046b8a5f2e8fb05c86ae4'
//             ;

const url = 'https://newsapi.org/v2/everything?' + 
            'q=health& AND nutrition& AND fitness& AND skincare& AND diet& AND nutrient&' +
            'searchIn=title&' +
            'domains=news-medical.net, healthline.com, sharecare.com, medicalnewstoday.com, everydayhealth.com, healthblog.uofmhealth.org' +
            'pageSize=10&' +
            'apiKey=800bbab699b046b8a5f2e8fb05c86ae4'
            ;

// const url = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=800bbab699b046b8a5f2e8fb05c86ae4'
const getArticles = async () => {
    const req = new Request(url);

    try {
        const res = await fetch(req);
        return await res.json();
    } catch (error) {
        console.log(error);
    }

}

const renderArticles = async () => {
    const articles = await getArticles();
    articles.map(article => (
        console.log(article)
    ))
}

renderArticles();

// const req = new Request(url);
// var articles;
// fetch(req)
// .then((res) => {
//     console.log(res.json());
//     articles = res.body
// }) 
// console.log(articles);

const Articles = () => {
const [searchTerm, setSearchTerm] = useState("");
const articles = [
    {
    postTime: "2 hours ago",
    title: "Everything Nutrition",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    readMoreLink: "/article/1"
    },
    {
    postTime: "3 days ago",
    title: "Nails, Hair and Health",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readMoreLink: "/article/2"
    },
    {
    postTime: "1 week ago",
    title: "Nutrients and Supplements",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    readMoreLink: "/article/3"
    }
    ];

const filteredArticles = articles.filter(article => {
return article.title.toLowerCase().includes(searchTerm.toLowerCase());

    //   filteredArticles.map(article => {
    //     return (
    //       <Article
    //         postTime={article.postTime}
    //         title={article.title}
    //         description={article.description}
    //         readMoreLink={article.readMoreLink}
    //       />
    //     );
    //   })
})

// api key = 800bbab699b046b8a5f2e8fb05c86ae4

  const handleSearch = (event) => {
  setSearchTerm(event.target.value);
  }
  
  return (
  <div className="app">
  <h1>Recent Articles</h1>
  <div className="article-container">
  <input type="text" placeholder="Search articles..." onChange={handleSearch} />
  {filteredArticles.map(article => {
  return (
    <Article
        postTime={article.postTime}
        title={article.title}
        description={article.description}
        readMoreLink={article.readMoreLink}
        short={true}
    />
  );
  })}
  </div>
  </div>
  );
  }



//   export default Articles;
