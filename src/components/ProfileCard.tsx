
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Star, MapPin, Calendar } from "lucide-react";

const ProfileCard = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [nickname, setNickname] = useState("라젤");
  const [introduction, setIntroduction] = useState("안전하고 정직한 거래를 지향합니다.");

  const handleSaveProfile = () => {
    // 프로필 저장 로직 (실제로는 백엔드 연동)
    setIsEditOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          마이프로필
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                프로필 편집
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>프로필 편집</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="nickname">닉네임</Label>
                  <Input 
                    id="nickname" 
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="introduction">한줄 소개</Label>
                  <Textarea 
                    id="introduction" 
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder="자신을 소개해주세요"
                  />
                </div>
                <Button 
                  onClick={handleSaveProfile} 
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  저장하기
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="text-lg font-semibold">라</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-xl font-bold">{nickname}</h2>
                <Badge className="bg-gray-200 text-gray-800">
                  실버 🥈
                </Badge>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  서울 강남구
                </Badge>
              </div>
              <p className="text-gray-600">{introduction}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">5</div>
                <div className="text-sm text-gray-600">누적 판매</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-black">4.7</span>
                </div>
                <div className="text-sm text-gray-600">평균 별점</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">8</div>
                <div className="text-sm text-gray-600">후기 수</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">3일 전</span>
                </div>
                <div className="text-sm text-gray-600">최근 활동</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
