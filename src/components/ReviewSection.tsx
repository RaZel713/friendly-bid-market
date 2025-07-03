
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MessageSquare } from "lucide-react";

const ReviewSection = () => {
  const receivedReviews = [
    {
      id: 1,
      reviewer: "익명B",
      rating: 5,
      comment: "친절하고 포장도 잘 해주셨어요! 다음에도 거래하고 싶습니다.",
      date: "2024-01-15",
      product: "MacBook Pro 2021"
    },
    {
      id: 2,
      reviewer: "익명C",
      rating: 4,
      comment: "빠른 응답 감사합니다~ 상품 상태도 설명과 같았어요.",
      date: "2024-01-10",
      product: "무선 이어폰"
    },
    {
      id: 3,
      reviewer: "익명A",
      rating: 5,
      comment: "매우 만족스러운 거래였습니다. 신뢰할 수 있는 판매자에요!",
      date: "2024-01-05",
      product: "아이패드"
    }
  ];

  const sentReviews = [
    {
      id: 1,
      recipient: "익명D",
      rating: 5,
      comment: "좋은 상품 감사합니다. 잘 사용하겠어요!",
      date: "2024-01-12",
      product: "카메라 렌즈"
    },
    {
      id: 2,
      recipient: "익명E",
      rating: 4,
      comment: "배송이 조금 늦었지만 상품은 만족스러워요.",
      date: "2024-01-08",
      product: "스마트워치"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>후기 관리</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="received" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="received">받은 후기 ({receivedReviews.length})</TabsTrigger>
            <TabsTrigger value="sent">남긴 후기 ({sentReviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="received" className="space-y-4 mt-6">
            {receivedReviews.map((review) => (
              <div key={review.id} className="p-4 border rounded-lg bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{review.reviewer.slice(0, 1)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-black">{review.reviewer}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <div className="text-sm text-gray-500">상품: {review.product}</div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="sent" className="space-y-4 mt-6">
            {sentReviews.map((review) => (
              <div key={review.id} className="p-4 border rounded-lg bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{review.recipient.slice(0, 1)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-black">{review.recipient}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <div className="text-sm text-gray-500">상품: {review.product}</div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ReviewSection;
