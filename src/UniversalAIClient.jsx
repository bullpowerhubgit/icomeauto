import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Code, DollarSign, TrendingUp, Bot, Mail, Globe, BarChart3, 
  Play, Save, Download, Copy, Check, Moon, Sun, Zap, Settings, Plus, 
  Youtube, Twitter, Instagram, Linkedin, ShoppingCart, FileText, Search, 
  MessageSquare, Calendar, Clock, Target, Award, Package, RefreshCw, 
  Bell, ChevronRight, ExternalLink, Sparkles, CheckCircle, AlertCircle, 
  Loader, Terminal, Users, Shield, CreditCard, Database, Filter, 
  Grid, Cpu, Wifi, Battery, Cloud, Lock, Unlock, Power, Pause, 
  StopCircle, MoreVertical, Edit, Trash2, Eye, Share, Maximize2,
  Minimize2, HelpCircle, Info, ChevronDown, ChevronUp, Menu, X,
  Activity, LineChart, PieChart, TrendingDown, Percent, Target as TargetIcon
} from 'lucide-react';

const UniversalAIClient = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [toolOutput, setToolOutput] = useState([]);
  const [runningTools, setRunningTools] = useState(new Set());
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Affiliate Bot hat 3 neue Produkte gepostet', time: '2 min ago' },
    { id: 2, type: 'warning', message: 'Email Bot benötigt SMTP Konfiguration', time: '15 min ago' },
    { id: 3, type: 'info', message: 'Trading Bot hat +$23.40 Profit erzielt', time: '1 hour ago' }
  ]);
  
  // Advanced Stats with History
  const [stats, setStats] = useState({
    todayEarnings: 234.50,
    weeklyEarnings: 1456.80,
    monthlyEarnings: 5892.30,
    totalEarnings: 24567.90,
    activeBots: 12,
    totalBots: 15,
    successRate: 87.5,
    tasksCompleted: 1234
  });

  // AI Tools for Income Generation
  const incomeTools = [
    {
      id: 'affiliate',
      name: 'Affiliate Marketing Bot',
      icon: ShoppingCart,
      color: 'bg-purple-500',
      description: 'Automatisches Posten von Affiliate-Produkten',
      status: 'active',
      earnings: 1234.56
    },
    {
      id: 'email',
      name: 'Email Marketing Bot',
      icon: Mail,
      color: 'bg-blue-500',
      description: 'Automatisierte Email-Kampagnen',
      status: 'inactive',
      earnings: 567.89
    },
    {
      id: 'social',
      name: 'Social Media Bot',
      icon: Twitter,
      color: 'bg-cyan-500',
      description: 'Auto-Posting auf Social Media',
      status: 'active',
      earnings: 890.12
    },
    {
      id: 'trading',
      name: 'Trading Bot',
      icon: TrendingUp,
      color: 'bg-green-500',
      description: 'Automatischer Krypto-Trading',
      status: 'active',
      earnings: 2345.67
    },
    {
      id: 'content',
      name: 'Content Creator Bot',
      icon: FileText,
      color: 'bg-orange-500',
      description: 'AI-generierter Content',
      status: 'active',
      earnings: 678.90
    },
    {
      id: 'youtube',
      name: 'YouTube Automation',
      icon: Youtube,
      color: 'bg-red-500',
      description: 'Video-Generierung und Upload',
      status: 'inactive',
      earnings: 345.23
    }
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Ich habe Ihre Anfrage verstanden und arbeite daran, die beste Lösung zu finden...'
      }]);
      setLoading(false);
    }, 1000);
  };

  const runTool = (toolId) => {
    setRunningTools(prev => new Set(prev).add(toolId));
    setToolOutput(prev => [...prev, {
      toolId,
      timestamp: new Date().toISOString(),
      message: `${toolId} Bot wird gestartet...`
    }]);
    
    setTimeout(() => {
      setRunningTools(prev => {
        const newSet = new Set(prev);
        newSet.delete(toolId);
        return newSet;
      });
      setToolOutput(prev => [...prev, {
        toolId,
        timestamp: new Date().toISOString(),
        message: `${toolId} Bot erfolgreich ausgeführt!`,
        status: 'success'
      }]);
    }, 3000);
  };

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${cardBg} border-b ${borderColor} px-6 py-4 flex items-center justify-between sticky top-0 z-50`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <DollarSign size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Auto-Income Platform</h1>
              <p className="text-sm text-gray-400">KI-gesteuerte Einkommensgenerierung</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={20} className="cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className={`${cardBg} w-64 min-h-screen border-r ${borderColor} p-4`}>
            <nav className="space-y-2">
              {[
                { id: 'dashboard', icon: Grid, label: 'Dashboard' },
                { id: 'bots', icon: Bot, label: 'Bots' },
                { id: 'analytics', icon: BarChart3, label: 'Analytics' },
                { id: 'earnings', icon: DollarSign, label: 'Earnings' },
                { id: 'settings', icon: Settings, label: 'Einstellungen' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Heute verdient</h3>
                    <DollarSign className="text-green-500" size={24} />
                  </div>
                  <p className="text-3xl font-bold">${stats.todayEarnings.toFixed(2)}</p>
                  <p className="text-sm text-green-500 mt-2">+12.5% vs gestern</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Woche</h3>
                    <TrendingUp className="text-blue-500" size={24} />
                  </div>
                  <p className="text-3xl font-bold">${stats.weeklyEarnings.toFixed(2)}</p>
                  <p className="text-sm text-blue-500 mt-2">+8.3% vs letzte Woche</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Monat</h3>
                    <LineChart className="text-purple-500" size={24} />
                  </div>
                  <p className="text-3xl font-bold">${stats.monthlyEarnings.toFixed(2)}</p>
                  <p className="text-sm text-purple-500 mt-2">+15.7% vs letzter Monat</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Gesamt</h3>
                    <Award className="text-yellow-500" size={24} />
                  </div>
                  <p className="text-3xl font-bold">${stats.totalEarnings.toFixed(2)}</p>
                  <p className="text-sm text-yellow-500 mt-2">All-time earnings</p>
                </div>
              </div>

              {/* Income Bots Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Income Bots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {incomeTools.map(tool => (
                    <div key={tool.id} className={`${cardBg} p-6 rounded-lg border ${borderColor} hover:shadow-lg transition-shadow`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`${tool.color} p-3 rounded-lg`}>
                          <tool.icon size={24} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          {tool.status === 'active' ? (
                            <span className="flex items-center gap-1 text-green-500 text-sm">
                              <CheckCircle size={16} />
                              Active
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-gray-500 text-sm">
                              <Pause size={16} />
                              Inactive
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">Verdienst:</span>
                        <span className="text-lg font-bold text-green-500">${tool.earnings.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={() => runTool(tool.id)}
                        disabled={runningTools.has(tool.id)}
                        className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                          runningTools.has(tool.id)
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                      >
                        {runningTools.has(tool.id) ? (
                          <>
                            <Loader size={16} className="animate-spin" />
                            Running...
                          </>
                        ) : (
                          <>
                            <Play size={16} />
                            Start Bot
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Chat Interface */}
              <div className={`${cardBg} rounded-lg border ${borderColor} p-6`}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Bot size={24} />
                  AI Assistant
                </h2>
                
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                      <Sparkles size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Stellen Sie mir Fragen zu Ihren Income Bots...</p>
                    </div>
                  )}
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-blue-500 ml-12'
                          : 'bg-gray-700 mr-12'
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <Loader size={16} className="animate-spin" />
                      AI denkt nach...
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Frage den AI Assistant..."
                    className={`flex-1 px-4 py-3 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading}
                    className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-600 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Tool Output Log */}
              {toolOutput.length > 0 && (
                <div className={`${cardBg} rounded-lg border ${borderColor} p-6`}>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Terminal size={20} />
                    Activity Log
                  </h2>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {toolOutput.slice(-10).reverse().map((output, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-gray-500">{new Date(output.timestamp).toLocaleTimeString()}</span>
                        <span className={output.status === 'success' ? 'text-green-500' : 'text-gray-400'}>
                          {output.message}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'bots' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Bot Management</h2>
              <p className="text-gray-400">Verwalten und konfigurieren Sie Ihre Income Bots...</p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Analytics & Reports</h2>
              <p className="text-gray-400">Detaillierte Statistiken und Berichte...</p>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Earnings Overview</h2>
              <p className="text-gray-400">Übersicht über alle Einnahmen...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Einstellungen</h2>
              <p className="text-gray-400">Konfigurieren Sie Ihre Plattform...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UniversalAIClient;
