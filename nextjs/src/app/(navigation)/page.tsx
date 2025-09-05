import Link from 'next/link'
import React from 'react'

const NavigationPage = () => {
  return (
    <div>
        <h1>
        Navigation Page

        </h1>

        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        <Link href="/articles/breaking-news-123?lang=sp">Read in Spanish</Link>

        </div>

  )
}

export default NavigationPage