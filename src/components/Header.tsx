
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 임시로 로그인 상태로 설정
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMyPageClick = () => {
    navigate('/my-page');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-bold text-black">BidBuddy</span>
        </div>
        
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                라젤님 ⏷
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleMyPageClick}>
                <User className="w-4 h-4 mr-2" />
                내 정보
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                로그인
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>로그인</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">휴대폰 번호</Label>
                  <Input id="phone" placeholder="010-0000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="verification">인증번호</Label>
                  <div className="flex space-x-2">
                    <Input id="verification" placeholder="인증번호 입력" />
                    <Button variant="outline" size="sm">
                      인증번호 요청
                    </Button>
                  </div>
                </div>
                <Button 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsLoginOpen(false);
                  }}
                >
                  로그인하기
                </Button>
                <div className="text-center text-sm text-gray-600">
                  계정이 없으신가요?{' '}
                  <button className="text-black font-medium hover:underline">
                    회원가입하기
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
};

export default Header;
