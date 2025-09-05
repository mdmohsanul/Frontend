import React from 'react'
type Props = {
    params:Promise<{articleId:string}>
    searchParams:Promise<{lang? : "en" | "fr" | "es"}>
}
const NewsArticle = async({params,searchParams}:Props) => {
    const {articleId} =await params
    const {lang="en"} =await searchParams
console.log(articleId)
  return (
    <div>
        <h1>News Article {articleId}</h1>
        <p>Reading in {lang}</p>

    </div>
  )
}

export default NewsArticle