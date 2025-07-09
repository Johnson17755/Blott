"use client";

import NewsCardDesktop from "./news-cards-desktop";

export default function NewsGridDesktop({ articles, onArticleClick }) {
  return (
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {articles.map((article, index) => (
        <NewsCardDesktop
          key={index}
          article={article}
          onClick={onArticleClick}
        />
      ))}
    </div>
  );
}
