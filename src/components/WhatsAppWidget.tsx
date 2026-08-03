import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, CheckCheck } from 'lucide-react';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! Welcome to Elite AI Workspace support. How can we assist you with finding an AI developer or posting a project today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    // Simulate instant AI Agent Support reply
    setTimeout(() => {
      let replyText = 'Thank you for reaching out! A talent advisor is connecting to your chat. In the meantime, feel free to browse our categories or post a project for free.';
      
      if (currentInput.toLowerCase().includes('price') || currentInput.toLowerCase().includes('cost')) {
        replyText = 'Projects on Elite AI Workspace range from $40/hr for lightweight prompt/scripting work to $3,500+ for enterprise multi-agent workflows!';
      } else if (currentInput.toLowerCase().includes('developer') || currentInput.toLowerCase().includes('hire')) {
        replyText = 'All AI Agent Developers on our platform are verified for proficiency with LangChain, LlamaIndex, OpenAI, Gemini, and custom Python LLM orchestration.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'agent',
          text: replyText,
          time: 'Just now'
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-slideUp">
      
      {/* Header */}
      <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center font-bold shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm leading-tight">Elite AI Workspace Support</h4>
            <span className="text-[11px] text-emerald-200 flex items-center space-x-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Online WhatsApp Support</span>
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages area */}
      <div className="p-4 bg-[#E5DDD5] h-72 overflow-y-auto space-y-3 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 shadow-sm relative ${
                m.sender === 'user'
                  ? 'bg-[#DCF8C6] text-slate-800 rounded-tr-none'
                  : 'bg-white text-slate-800 rounded-tl-none'
              }`}
            >
              <p className="leading-relaxed">{m.text}</p>
              <div className="text-[10px] text-slate-400 text-right mt-1 flex items-center justify-end space-x-1">
                <span>{m.time}</span>
                {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-blue-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-3 bg-slate-50 border-t border-slate-200 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-[#075E54]"
        />
        <button
          type="submit"
          className="bg-[#128C7E] hover:bg-[#075E54] text-white p-2 rounded-full transition-colors shadow-md"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
