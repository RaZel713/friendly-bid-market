
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Clock, Users, Shield, Award } from "lucide-react";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
