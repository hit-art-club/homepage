"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Calendar, Tag, User } from "lucide-react";

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image?: string;
};

export function News({ items }: { items: NewsItem[] }) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">ニュース</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((news) => (
            <Card key={news.id} className="overflow-hidden">
              <div className="aspect-video relative">
                {news.image && (
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <Badge>{news.category}</Badge>
                <CardTitle>{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{news.content}</CardDescription>
                <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(news.date).toLocaleDateString("ja-JP")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {news.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
