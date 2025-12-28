import React, { useState } from 'react';
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
  const [toolOutput, setToolOutput] = useState([]);
  const [runningTools, setRunningTools] = useState(new Set());
  const [notifications] = useState([
    { id: 1, type: 'success', message: 'Affiliate Bot hat 3 neue Produkte gepostet', time: '2 min ago' },
    { id: 2, type: 'warning', message: 'Email Bot benötigt SMTP Konfiguration', time: '15 min ago' },
    { id: 3, type: 'info', message: 'Trading Bot hat +$23.40 Profit erzielt', time: '1 hour ago' }
  ]);
  
  // Advanced Stats with History
  const [stats] = useState({
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

  const bgColor = darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const cardBg = darkMode ? 'bg-gray-800/40 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-xl';
  const borderColor = darkMode ? 'border-gray-700/50' : 'border-gray-200/50';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-all duration-500`}>
      {/* Header */}
      <header className={`${cardBg} border-b ${borderColor} px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-3 rounded-2xl shadow-lg animate-pulse">
              <DollarSign size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Auto-Income Platform</h1>
              <p className="text-sm text-gray-400">KI-gesteuerte Einkommensgenerierung</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Bell size={20} className="cursor-pointer transition-all duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-bounce">
              {notifications.length}
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 hover:scale-110"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          <button className="p-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl transition-all duration-300 hover:scale-110">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className={`${cardBg} w-64 min-h-screen border-r ${borderColor} p-4 shadow-2xl`}>
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                      : 'hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
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
                <div className={`${cardBg} p-6 rounded-2xl border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Heute verdient</h3>
                    <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                      <DollarSign className="text-white" size={20} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">${stats.todayEarnings.toFixed(2)}</p>
                  <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                    <TrendingUp size={16} />
                    +12.5% vs gestern
                  </p>
                </div>

                <div className={`${cardBg} p-6 rounded-2xl border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Woche</h3>
                    <div className="p-2 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">${stats.weeklyEarnings.toFixed(2)}</p>
                  <p className="text-sm text-blue-400 mt-2 flex items-center gap-1">
                    <TrendingUp size={16} />
                    +8.3% vs letzte Woche
                  </p>
                </div>

                <div className={`${cardBg} p-6 rounded-2xl border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Monat</h3>
                    <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                      <LineChart className="text-white" size={20} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">${stats.monthlyEarnings.toFixed(2)}</p>
                  <p className="text-sm text-purple-400 mt-2 flex items-center gap-1">
                    <TrendingUp size={16} />
                    +15.7% vs letzter Monat
                  </p>
                </div>

                <div className={`${cardBg} p-6 rounded-2xl border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Gesamt</h3>
                    <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                      <Award className="text-white" size={20} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">${stats.totalEarnings.toFixed(2)}</p>
                  <p className="text-sm text-yellow-400 mt-2 flex items-center gap-1">
                    <Sparkles size={16} />
                    All-time earnings
                  </p>
                </div>
              </div>

              {/* Income Bots Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Income Bots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {incomeTools.map(tool => (
                    <div key={tool.id} className={`${cardBg} p-6 rounded-2xl border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`${tool.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <tool.icon size={28} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          {tool.status === 'active' ? (
                            <span className="flex items-center gap-2 text-green-400 text-sm font-medium px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20">
                              <CheckCircle size={16} />
                              Active
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium px-3 py-1 bg-gray-500/10 rounded-full border border-gray-500/20">
                              <Pause size={16} />
                              Inactive
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2">{tool.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded-xl">
                        <span className="text-sm text-gray-400 font-medium">Verdienst:</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">${tool.earnings.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={() => runTool(tool.id)}
                        disabled={runningTools.has(tool.id)}
                        className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold shadow-lg ${
                          runningTools.has(tool.id)
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 shadow-blue-500/50'
                        }`}
                      >
                        {runningTools.has(tool.id) ? (
                          <>
                            <Loader size={18} className="animate-spin" />
                            Running...
                          </>
                        ) : (
                          <>
                            <Play size={18} />
                            Start Bot
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Chat Interface */}
              <div className={`${cardBg} rounded-2xl border ${borderColor} p-6 shadow-xl`}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Bot size={24} className="text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Assistant</span>
                </h2>
                
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                      <Sparkles size={48} className="mx-auto mb-4 opacity-50 animate-pulse" />
                      <p className="text-lg">Stellen Sie mir Fragen zu Ihren Income Bots...</p>
                    </div>
                  )}
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-102 ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 ml-12'
                          : 'bg-gradient-to-r from-gray-700 to-gray-600 mr-12'
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex items-center gap-2 text-gray-400 p-4">
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
                    className={`flex-1 px-4 py-3 rounded-xl border ${borderColor} bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Tool Output Log */}
              {toolOutput.length > 0 && (
                <div className={`${cardBg} rounded-2xl border ${borderColor} p-6 shadow-xl`}>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                      <Terminal size={20} className="text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Activity Log</span>
                  </h2>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {toolOutput.slice(-10).reverse().map((output, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm p-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300">
                        <span className="text-cyan-400 font-mono">{new Date(output.timestamp).toLocaleTimeString()}</span>
                        <span className={output.status === 'success' ? 'text-green-400' : 'text-gray-400'}>
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
