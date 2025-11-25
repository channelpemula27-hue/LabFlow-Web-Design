import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateSmartConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

interface SmartConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const SmartConsultant: React.FC<SmartConsultantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm your LabFlow Intelligent Agent. Briefly describe your current laboratory bottleneck or compliance issue, and I'll analyze how our system can help.",
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Call Gemini API
    const responseText = await generateSmartConsultation(input);

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-2xl h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-labblue-600 to-indigo-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">LabFlow Smart Consultant</h3>
              <p className="text-xs text-blue-100">Powered by Gemini 3 Pro (Thinking Mode)</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'model' ? 'bg-labblue-100 text-labblue-600' : 'bg-slate-200 text-slate-600'
              }`}>
                {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
              </div>
              
              <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'model' 
                  ? 'bg-white border border-slate-100 text-slate-800' 
                  : 'bg-labblue-600 text-white'
              }`}>
                <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'prose-invert' : ''}`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-labblue-100 text-labblue-600 flex items-center justify-center shrink-0">
                  <Bot size={18} />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-labblue-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-labblue-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-labblue-400 rounded-full animate-bounce delay-200"></span>
                  <span className="text-xs text-slate-500 ml-2">Thinking...</span>
                </div>
             </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="E.g., Our manual sample tracking is causing audit failures..."
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-labblue-500 focus:border-transparent resize-none h-14"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-2 p-2 bg-labblue-600 text-white rounded-lg hover:bg-labblue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 mt-2">
            AI can make mistakes. Please verify critical information.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SmartConsultant;