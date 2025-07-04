
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-black mb-6">
          믿고
          <span className="block text-2xl font-normal text-gray-600 mt-2">
            협상 없는 중고 경매 플랫폼
          </span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          채팅 없이, 입찰로 거래 성사되는 새로운 중고 방식
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-800">✔️ 3시간 제한 경매</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-800">✔️ 최고가 자동 채팅</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-800">✔️ 초보자 모드 제공</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-800">✔️ 등급·지역 인증</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
          onClick={() => navigate('/auction-demo')}
        >
          🚀 경매 체험해보기
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
