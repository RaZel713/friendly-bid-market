
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Heart, 
  Bell, 
  User, 
  LogOut, 
  UserX, 
  ChevronRight,
  Plus,
  X
} from "lucide-react";

const SettingsMenu = () => {
  const [keywords, setKeywords] = useState(['피규어', '노트북', '카메라']);
  const [newKeyword, setNewKeyword] = useState('');
  const [notifications, setNotifications] = useState({
    auction: true,
    bid: true,
    chat: false,
    marketing: false
  });

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="w-5 h-5" />
          <span>설정</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        
        {/* 관심 키워드 관리 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>관심 키워드 / 카테고리 관리</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>관심 키워드 관리</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>현재 등록된 키워드</Label>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="flex items-center space-x-1">
                      <span>{keyword}</span>
                      <X 
                        className="w-3 h-3 cursor-pointer hover:text-red-500" 
                        onClick={() => removeKeyword(keyword)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="newKeyword">새 키워드 추가</Label>
                <div className="flex space-x-2">
                  <Input
                    id="newKeyword"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="관심 키워드 입력"
                    onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                  />
                  <Button onClick={addKeyword} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* 알림 설정 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span>알림 설정</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>알림 설정</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">경매 시작 알림</div>
                  <div className="text-sm text-gray-500">관심 키워드 상품 경매 시작 시</div>
                </div>
                <Switch 
                  checked={notifications.auction}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, auction: checked})
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">입찰 경쟁 알림</div>
                  <div className="text-sm text-gray-500">내 입찰가가 경신되었을 때</div>
                </div>
                <Switch 
                  checked={notifications.bid}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, bid: checked})
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">채팅 알림</div>
                  <div className="text-sm text-gray-500">새 메시지 도착 시</div>
                </div>
                <Switch 
                  checked={notifications.chat}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, chat: checked})
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">마케팅 알림</div>
                  <div className="text-sm text-gray-500">이벤트 및 혜택 정보</div>
                </div>
                <Switch 
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, marketing: checked})
                  }
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* 로그인 정보 변경 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>로그인 정보 변경</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로그인 정보 변경</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>현재 휴대폰 번호</Label>
                <div className="p-2 bg-gray-50 rounded border text-gray-600">010-1234-5678</div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPhone">새 휴대폰 번호</Label>
                <Input id="newPhone" placeholder="010-0000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="verification">인증번호</Label>
                <div className="flex space-x-2">
                  <Input id="verification" placeholder="인증번호 입력" />
                  <Button variant="outline" size="sm">인증번호 요청</Button>
                </div>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                변경하기
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* 로그아웃 / 계정 탈퇴 */}
        <div className="flex space-x-4 pt-4">
          <Button variant="outline" className="flex-1">
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
          <Button variant="destructive" className="flex-1">
            <UserX className="w-4 h-4 mr-2" />
            계정 탈퇴
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsMenu;
