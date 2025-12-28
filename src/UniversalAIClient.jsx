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

// Constants
const HEATMAP_DAYS = 35; // 5 weeks of activity data
const MAX_CHART_VALUE = 300; // Maximum value for chart height calculation

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

  // Chart data for Analytics
  const [weeklyChartData] = useState([
    { day: 'Mo', earnings: 234.56 },
    { day: 'Di', earnings: 189.23 },
    { day: 'Mi', earnings: 267.89 },
    { day: 'Do', earnings: 198.45 },
    { day: 'Fr', earnings: 289.12 },
    { day: 'Sa', earnings: 156.78 },
    { day: 'So', earnings: 223.34 }
  ]);

  const [activityHeatmap] = useState(() => 
    Array.from({ length: HEATMAP_DAYS }, () => Math.random())
  );

  const [monthlyComparison] = useState([
    { month: 'Jul', value: 3234.56 },
    { month: 'Aug', value: 3789.23 },
    { month: 'Sep', value: 4123.45 },
    { month: 'Okt', value: 4567.89 },
    { month: 'Nov', value: 5123.34 },
    { month: 'Dez', value: 5892.30 }
  ]);

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
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Bot Management</h2>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 transition-colors">
                  <Plus size={20} />
                  Neuen Bot hinzufügen
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {incomeTools.map(tool => (
                  <div key={tool.id} className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`${tool.color} p-3 rounded-lg`}>
                          <tool.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{tool.name}</h3>
                          <p className="text-sm text-gray-400">{tool.description}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Status:</span>
                        <div className="flex items-center gap-2">
                          {tool.status === 'active' ? (
                            <>
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-green-500 text-sm font-medium">Aktiv</span>
                            </>
                          ) : (
                            <>
                              <Pause size={16} className="text-gray-500" />
                              <span className="text-gray-500 text-sm font-medium">Inaktiv</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Gesamtverdienst:</span>
                        <span className="text-lg font-bold text-green-500">${tool.earnings.toFixed(2)}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Letzte Aktivität:</span>
                        <span className="text-sm">Vor 15 Minuten</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Erfolgsrate:</span>
                        <span className="text-sm font-medium">{stats.successRate}%</span>
                      </div>

                      <div className="pt-4 border-t border-gray-700 flex gap-2">
                        <button
                          onClick={() => runTool(tool.id)}
                          disabled={runningTools.has(tool.id)}
                          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                            tool.status === 'active'
                              ? 'bg-yellow-500 hover:bg-yellow-600'
                              : 'bg-green-500 hover:bg-green-600'
                          } ${runningTools.has(tool.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {tool.status === 'active' ? (
                            <>
                              <Pause size={16} />
                              Pausieren
                            </>
                          ) : (
                            <>
                              <Play size={16} />
                              Starten
                            </>
                          )}
                        </button>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <Settings size={16} />
                        </button>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Analytics & Reports</h2>
              
              {/* Performance Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Durchschnittl. Tagesverdienst</h3>
                    <TrendingUp className="text-green-500" size={20} />
                  </div>
                  <p className="text-3xl font-bold">${(stats.monthlyEarnings / 30).toFixed(2)}</p>
                  <p className="text-sm text-green-500 mt-2">+18.2% vs letzter Monat</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Erfolgsrate</h3>
                    <Target size={20} className="text-blue-500" />
                  </div>
                  <p className="text-3xl font-bold">{stats.successRate}%</p>
                  <p className="text-sm text-blue-500 mt-2">Durchschnittliche Bot-Performance</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400 text-sm">Abgeschlossene Tasks</h3>
                    <CheckCircle className="text-purple-500" size={20} />
                  </div>
                  <p className="text-3xl font-bold">{stats.tasksCompleted}</p>
                  <p className="text-sm text-purple-500 mt-2">Diesen Monat</p>
                </div>
              </div>

              {/* Bot Performance Breakdown */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 size={20} />
                  Bot Performance Breakdown
                </h3>
                <div className="space-y-4">
                  {incomeTools.map(tool => {
                    const percentage = (tool.earnings / stats.monthlyEarnings * 100);
                    return (
                      <div key={tool.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`${tool.color} p-2 rounded`}>
                              <tool.icon size={16} className="text-white" />
                            </div>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">${tool.earnings.toFixed(2)}</span>
                            <span className="text-sm text-gray-400 ml-2">({percentage.toFixed(1)}%)</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`${tool.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time-based Analytics */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <LineChart size={20} />
                    Earnings Timeline
                  </h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 rounded text-sm">7T</button>
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">30T</button>
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">90T</button>
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">1J</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {weeklyChartData.map((data) => {
                    const height = (data.earnings / MAX_CHART_VALUE) * 100;
                    return (
                      <div key={data.day} className="text-center">
                        <div className="h-32 flex items-end justify-center mb-2">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t hover:opacity-80 transition-opacity cursor-pointer"
                            style={{ height: `${height}%` }}
                            title={`${data.day}: $${data.earnings.toFixed(2)}`}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{data.day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity size={20} />
                    Aktivitäts-Heatmap
                  </h3>
                  <div className="grid grid-cols-7 gap-1">
                    {activityHeatmap.map((intensity, i) => {
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded ${
                            intensity > 0.7 ? 'bg-green-500' :
                            intensity > 0.4 ? 'bg-green-600' :
                            intensity > 0.2 ? 'bg-green-700' : 'bg-gray-700'
                          }`}
                          title={`Activity: ${(intensity * 100).toFixed(0)}%`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Letzte 5 Wochen</p>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award size={20} />
                    Top Performer
                  </h3>
                  <div className="space-y-3">
                    {incomeTools
                      .sort((a, b) => b.earnings - a.earnings)
                      .slice(0, 3)
                      .map((tool, i) => (
                        <div key={tool.id} className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            i === 0 ? 'bg-yellow-500' :
                            i === 1 ? 'bg-gray-400' : 'bg-orange-600'
                          }`}>
                            <span className="text-sm font-bold">{i + 1}</span>
                          </div>
                          <div className={`${tool.color} p-2 rounded`}>
                            <tool.icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{tool.name}</p>
                            <p className="text-xs text-gray-400">${tool.earnings.toFixed(2)} verdient</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Earnings Overview</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center gap-2 transition-colors">
                    <Download size={16} />
                    Export
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center gap-2 transition-colors">
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-blue-500" size={20} />
                    <h3 className="text-gray-400 text-sm">Heute</h3>
                  </div>
                  <p className="text-2xl font-bold">${stats.todayEarnings.toFixed(2)}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
                    <TrendingUp size={14} />
                    <span>+12.5%</span>
                  </div>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="text-purple-500" size={20} />
                    <h3 className="text-gray-400 text-sm">Diese Woche</h3>
                  </div>
                  <p className="text-2xl font-bold">${stats.weeklyEarnings.toFixed(2)}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
                    <TrendingUp size={14} />
                    <span>+8.3%</span>
                  </div>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="text-green-500" size={20} />
                    <h3 className="text-gray-400 text-sm">Dieser Monat</h3>
                  </div>
                  <p className="text-2xl font-bold">${stats.monthlyEarnings.toFixed(2)}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
                    <TrendingUp size={14} />
                    <span>+15.7%</span>
                  </div>
                </div>

                <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-yellow-500" size={20} />
                    <h3 className="text-gray-400 text-sm">Gesamt</h3>
                  </div>
                  <p className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</p>
                  <p className="text-xs text-gray-400 mt-2">All-time</p>
                </div>
              </div>

              {/* Earnings by Source */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <PieChart size={20} />
                  Einnahmen nach Quelle
                </h3>
                <div className="space-y-3">
                  {incomeTools.map(tool => (
                    <div key={tool.id} className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`${tool.color} p-2 rounded`}>
                          <tool.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{tool.name}</p>
                          <p className="text-xs text-gray-400">
                            {tool.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">${tool.earnings.toFixed(2)}</p>
                        <p className="text-xs text-gray-400">
                          {((tool.earnings / stats.totalEarnings) * 100).toFixed(1)}% der Gesamteinnahmen
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Activity size={20} />
                  Letzte Transaktionen
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-sm text-gray-400">Datum</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-400">Bot</th>
                        <th className="text-left py-3 px-4 text-sm text-gray-400">Beschreibung</th>
                        <th className="text-right py-3 px-4 text-sm text-gray-400">Betrag</th>
                        <th className="text-right py-3 px-4 text-sm text-gray-400">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: '28.12.2025 17:45', bot: 'Trading Bot', desc: 'BTC/USD Trade', amount: 45.32, status: 'success' },
                        { date: '28.12.2025 16:30', bot: 'Affiliate Bot', desc: 'Amazon Provision', amount: 23.45, status: 'success' },
                        { date: '28.12.2025 15:20', bot: 'Social Media Bot', desc: 'Instagram Kooperation', amount: 78.90, status: 'success' },
                        { date: '28.12.2025 14:15', bot: 'Content Creator Bot', desc: 'Blog-Artikel', amount: 56.78, status: 'success' },
                        { date: '28.12.2025 13:00', bot: 'Email Marketing Bot', desc: 'Kampagne #234', amount: 34.56, status: 'pending' },
                        { date: '28.12.2025 11:30', bot: 'Trading Bot', desc: 'ETH/USD Trade', amount: 67.89, status: 'success' },
                        { date: '28.12.2025 10:15', bot: 'Affiliate Bot', desc: 'ClickBank Provision', amount: 89.12, status: 'success' },
                        { date: '28.12.2025 09:00', bot: 'YouTube Automation', desc: 'AdSense Einnahmen', amount: 123.45, status: 'success' }
                      ].map((transaction, i) => (
                        <tr key={i} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                          <td className="py-3 px-4 text-sm">{transaction.date}</td>
                          <td className="py-3 px-4 text-sm font-medium">{transaction.bot}</td>
                          <td className="py-3 px-4 text-sm text-gray-400">{transaction.desc}</td>
                          <td className="py-3 px-4 text-sm font-bold text-right text-green-500">
                            +${transaction.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-right">
                            {transaction.status === 'success' ? (
                              <span className="inline-flex items-center gap-1 text-xs text-green-500">
                                <CheckCircle size={14} />
                                Erfolg
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs text-yellow-500">
                                <Clock size={14} />
                                Ausstehend
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Monthly Comparison */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <LineChart size={20} />
                  Monatlicher Vergleich
                </h3>
                <div className="grid grid-cols-6 gap-4">
                  {monthlyComparison.map((data, i) => {
                    const prevValue = i > 0 ? monthlyComparison[i - 1].value : data.value;
                    const growth = i > 0 ? ((data.value / prevValue - 1) * 100) : 0;
                    return (
                      <div key={data.month} className="text-center">
                        <p className="text-xs text-gray-400 mb-2">{data.month}</p>
                        <p className="text-xl font-bold mb-1">${data.value.toFixed(0)}</p>
                        {i > 0 && (
                          <p className={`text-xs flex items-center justify-center gap-1 ${
                            growth > 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {growth > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {Math.abs(growth).toFixed(1)}%
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Einstellungen</h2>

              {/* General Settings */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings size={20} />
                  Allgemeine Einstellungen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-400">Dunkles Theme aktivieren/deaktivieren</p>
                    </div>
                    <button
                      onClick={toggleDarkMode}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        darkMode ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        darkMode ? 'translate-x-7' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Benachrichtigungen</p>
                      <p className="text-sm text-gray-400">Desktop-Benachrichtigungen erhalten</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-blue-500">
                      <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Auto-Start Bots</p>
                      <p className="text-sm text-gray-400">Bots beim Start automatisch aktivieren</p>
                    </div>
                    <button className="relative w-14 h-7 rounded-full bg-gray-600">
                      <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Sprache</p>
                      <p className="text-sm text-gray-400">Interface-Sprache auswählen</p>
                    </div>
                    <select className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Deutsch</option>
                      <option>English</option>
                      <option>Español</option>
                      <option>Français</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* API Configuration */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database size={20} />
                  API Konfiguration
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        placeholder="sk-..."
                        className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                        <Save size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Trading API Key</label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        placeholder="API Key eingeben..."
                        className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                        <Save size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">SMTP Server (Email Bot)</label>
                    <input
                      type="text"
                      placeholder="smtp.example.com"
                      className={`w-full px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2`}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Benutzername"
                        className={`px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <input
                        type="password"
                        placeholder="Passwort"
                        className={`px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Social Media Tokens</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Twitter size={16} className="text-blue-400" />
                        <input
                          type="password"
                          placeholder="Twitter API Token"
                          className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Instagram size={16} className="text-pink-400" />
                        <input
                          type="password"
                          placeholder="Instagram API Token"
                          className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin size={16} className="text-blue-600" />
                        <input
                          type="password"
                          placeholder="LinkedIn API Token"
                          className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot Scheduling */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar size={20} />
                  Bot Zeitplanung
                </h3>
                <div className="space-y-4">
                  {incomeTools.slice(0, 3).map(tool => (
                    <div key={tool.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`${tool.color} p-2 rounded`}>
                          <tool.icon size={16} className="text-white" />
                        </div>
                        <span className="font-medium">{tool.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="px-3 py-1 bg-gray-600 rounded border border-gray-500 text-sm">
                          <option>Stündlich</option>
                          <option>Täglich</option>
                          <option>Wöchentlich</option>
                          <option>Manuell</option>
                        </select>
                        <button className="p-1 hover:bg-gray-600 rounded">
                          <Settings size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield size={20} />
                  Sicherheit
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Zwei-Faktor-Authentifizierung</p>
                      <p className="text-sm text-gray-400">Zusätzliche Sicherheitsebene aktivieren</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      Aktivieren
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Passwort ändern</p>
                      <p className="text-sm text-gray-400">Aktuelles Passwort aktualisieren</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      Ändern
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Aktive Sitzungen</p>
                      <p className="text-sm text-gray-400">Verwalten Sie angemeldete Geräte</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2">
                      <Eye size={16} />
                      Anzeigen
                    </button>
                  </div>
                </div>
              </div>

              {/* Export & Backup */}
              <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Download size={20} />
                  Daten & Backup
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Einnahmen exportieren</p>
                      <p className="text-sm text-gray-400">Exportieren Sie alle Einnahmen als CSV</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2">
                      <Download size={16} />
                      CSV Export
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Backup erstellen</p>
                      <p className="text-sm text-gray-400">Sichern Sie alle Einstellungen und Daten</p>
                    </div>
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors flex items-center gap-2">
                      <Save size={16} />
                      Backup
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="font-medium">Daten löschen</p>
                      <p className="text-sm text-red-400">Alle Daten permanent entfernen</p>
                    </div>
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2">
                      <Trash2 size={16} />
                      Löschen
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-3">
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  Abbrechen
                </button>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2">
                  <Save size={20} />
                  Einstellungen speichern
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UniversalAIClient;
