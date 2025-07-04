
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleLogin = () => {
    // 테스트용 로그인 (실제로는 인증 처리)
    if (phoneNumber === '010-1234-5678' && verificationCode === '1234') {
      setIsLoggedIn(true);
      setShowLoginDialog(false);
      setPhoneNumber('');
      setVerificationCode('');
      setIsCodeSent(false);
    }
  };

  const handleSendCode = () => {
    if (phoneNumber) {
      setIsCodeSent(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleMyPage = () => {
    navigate('/my-page');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-black cursor-pointer"
          onClick={() => navigate('/')}
        >
          믿고
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>라젤님</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleMyPage}>
                  내 정보
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
              <DialogTrigger asChild>
                <Button variant="outline">로그인</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>믿고 로그인</DialogTitle>
                  <DialogDescription>
                    휴대폰 번호로 간편하게 로그인하세요
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">휴대폰 번호</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="phone"
                        placeholder="010-1234-5678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSendCode}
                        variant="outline"
                        disabled={!phoneNumber}
                      >
                        {isCodeSent ? '재전송' : '인증요청'}
                      </Button>
                    </div>
                  </div>
                  
                  {isCodeSent && (
                    <div>
                      <Label htmlFor="code">인증번호</Label>
                      <Input
                        id="code"
                        placeholder="1234"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                      />
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleLogin}
                    className="w-full bg-black text-white hover:bg-gray-800"
                    disabled={!phoneNumber || !verificationCode}
                  >
                    로그인
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    테스트 계정: 010-1234-5678, 인증번호: 1234
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
