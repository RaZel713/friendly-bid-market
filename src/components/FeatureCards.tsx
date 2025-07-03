
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, HelpCircle, MessageSquare } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      title: "실시간 입찰 히스토리",
      description: "가격 상승 과정을 투명하게 확인하고 익명 입찰자 정보를 실시간으로 확인하세요",
      icon: TrendingUp,
      demo: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">익명A</span>
            <span className="font-semibold">270,000원</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">익명B</span>
            <span className="font-semibold">275,000원</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">익명C</span>
            <span className="font-semibold text-green-600">280,000원</span>
          </div>
        </div>
      )
    },
    {
      title: "희망가 vs 현재가 비교",
      description: "내가 원하는 가격과 현재 입찰가의 차이를 한눈에 파악하세요",
      icon: Users,
      demo: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>현재가</span>
            <span className="font-bold text-lg">280,000원</span>
          </div>
          <div className="flex justify-between items-center">
            <span>희망가</span>
            <span className="font-bold text-lg">300,000원</span>
          </div>
          <div className="bg-orange-50 p-2 rounded">
            <span className="text-orange-600 text-sm">+20,000원 더 필요</span>
          </div>
        </div>
      )
    },
    {
      title: "초보자 입찰 가이드",
      description: "처음 사용하시는 분들을 위한 단계별 입찰 흐름 체험과 상세한 가이드",
      icon: HelpCircle,
      demo: (
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">💡 입찰 단위란?</Badge>
          <Badge variant="secondary" className="text-xs">💡 희망가란?</Badge>
          <Badge variant="secondary" className="text-xs">💡 낙찰 기준이 뭔가요?</Badge>
        </div>
      )
    },
    {
      title: "자동 채팅 연결",
      description: "경매 종료와 함께 최고가 입찰자와 자동으로 채팅방이 연결됩니다",
      icon: MessageSquare,
      demo: (
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="text-green-600 font-semibold text-sm mb-2">경매 종료!</div>
          <div className="text-sm text-gray-600">
            낙찰가 300,000원<br />
            익명C와 채팅 연결 중...
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          기능 미리보기
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="w-5 h-5 text-black" />
                    <CardTitle className="text-lg text-black">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {feature.demo}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
