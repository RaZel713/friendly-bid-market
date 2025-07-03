
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Camera, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from '@/components/Header';

const ChatDemo = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "구매자",
      content: "안녕하세요! 낙찰받은 MacBook Pro 관련해서 연락드려요.",
      time: "14:23",
      isMe: false
    },
    {
      id: 2,
      sender: "나",
      content: "안녕하세요! 축하드려요. 거래 방식은 어떻게 하실 건가요?",
      time: "14:25",
      isMe: true
    },
    {
      id: 3,
      sender: "구매자",
      content: "택배로 받고 싶은데 가능할까요? 서울 강남구입니다.",
      time: "14:26",
      isMe: false
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "나",
        content: newMessage,
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        isMe: true
      };
      setMessages([...messages, message]);
      setNewMessage("");
      
      // Simulate buyer response
      setTimeout(() => {
        const buyerMessage = {
          id: messages.length + 2,
          sender: "구매자",
          content: "네 좋습니다! 입금 완료하면 바로 보내주세요.",
          time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        };
        setMessages(prev => [...prev, buyerMessage]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => navigate('/auction-demo')}
                variant="ghost" 
                size="sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="font-semibold">MacBook Pro 2021</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>구매자</span>
                  <Badge variant="secondary" className="text-xs">중고</Badge>
                  <span className="font-medium">220,000원 낙찰</span>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div>24시간 내 응답 필요</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="container mx-auto max-w-2xl px-4 py-6">
        <div className="space-y-4 mb-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isMe 
                  ? 'bg-black text-white' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="text-sm font-medium mb-1">
                  {message.sender}
                </div>
                <div className="text-sm">
                  {message.content}
                </div>
                <div className={`text-xs mt-1 ${
                  message.isMe ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <Card>
          <CardContent className="p-4">
            <div className="flex space-x-2 mb-3">
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <Camera className="w-4 h-4" />
                <span>사진</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <Package className="w-4 h-4" />
                <span>거래방식</span>
              </Button>
            </div>
            <div className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-black text-white hover:bg-gray-800"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Actions */}
        <div className="mt-8 text-center space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">💡 체험 완료!</h3>
            <p className="text-sm text-blue-600">
              이렇게 경매 종료 후 자동으로 채팅방이 연결되어 간편하게 거래를 진행할 수 있습니다.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            size="lg"
            className="w-full"
          >
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
