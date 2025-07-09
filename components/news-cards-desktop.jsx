"use client";

import Image from "next/image";

export default function NewsCardDesktop({ article, onClick }) {
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
      className="cursor-pointer hover:bg-gray-900 rounded-lg transition-colors overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.headline}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
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
