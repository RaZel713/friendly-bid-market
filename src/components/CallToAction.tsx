
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleExperience = () => {
    navigate('/auction-demo');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          지금 바로 경매를 체험해보세요
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          실제 입찰 흐름을 미리 경험하고 BidBuddy의 간편함을 느껴보세요
        </p>
        
        <Button 
          onClick={handleExperience}
          size="lg" 
          className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
        >
          🚀 경매 체험해보기
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
