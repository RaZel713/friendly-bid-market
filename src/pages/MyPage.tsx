
import React from 'react';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import TransactionHistory from '@/components/TransactionHistory';
import ReviewSection from '@/components/ReviewSection';
import SettingsMenu from '@/components/SettingsMenu';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-black mb-8">마이페이지</h1>
        
        <div className="space-y-8">
          <ProfileCard />
          <TransactionHistory />
          <ReviewSection />
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
