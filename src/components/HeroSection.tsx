
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-black mb-6">
          BidBuddy
        </h1>
        <p className="text-2xl text-gray-600 mb-4">
          협상 없는 중고 경매 플랫폼
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          채팅 없이, 입찰로 거래 성사되는 새로운 중고 방식
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg p-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">3시간 제한 경매</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg p-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">최고가 자동 채팅</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg p-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">초보자 모드 제공</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg p-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">등급·지역 인증</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
