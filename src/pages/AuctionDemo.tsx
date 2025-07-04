
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Clock, TrendingUp, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from '@/components/Header';

const AuctionDemo = () => {
  const navigate = useNavigate();
  const [currentPrice, setCurrentPrice] = useState(200000);
  const [userBid, setUserBid] = useState(220000);
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds
  const [bidHistory, setBidHistory] = useState([
    { bidder: "익명A", amount: 200000, time: "3분 전" },
    { bidder: "익명B", amount: 210000, time: "2분 전" },
    { bidder: "익명C", amount: 215000, time: "1분 전" },
  ]);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAuctionEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isAuctionEnded]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBid = () => {
    if (userBid > currentPrice) {
      const newBid = {
        bidder: "나",
        amount: userBid,
        time: "방금 전"
      };
      setBidHistory([newBid, ...bidHistory]);
      setCurrentPrice(userBid);
      setUserBid(userBid + 5000);
      
      // Simulate auction ending after user bids
      setTimeout(() => {
        setIsAuctionEnded(true);
      }, 2000);
    }
  };

  const handleChatDemo = () => {
    navigate('/chat-demo');
  };

  if (isAuctionEnded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="border-green-200 bg-green-50 relative overflow-hidden">
            {/* Tiger Character Animation */}
            <div className="absolute top-4 right-4 z-10">
              <div className="tiger-character animate-bounce">
                <div className="relative w-16 h-16">
                  {/* Tiger Body */}
                  <div className="absolute inset-0 bg-orange-400 rounded-full border-2 border-orange-600">
                    {/* Tiger Stripes */}
                    <div className="absolute top-2 left-2 w-2 h-1 bg-orange-800 rounded-full transform rotate-12"></div>
                    <div className="absolute top-3 right-2 w-2 h-1 bg-orange-800 rounded-full transform -rotate-12"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-2 bg-orange-800 rounded-full transform rotate-45"></div>
                  </div>
                  
                  {/* Tiger Ears */}
                  <div className="absolute -top-2 left-3 w-3 h-3 bg-orange-400 rounded-full border border-orange-600 transform rotate-12"></div>
                  <div className="absolute -top-2 right-3 w-3 h-3 bg-orange-400 rounded-full border border-orange-600 transform -rotate-12"></div>
                  
                  {/* Tiger Face */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    {/* Eyes */}
                    <div className="flex space-x-2 mb-1">
                      <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
                    </div>
                    {/* Nose */}
                    <div className="w-1 h-1 bg-pink-400 rounded-full mx-auto mb-1"></div>
                    {/* Mouth - Happy Expression */}
                    <div className="w-3 h-1 border-b-2 border-black rounded-full"></div>
                  </div>
                  
                  {/* Gavel in Tiger's Hand */}
                  <div className="absolute bottom-0 right-0 gavel-animation">
                    <div className="w-4 h-6 relative">
                      {/* Gavel Handle */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-700 rounded-full"></div>
                      {/* Gavel Head */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-amber-800 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl text-green-800 flex items-center justify-center gap-2">
                🎉 경매 종료!
                <span className="text-sm font-normal text-green-600">낙찰 성공!</span>
              </CardTitle>
              <CardDescription className="text-green-600">
                축하합니다! 믿고에서 첫 거래를 성공하셨습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-800 mb-2">
                  낙찰가: {currentPrice.toLocaleString()}원
                </div>
                <div className="text-green-600">
                  판매자와 채팅이 자동으로 연결됩니다
                </div>
              </div>
              <Button 
                onClick={handleChatDemo}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                채팅방으로 이동하기
              </Button>
              <Button 
                onClick={() => navigate('/')}
                variant="outline" 
                className="w-full"
              >
                메인으로 돌아가기
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* CSS Styles for Tiger Animation */}
        <style jsx>{`
          .tiger-character {
            animation: celebrate 2s ease-in-out infinite;
          }
          
          .gavel-animation {
            animation: gavel-tap 0.8s ease-in-out infinite;
            transform-origin: bottom center;
          }
          
          @keyframes celebrate {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-4px) rotate(-2deg); }
            50% { transform: translateY(-8px) rotate(0deg); }
            75% { transform: translateY(-4px) rotate(2deg); }
          }
          
          @keyframes gavel-tap {
            0%, 100% { transform: rotate(0deg); }
            30% { transform: rotate(-15deg); }
            60% { transform: rotate(5deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost" 
            size="sm"
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            돌아가기
          </Button>
          <h1 className="text-2xl font-bold">모의 경매 체험</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Product Info */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">📸 상품 이미지</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">MacBook Pro 2021 (M1 Pro)</CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>상태: 중고 · 사용감 적음</div>
                    <div>모델명: MacBook Pro 14인치</div>
                    <div>출시년도: 2021년</div>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <Badge variant="outline">시작가: 200,000원</Badge>
                    <Badge variant="outline">즉시가: 350,000원</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Bidding Area */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>입찰하기</CardTitle>
                <div className="flex items-center space-x-1 text-red-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-sm">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium">현재가</Label>
                <div className="text-2xl font-bold text-black">
                  {currentPrice.toLocaleString()}원
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Label htmlFor="bid" className="text-sm font-medium">희망가</Label>
                  <button 
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="relative"
                  >
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                    {showTooltip && (
                      <div className="absolute bottom-5 left-0 bg-black text-white text-xs p-2 rounded w-48 z-10">
                        내가 원하는 입찰 금액입니다. 현재가보다 높아야 입찰이 가능해요.
                      </div>
                    )}
                  </button>
                </div>
                <Input
                  id="bid"
                  type="number"
                  value={userBid}
                  onChange={(e) => setUserBid(Number(e.target.value))}
                  className="text-lg font-semibold"
                  step="1000"
                />
                <div className="mt-2 text-sm">
                  {userBid > currentPrice ? (
                    <span className="text-green-600">
                      +{(userBid - currentPrice).toLocaleString()}원 높음
                    </span>
                  ) : (
                    <span className="text-red-600">
                      현재가보다 높게 입찰해주세요
                    </span>
                  )}
                </div>
              </div>

              <Button 
                onClick={handleBid} 
                className="w-full bg-black text-white hover:bg-gray-800"
                disabled={userBid <= currentPrice}
              >
                입찰하기
              </Button>
            </CardContent>
          </Card>

          {/* Bid History */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <CardTitle>실시간 입찰 히스토리</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {bidHistory.map((bid, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className={`text-sm font-medium ${bid.bidder === '나' ? 'text-blue-600' : 'text-gray-600'}`}>
                        {bid.bidder}
                      </span>
                      <span className="text-xs text-gray-500">{bid.time}</span>
                    </div>
                    <span className={`font-bold ${index === 0 ? 'text-green-600' : 'text-black'}`}>
                      {bid.amount.toLocaleString()}원
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuctionDemo;
