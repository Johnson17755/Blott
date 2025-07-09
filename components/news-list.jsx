"use client";

import NewsCardMobile from "./news-cards-mobile";

export default function NewsListMobile({ articles, onArticleClick }) {
  return (
    <div className="md:hidden space-y-4">
      {articles.map((article, index) => (
        <NewsCardMobile
          key={index}
          article={article}
          onClick={onArticleClick}
        />
      ))}
    </div>
  );
}
