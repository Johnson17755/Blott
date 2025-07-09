"use client";

import Header from "@/components/header";
import LoadingState from "@/components/loading";
import ErrorState from "@/components/error-state";
import NewsListMobile from "@/components/news-list";
import NewsGridDesktop from "@/components/news";
import EmptyState from "@/components/empty-state";
import { useNews } from "@/hook/use-news";

export default function Home() {
  const { articles, loading, error, refetch } = useNews();

  const handleArticleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={refetch} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="px-4 md:px-6 pb-6">
        <NewsListMobile
          articles={articles}
          onArticleClick={handleArticleClick}
        />

        <NewsGridDesktop
          articles={articles}
          onArticleClick={handleArticleClick}
        />

        {articles.length === 0 && !loading && <EmptyState />}
      </main>
    </div>
  );
}
