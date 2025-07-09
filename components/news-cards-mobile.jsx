"use client";

import Image from "next/image";

export default function NewsCardMobile({ article, onClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .toUpperCase();
  };

  return (
    <article
      onClick={() => onClick(article.url)}
      className="flex gap-3 cursor-pointer hover:bg-gray-900 p-2 rounded-lg transition-colors"
    >
      <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.headline}
          fill
          sizes="80px"
          priority
          className="object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-400 text-xs uppercase font-medium">
            {article.source}
          </span>
          <span className="text-gray-500 text-xs">
            {formatDate(article.datetime)}
          </span>
        </div>
        <h2 className="text-white text-sm font-medium leading-tight line-clamp-3">
          {article.headline}
        </h2>
      </div>
    </article>
  );
}
