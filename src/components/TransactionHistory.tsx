
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Gavel, Clock, CheckCircle2, XCircle } from "lucide-react";

const TransactionHistory = () => {
  const myAuctions = [
    {
      id: 1,
      title: "MacBook Pro 2021 M1",
      status: "completed",
      finalPrice: 330000,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "미개봉 무선 이어폰",
      status: "ongoing",
      currentPrice: 72000,
      image: "/placeholder.svg"
    }
  ];

  const myBids = [
    {
      id: 1,
      title: "한정판 피규어 세트",
      status: "failed",
      myBid: 150000,
      finalPrice: 180000,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "애플워치 Series 8",
      status: "bidding",
      myBid: 250000,
      currentPrice: 280000,
      image: "/placeholder.svg"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle2 className="w-3 h-3 mr-1" />낙찰 완료</Badge>;
      case 'ongoing':
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="w-3 h-3 mr-1" />진행 중</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />낙찰 실패</Badge>;
      case 'bidding':
        return <Badge className="bg-yellow-100 text-yellow-800"><Gavel className="w-3 h-3 mr-1" />입찰 중</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="w-5 h-5" />
          <span>거래 내역</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="my-auctions" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-auctions">내가 등록한 경매</TabsTrigger>
            <TabsTrigger value="my-bids">내가 입찰한 상품</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-auctions" className="space-y-4 mt-6">
            {myAuctions.map((auction) => (
              <div key={auction.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-black">{auction.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {getStatusBadge(auction.status)}
                    <span className="text-sm text-gray-600">
                      {auction.status === 'completed' 
                        ? `${auction.finalPrice?.toLocaleString()}원`
                        : `현재가 ${auction.currentPrice?.toLocaleString()}원`
                      }
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="my-bids" className="space-y-4 mt-6">
            {myBids.map((bid) => (
              <div key={bid.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src={bid.image} 
                  alt={bid.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-black">{bid.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {getStatusBadge(bid.status)}
                    <span className="text-sm text-gray-600">
                      내 입찰가: {bid.myBid.toLocaleString()}원
                    </span>
                    {bid.status === 'bidding' && (
                      <span className="text-sm text-gray-500">
                        (현재가: {bid.currentPrice?.toLocaleString()}원)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
