import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  Network, 
  Zap, 
  Globe, 
  Target, 
  Layers, 
  Activity,
  Menu,
  X,
  Play,
  Volume2,
  Users,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Share2
} from 'lucide-react';

// --- Types ---
interface PodcastEpisode {
  id: string;
  episodeNum: string;
  speaker: string;
  role: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  topic: string;
}

interface TrioQuote {
  persona: 'Founder' | 'Operator' | 'Investor';
  avatar: string;
  quote: string;
}

interface DebateTopic {
  id: string;
  title: string;
  category: string;
  perspectives: TrioQuote[];
}

// --- Data ---
const EPISODES: PodcastEpisode[] = [
  {
    id: 'ep1',
    episodeNum: 'EP 01',
    speaker: 'GAYATHRI RAMKI',
    role: 'AI FOUNDER',
    title: 'Autonomous Scaling: How We Set Up Multi-Agent Operations',
    description: 'Practical paradigms of engineering zero-latency workflows that expand distribution across three continents without adding overhead headcount.',
    duration: '42 min',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    topic: 'OPERATIONAL INFRASTRUCTURE'
  },
  {
    id: 'ep2',
    episodeNum: 'EP 02',
    speaker: 'DR. ADRIAN CHEN',
    role: 'SYSTEM ARCHITECT',
    title: 'AI is Operational Infrastructure, Not a Mere Feature Layer',
    description: 'Why embedding neural intelligence deep within enterprise workflows determines ultimate market durability and GTM intelligence advantage.',
    duration: '35 min',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    topic: 'DEEP TECH INFRASTRUCTURE'
  },
  {
    id: 'ep3',
    episodeNum: 'EP 03',
    speaker: 'ELENA ROSTOVA',
    role: 'GROWTH PARTNER',
    title: 'Navigating Cross-Border Expansion via Interconnected Graphs',
    description: 'How modern category-defining AI ventures leverage high-value developer ecosystems and strategic partnerships for frictionless market access.',
    duration: '48 min',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    topic: 'ECOLOGICAL LEVERAGE'
  },
  {
    id: 'ep4',
    episodeNum: 'EP 04',
    speaker: 'MARCUS VANCE',
    role: 'GTM LEAD',
    title: 'Bypassing Local Boundaries: Global Positioning of AI Models',
    description: 'Differentiating products for global compatibility from inception to overcome physical GTM constraints and establish absolute vertical domain authority.',
    duration: '29 min',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    topic: 'NARRATIVE DISTRIBUTION'
  }
];

const DEBATES: DebateTopic[] = [
  {
    id: 'debate-1',
    category: 'GTM SCALE',
    title: 'Will autonomous GTM agents completely deprecate localized sales teams by 2027?',
    perspectives: [
      {
        persona: 'Founder',
        avatar: '👤',
        quote: "Yes. Our client acquisitions are entirely initiated, nurtured, and qualified via multi-agent nodes. Human validation is purely programmatic sign-off."
      },
      {
        persona: 'Operator',
        avatar: '⚙️',
        quote: "Only partially. Large enterprise expansion still relies on institutional confidence. Agents scale the raw bandwidth, but human trust secures contracts."
      },
      {
        persona: 'Investor',
        avatar: '💼',
        quote: "We back model founders who build high-conviction hybrid models. Pure automation drives efficiency margins, but relationships defend market share."
      }
    ]
  },
  {
    id: 'debate-2',
    category: 'PRODUCT ARCHITECTURE',
    title: 'Should AI products rely on foundational APIs or compile custom vertical models?',
    perspectives: [
      {
        persona: 'Founder',
        avatar: '🚀',
        quote: "API-first for extreme speed-to-market. Leverage frontier models for reasoning, and focus proprietary code entirely on structural workflows."
      },
      {
        persona: 'Operator',
        avatar: '🛠️',
        quote: "Direct API reliance creates a thin margin profile. We choose proprietary model fine-tuning with open models to anchor execution equity."
      },
      {
        persona: 'Investor',
        avatar: '📈',
        quote: "Pure wrappers have zero long-term enterprise moats. We prioritize ventures driving native structural intelligence and deep data-loop layers."
      }
    ]
  }
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activePodcast, setActivePodcast] = useState<PodcastEpisode | null>(null);
  const [activeDebate, setActiveDebate] = useState<string>('debate-1');
  const [activePerspective, setActivePerspective] = useState<'Founder' | 'Operator' | 'Investor'>('Founder');
  
  // Application Intake State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Founder',
    company: '',
    compatibility: ''
  });
  const [submissionStep, setSubmissionStep] = useState<'idle' | 'analyzing' | 'success'>('idle');
  const [auditScore, setAuditScore] = useState<number>(0);

  // Carousel Slider Ref
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 500;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentDebateData = DEBATES.find(d => d.id === activeDebate) || DEBATES[0];
  const activeQuote = currentDebateData.perspectives.find(p => p.persona === activePerspective) || currentDebateData.perspectives[0];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) return;

    // Simulate real AI analysis of global compatibility
    setSubmissionStep('analyzing');
    
    // Stagger analysis animation
    setTimeout(() => {
      // Generate some unique score between 89 and 98 for that elite feel
      const calculatedScore = Math.floor(Math.random() * 10) + 89;
      setAuditScore(calculatedScore);
      setSubmissionStep('success');
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#040814] text-[#dee2f4] overflow-x-hidden selection:bg-brand-blue/30 selection:text-white">
      {/* Background radial spotlights to match Void-Plus design system */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[30%] right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-1/3 -translate-y-1/2 w-[900px] h-[900px] bg-brand-indigo/5 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#040814]/80 backdrop-blur-xl border-b border-zinc-800/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center font-bold text-[#040814] text-xl font-display shadow-lg shadow-brand-blue/20">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-tight text-white text-base">
                ACCESS <span className="text-brand-cyan">by ZIAN</span>
              </span>
              <span className="text-[8px] font-mono tracking-widest text-zinc-500 uppercase -mt-1">
                AI-Native Ventures
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs font-mono tracking-widest uppercase">
            <li className="whitespace-nowrap">
              <a href="#positioning" className="text-zinc-400 hover:text-brand-cyan transition-colors">
                Positioning
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#signals" className="text-zinc-400 hover:text-brand-cyan transition-colors">
                Signals
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#debates" className="text-zinc-400 hover:text-brand-cyan transition-colors">
                Ecosystem Debates
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#selection" className="text-zinc-400 hover:text-brand-cyan transition-colors">
                Selection Criteria
              </a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#intake" className="btn-grad text-xs px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-brand-blue/10 tracking-widest uppercase inline-block whitespace-nowrap">
                Initialize Access
              </a>
            </li>
          </ul>

          <button className="lg:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {navOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-[#0c1224] border-b border-zinc-800 p-8 flex flex-col gap-6"
            >
              <a href="#positioning" className="text-zinc-300 font-display text-lg tracking-wide hover:text-brand-cyan" onClick={() => setNavOpen(false)}>
                Positioning
              </a>
              <a href="#signals" className="text-zinc-300 font-display text-lg tracking-wide hover:text-brand-cyan" onClick={() => setNavOpen(false)}>
                Signals
              </a>
              <a href="#debates" className="text-zinc-300 font-display text-lg tracking-wide hover:text-brand-cyan" onClick={() => setNavOpen(false)}>
                Ecosystem Debates
              </a>
              <a href="#selection" className="text-zinc-300 font-display text-lg tracking-wide hover:text-brand-cyan" onClick={() => setNavOpen(false)}>
                Selection Criteria
              </a>
              <a href="#intake" className="btn-grad text-center text-xs py-3.5 rounded-lg font-mono font-bold tracking-widest uppercase" onClick={() => setNavOpen(false)}>
                Initialize Access
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-6 md:px-12 overflow-hidden z-10" id="home">
        <div className="max-w-7xl mx-auto w-full text-center mb-16 relative">
          <div className="inline-flex items-center gap-2.5 border border-brand-cyan/20 rounded-full px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></span> 
            Ecosystem Infrastructure for Intelligent Global Scaling
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tighter mb-8 max-w-5xl mx-auto">
            Where <span className="grad-text">AI Builders</span><br className="hidden md:inline" /> Go Beyond Borders
          </h1>
          
          <p className="text-zinc-400 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
            An AI-native venture growth and strategic execution ecosystem helping globally ambitious companies scale through intelligent systems, ecosystem leverage, and tactical infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#intake" className="btn-grad text-xs font-mono uppercase tracking-[0.15em] px-8 py-4 rounded-lg shadow-lg shadow-brand-blue/35 transition-all hover:scale-105">
              Secure Strategic Intake
            </a>
            <a href="#signals" className="bg-[#0c1224]/80 border border-zinc-800 hover:border-brand-blue/50 text-[#dee2f4] text-xs font-mono uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-all">
              Explore Operator Intelligence
            </a>
          </div>
        </div>

        {/* Podcast Slideset / Carousel */}
        <div id="signals" className="max-w-7xl mx-auto w-full relative mt-16 group pt-12 border-t border-zinc-800/30">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 px-4 gap-4">
            <div>
              <span className="section-label">SIGNALS LAYER</span>
              <h3 className="text-2xl font-display font-semibold tracking-tight text-white mb-1">
                Latest Operator Conversations
              </h3>
              <p className="text-zinc-500 text-xs">
                Raw execution blueprints from active global-scale builders.
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                className="p-2.5 border border-zinc-800 rounded-full hover:bg-brand-blue/10 hover:border-brand-blue/40 transition-all text-zinc-400 hover:text-white"
                onClick={() => scrollCarousel('left')}
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <button 
                className="p-2.5 border border-zinc-800 rounded-full hover:bg-brand-blue/10 hover:border-brand-blue/40 transition-all text-zinc-400 hover:text-white"
                onClick={() => scrollCarousel('right')}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div 
            ref={sliderRef}
            className="carousel-container overflow-x-auto flex gap-6 px-4 pb-12 snap-x"
          >
            {EPISODES.map((ep) => (
              <div 
                key={ep.id} 
                className="flex-shrink-0 w-[280px] md:w-[480px] bg-[#0c1224]/40 border border-zinc-800/40 rounded-2xl overflow-hidden group/card hover:border-brand-cyan/30 transition-all cursor-pointer snap-start relative"
                onClick={() => setActivePodcast(ep)}
              >
                <div className="aspect-video relative overflow-hidden bg-zinc-950">
                  <img 
                    alt={ep.speaker} 
                    className="w-full h-full object-cover opacity-50 group-hover/card:scale-105 transition-transform duration-500" 
                    src={ep.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814] to-transparent opacity-80" />
                  
                  {/* Glowing live indicator to simulate premium command platform */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#040814]/70 px-2.5 py-1 rounded-md border border-zinc-700/50">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping" />
                    <span className="font-mono text-[9px] text-zinc-300 tracking-wider font-semibold uppercase">{ep.topic}</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-[10px] text-brand-cyan font-semibold tracking-wider">{ep.episodeNum} · {ep.speaker}</span>
                    <span className="px-2 py-0.5 bg-brand-blue/10 border border-brand-blue/20 rounded text-[9px] text-brand-cyan font-mono">{ep.role}</span>
                  </div>
                  <h4 className="font-display font-medium text-lg text-white mb-2 group-hover/card:text-brand-cyan transition-colors">
                    {ep.title}
                  </h4>
                  <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                    {ep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Dialogue Modal */}
      <AnimatePresence>
        {activePodcast && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0c1224] border border-zinc-800 max-w-2xl w-full rounded-2xl overflow-hidden relative"
            >
              <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                <span className="font-mono text-xs text-brand-cyan">{activePodcast.episodeNum} // OPERATOR AUDIO STREAM</span>
                <button onClick={() => setActivePodcast(null)} className="text-zinc-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video relative overflow-hidden bg-zinc-950">
                <img 
                  alt={activePodcast.speaker} 
                  className="w-full h-full object-cover opacity-40" 
                  src={activePodcast.image} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1224] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-brand-cyan font-mono text-xs tracking-widest mb-1">{activePodcast.role}</p>
                  <h3 className="text-2xl font-bold font-display text-white">{activePodcast.speaker}</h3>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold font-display mb-3 text-white">{activePodcast.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{activePodcast.description}</p>
                
                <div className="flex flex-col gap-4 border-t border-zinc-800/60 pt-6">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-brand-cyan" /> Secure Stream Connected</span>
                    <span>{activePodcast.duration} runtime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 btn-grad text-xs py-3 rounded-lg font-bold font-mono tracking-widest uppercase flex items-center justify-center gap-2">
                      <Play className="w-3.5 h-3.5 fill-black" /> Begin Playback
                    </button>
                    <button className="px-4 py-3 bg-zinc-800/30 border border-zinc-800 rounded-lg hover:border-brand-cyan/45 transition-colors text-xs font-mono" onClick={() => alert("Unique audio node URL copied to secure clipboard.")}>
                      Share Node
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Positioning Section */}
      <section id="positioning" className="py-24 bg-[#090e1a] border-y border-zinc-900/40 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal visible">
            <div className="flex items-center gap-4 text-brand-cyan font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <span className="w-8 h-px bg-brand-cyan"></span> 001 — Strategic Positioning
            </div>
            
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-8">
              Built for Companies Structurally Capable of <span className="grad-text">Global Relevance.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
              We work ONLY with globally ambitious companies already structurally designed to scale beyond borders. We believe global scaling is not a future goal; it is a foundational mindset.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0c1224] border border-zinc-800 rounded-xl text-brand-cyan text-xl">
                  <Globe className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base mb-1">Global Thinking From Day One</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-md">
                    Companies should build globally compatible systems, globally scalable positioning, and globally transferable distribution infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0c1224] border border-zinc-800 rounded-xl text-brand-cyan text-xl">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base mb-1">AI Is Operational Infrastructure</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-md">
                    AI is not a feature layer. AI is the baseline system architecture that drives compound speed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#0c1224] border border-zinc-800 rounded-xl text-brand-cyan text-xl">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base mb-1">Execution Intensity</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-md">
                    Execution quality compounds faster than ideas. We bring operators together to optimize workflow throughput.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal visible">
            <div className="bg-[#0c1224] rounded-[2.5rem] p-8 md:p-12 border border-zinc-800/40 relative overflow-hidden shadow-2xl shadow-brand-blue/5">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <div className="text-brand-cyan font-mono text-xs tracking-wider mb-6">// THE ACCESS MANIFESTO</div>
                
                <ul className="space-y-4 text-zinc-400 text-sm">
                  <li className="flex items-center gap-3.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                    <span>Intelligence over marketing noise.</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                    <span>Execution-driven scaling, not raw networking.</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                    <span>Globally transferable proprietary moats.</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                    <span>High-trust, chatham-house operator circles.</span>
                  </li>
                </ul>

                <div className="mt-12 p-6 bg-[#040814]/65 border border-zinc-800/30 rounded-xl">
                  <p className="italic text-zinc-300 text-sm md:text-base font-display">
                    "Growth is no longer linear. It is networked, intelligent, and ecosystem-driven."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Layers */}
      <section className="py-24 px-6 md:px-12 relative" id="structure">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="section-label">ECOSYSTEM STRUCTURE</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
                Interconnected <span className="grad-text">Venture Stack</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-sm">
              Four selective operational layers designed to support scalable AI-native enterprises globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layer 1 */}
            <div className="bg-[#0c1224]/30 border border-zinc-800/40 p-8 rounded-2xl hover:border-brand-cyan/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center justify-center text-xl">
                  <Activity className="w-6 h-6 text-brand-cyan" />
                </div>
                <span className="font-mono text-[10px] text-zinc-600">01</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-white mb-2">SIGNALS</h4>
              <p className="text-zinc-500 text-xs mb-4">Operator Intelligence Layer</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Operator insights, GTM intelligence, and execution frameworks to compress founder validation schedules.
              </p>
              <span className="text-brand-cyan text-[10px] font-mono tracking-widest uppercase block">
                COMPRESS HYPOTHESIS &rarr;
              </span>
            </div>

            {/* Layer 2 */}
            <div className="bg-[#0c1224]/30 border border-zinc-800/40 p-8 rounded-2xl hover:border-brand-cyan/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center justify-center text-xl">
                  <Layers className="w-6 h-6 text-brand-cyan" />
                </div>
                <span className="font-mono text-[10px] text-zinc-600">02</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-white mb-2">VELOCITY</h4>
              <p className="text-zinc-500 text-xs mb-4">Distribution & Growth Layer</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Ecosystem-led partnerships, co-distribution vectors, visibility strategy, and growth relationship architecture.
              </p>
              <span className="text-brand-cyan text-[10px] font-mono tracking-widest uppercase block">
                LEVERAGE CHANNELS &rarr;
              </span>
            </div>

            {/* Layer 3 */}
            <div className="bg-[#0c1224]/30 border border-zinc-800/40 p-8 rounded-2xl hover:border-brand-cyan/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center justify-center text-xl">
                  <Zap className="w-6 h-6 text-brand-cyan" />
                </div>
                <span className="font-mono text-[10px] text-zinc-600">03</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-white mb-2">BUILD SYSTEMS</h4>
              <p className="text-zinc-500 text-xs mb-4">Execution Infrastructure Layer</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Optimized AI-native operational systems, positioning methodologies, data integrations, and scalable GTM workflows.
              </p>
              <span className="text-brand-cyan text-[10px] font-mono tracking-widest uppercase block">
                AUTOMATE WORKFLOWS &rarr;
              </span>
            </div>

            {/* Layer 4 */}
            <div className="bg-[#0c1224]/30 border border-zinc-800/40 p-8 rounded-2xl hover:border-brand-cyan/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center justify-center text-xl">
                  <Network className="w-6 h-6 text-brand-cyan" />
                </div>
                <span className="font-mono text-[10px] text-zinc-600">04</span>
              </div>
              <h4 className="font-display font-semibold text-lg text-white mb-2">NODE ACCESS</h4>
              <p className="text-zinc-500 text-xs mb-4">Connectivity Layer</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Intense cross-founder collaboration graph, strategic warm intros, and key venture connections.
              </p>
              <span className="text-brand-cyan text-[10px] font-mono tracking-widest uppercase block">
                SCALE COLLABORATIVE &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trio Debates Interactive Section */}
      <section id="debates" className="py-24 px-6 md:px-12 bg-[#090e1a]/80 border-t border-zinc-900/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Info / Title */}
            <div className="lg:col-span-5">
              <span className="section-label">TRIO DEBATES BY ACCESS</span>
              <h2 className="font-space font-extrabold text-3xl md:text-5xl leading-tight mb-6">
                No Filter.<br className="hidden md:inline" />No Platform Fluff.
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
                We orchestrate weekly raw tactical debates on polarizing scaling decisions. See key perspectives from the Founder, Operator, and Investor viewpoints to help structure your scaling strategy.
              </p>
              
              {/* Topic Toggles */}
              <div className="space-y-4">
                {DEBATES.map(deb => (
                  <button
                    key={deb.id}
                    onClick={() => {
                      setActiveDebate(deb.id);
                      // Reset to founder view when changing topics
                      setActivePerspective('Founder');
                    }}
                    className={`w-full p-4 rounded-xl text-left border transition-all ${
                      activeDebate === deb.id
                        ? 'bg-[#0c1224] border-brand-cyan text-white shadow-lg shadow-brand-blue/10'
                        : 'bg-transparent border-zinc-850 hover:border-zinc-700 text-zinc-400'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5 pointer-events-none">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#00d4ff]">{deb.category}</span>
                      <span className="text-xs">&rarr;</span>
                    </div>
                    <span className="font-display font-medium text-xs md:text-sm block line-clamp-2">
                      {deb.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Quotes Terminal */}
            <div className="lg:col-span-7 bg-[#0c1224] border border-zinc-800 rounded-3xl p-8 relative shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-xl pointer-events-none rounded-full" />
              
              {/* Perspective Toggles */}
              <div className="flex border-b border-zinc-800 pb-6 mb-8 gap-2">
                {(['Founder', 'Operator', 'Investor'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setActivePerspective(p)}
                    className={`flex-1 py-3 text-xs font-mono uppercase tracking-[0.2em] rounded-lg border transition-all ${
                      activePerspective === p
                        ? 'bg-brand-blue/10 border-brand-blue/30 text-brand-cyan'
                        : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {p} View
                  </button>
                ))}
              </div>

              {/* Quote Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xl">
                    {activeQuote.avatar}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider block">ACCESS SESSION AUDITOR</span>
                    <span className="text-[10px] font-mono text-[#00d4ff] uppercase tracking-widest block">{activePerspective} Persona</span>
                  </div>
                </div>

                <div className="relative p-6 bg-[#040814]/75 rounded-2xl border border-zinc-800/45 min-h-[120px] flex items-center">
                  <span className="absolute top-2 left-4 text-7xl font-serif text-brand-cyan/10 select-none pointer-events-none">“</span>
                  <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed relative z-10">
                    {activeQuote.quote}
                  </p>
                </div>
              </div>

              {/* Secure verification status block */}
              <div className="mt-8 pt-6 border-t border-zinc-800/40 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> Secure Debate Registry</span>
                <span>Active Vault 002</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-[#090e1a] border-y border-zinc-900/60 py-6 overflow-hidden select-none z-10 relative">
        <div className="animate-marquee gap-12">
          <div className="flex items-center gap-12 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500/60">
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Global Venture Scale</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> AI-Native Speed</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Operator Intelligence</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Interconnected Ecosystem</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Structurally Scalable</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> No Noise, Raw Execution</span>
          </div>
          <div className="flex items-center gap-12 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500/60 animate-none">
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Global Venture Scale</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> AI-Native Speed</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Operator Intelligence</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Interconnected Ecosystem</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> Structurally Scalable</span>
            <span className="flex items-center gap-2"><span className="text-brand-cyan">✦</span> No Noise, Raw Execution</span>
          </div>
        </div>
      </div>

      {/* Selection Criteria Section */}
      <section id="selection" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="section-label">SELECTION INTENSITY</span>
            <h2 className="font-display font-extrabold text-4xl mb-6">ACCESS is intentionally high-signal.</h2>
            <p className="text-zinc-500 font-light leading-relaxed mb-8">
              We decline typical cohort-style bulk processing. ACCESS operates around select founders who create structurally robust startups preparing for global validation layers.
            </p>
            <div className="p-6 border border-zinc-800/80 rounded-xl bg-[#0c1224]/50">
              <span className="text-brand-cyan font-mono text-[10px] tracking-widest uppercase block mb-2">Scarcity Rule</span>
              <p className="text-zinc-400 text-xs italic leading-relaxed">
                "Ecosystem potential scales with compound selection. Only 12 elite global intake licenses processed quarterly to maintain high operator interface ratio."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#0c1224]/30 border border-zinc-800/40 rounded-xl">
              <span className="font-mono text-zinc-700 text-xs block mb-4">01 // MATRIX CHECK</span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">Global Compatibility</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Can your company move comfortably beyond geography tags? Is your core narrative structured for global customer expansion?
              </p>
            </div>

            <div className="p-8 bg-[#0c1224]/30 border border-zinc-800/40 rounded-xl">
              <span className="font-mono text-zinc-700 text-xs block mb-4">02 // BANDWIDTH CHECK</span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">Execution Intensity</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Can founders execute product updates daily? Are operations structured to incorporate developer AI workflows natively?
              </p>
            </div>

            <div className="p-8 bg-[#0c1224]/30 border border-zinc-800/40 rounded-xl">
              <span className="font-mono text-zinc-700 text-xs block mb-4">03 // INGESTION MOAT</span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">Structural Scalability</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Does your distribution architecture expand linearly or exponentially? Can partner integration require near-zero structural friction?
              </p>
            </div>

            <div className="p-8 bg-[#0c1224]/30 border border-zinc-800/40 rounded-xl">
              <span className="font-mono text-zinc-700 text-xs block mb-4">04 // EVOLUTION RATE</span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">Founder Adaptability</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Is there willingness to deprecate locally biased assumptions to leverage enterprise partnerships across sovereign borders?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gain Section */}
      <section className="py-24 border-t border-zinc-900/40 bg-[#090e1a]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">THE ADVANTAGE</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">Ecosystem Yield Dividends</h2>
            <p className="text-zinc-500 text-xs font-mono mt-2">What selected AI ventures gain through strategic entry.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Strategic Ecosystem Relationships',
              'Operator Intelligence Networks',
              'AI-Native Execution Systems',
              'Global Distribution Pathways',
              'Enterprise Scale Infrastructure',
              'Sovereign Expansion Audits',
              'Chatham House Roundtables',
              'Narrative Direction Reviews'
            ].map((gain, i) => (
              <div 
                key={i} 
                className="px-5 py-3 rounded-xl border border-zinc-850 bg-[#0c1224]/30 text-zinc-300 text-xs font-mono font-medium hover:border-brand-cyan/20 hover:bg-brand-blue/5 hover:text-white transition-all cursor-default"
              >
                ✦ {gain}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Strategic Application Form (BAE Template implementation) */}
      <section className="py-24 px-6 md:px-12 bg-[#090e1a]/40" id="intake">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="reveal visible">
              <div className="flex items-center gap-4 text-brand-cyan font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                <span className="w-8 h-px bg-brand-cyan"></span> 010 — REGISTER AMBITION
              </div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-8">
                Initiate Secure<br/>Strategic Intake.
              </h2>
              <p className="text-zinc-400 mb-10 text-sm md:text-base leading-relaxed">
                Ecosystem entries are evaluated meticulously. Strategic intake processes filter low-signal initiatives, keeping the core operator network highly aligned.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[#0c1224]/50 border border-zinc-800/40 rounded-xl">
                  <h6 className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest mb-2">Process Loop</h6>
                  <p className="text-zinc-400 text-xs leading-relaxed">Intake applications reviewed by council within 5 business days.</p>
                </div>
                <div className="p-6 bg-[#0c1224]/50 border border-zinc-800/40 rounded-xl">
                  <h6 className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest mb-2">Intake Mandate</h6>
                  <p className="text-zinc-400 text-xs leading-relaxed">Founders, lead operators, and key technological partners only.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c1224] border border-zinc-800 p-8 md:p-10 rounded-[2rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 blur-3xl pointer-events-none rounded-full" />
              
              <AnimatePresence mode="wait">
                {submissionStep === 'idle' && (
                  <motion.form 
                    onSubmit={handleApply} 
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Full Command Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-[#040814] border border-zinc-800 focus:border-brand-cyan focus:outline-none rounded-lg px-4 py-3 text-xs text-white transition-all font-mono" 
                        placeholder="e.g. Adrian Miller"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Secure Work Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#040814] border border-zinc-800 focus:border-brand-cyan focus:outline-none rounded-lg px-4 py-3 text-xs text-white transition-all font-mono" 
                        placeholder="adrian@venture.ai"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Operator Role</label>
                        <select 
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          className="w-full bg-[#040814] border border-zinc-800 focus:border-brand-cyan focus:outline-none rounded-lg px-4 py-3 text-xs text-[#dee2f4] transition-all font-mono appearance-none"
                        >
                          <option>Founder</option>
                          <option>Operator</option>
                          <option>Strategic Partner</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Entity / Startup</label>
                        <input 
                          required
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-[#040814] border border-zinc-800 focus:border-brand-cyan focus:outline-none rounded-lg px-4 py-3 text-xs text-white transition-all font-mono" 
                          placeholder="Autonomous Inc."
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Global Compatibility Statement</label>
                      <textarea 
                        value={formData.compatibility}
                        onChange={(e) => setFormData({...formData, compatibility: e.target.value})}
                        className="w-full bg-[#040814] border border-zinc-800 focus:border-brand-cyan focus:outline-none rounded-lg px-4 py-2.5 text-xs text-white transition-all font-mono min-h-[80px]" 
                        placeholder="How is your workflow pre-equipped for cross-border scale?"
                      />
                    </div>

                    <button type="submit" className="btn-grad w-full text-xs font-mono font-bold py-4 rounded-lg tracking-widest uppercase shadow-lg shadow-brand-cyan/10 flex items-center justify-center gap-2 mt-4">
                      Submit Command Application <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {submissionStep === 'analyzing' && (
                  <motion.div 
                    key="analyzing-state"
                    className="py-16 flex flex-col items-center justify-center text-center space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-zinc-800 border-t-brand-cyan rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-sm uppercase text-white tracking-widest">Analyzing Compatibility Moat</h4>
                      <p className="text-zinc-500 text-xs font-mono max-w-xs mx-auto">Evaluating GTM speed capability statements, entity scaling vectors, and structural compatibility index...</p>
                    </div>
                  </motion.div>
                )}

                {submissionStep === 'success' && (
                  <motion.div 
                    key="success-state"
                    className="py-8 flex flex-col justify-center space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-3 bg-brand-cyan/10 p-5 border border-brand-cyan/20 rounded-xl">
                      <CheckCircle2 className="w-8 h-8 text-brand-cyan flex-shrink-0" />
                      <div>
                        <h4 className="font-display font-semibold text-white text-base">Intake Handshake Initialized</h4>
                        <p className="text-zinc-400 text-xs">Security Registry Sequence Approved.</p>
                      </div>
                    </div>

                    <div className="p-6 bg-[#040814]/75 border border-zinc-800 rounded-xl space-y-4">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-400">AUDIT ID:</span>
                        <span className="text-white">ZIAN-0{(Math.floor(Math.random() * 900) + 100)}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-400">GLOBAL STRUCTURAL SCORE:</span>
                        <span className="text-brand-cyan font-bold">{auditScore}% compatibility</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-400">OPERATOR BUCKET:</span>
                        <span className="text-white font-semibold">Tier 1 Elite Scale</span>
                      </div>
                    </div>

                    <p className="text-zinc-500 text-xs font-mono text-center leading-relaxed">
                      Ecosystem specialists will initiate contact at <span className="text-white">{formData.email}</span> within 5 business days for deep matrix validation. Keep terminal session active.
                    </p>

                    <button 
                      onClick={() => {
                        setSubmissionStep('idle');
                        setFormData({ fullName: '', email: '', role: 'Founder', company: '', compatibility: '' });
                      }} 
                      className="text-xs font-mono text-brand-cyan hover:underline text-center bg-transparent border-none outline-none cursor-pointer"
                    >
                      &larr; Initialize Another Command
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 bg-[#040814]/94 border-t border-zinc-800/30 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            <div className="col-span-1 md:col-span-1">
              <a class="flex items-center gap-3 mb-6" href="#">
                <div class="w-9 h-9 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-lg flex items-center justify-center font-bold text-black text-lg font-display">
                  Z
                </div>
                <span class="font-display font-extrabold text-lg tracking-tight text-white">ACCESS <span class="text-brand-cyan">by ZIAN</span></span>
              </a>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                An AI-native venture growth and strategic execution ecosystem layer helping globally ambitious startups scale through model relationships, distribution, and automation.
              </p>
            </div>

            <div>
              <h5 className="font-display font-medium text-white text-xs uppercase tracking-widest mb-6 font-mono">// PLATFORM PILLARS</h5>
              <ul className="space-y-3 text-xs text-zinc-500 font-mono">
                <li><a href="#positioning" className="hover:text-brand-cyan transition-colors">POSITIONING</a></li>
                <li><a href="#signals" className="hover:text-brand-cyan transition-colors">OPERATOR SIGNALS</a></li>
                <li><a href="#debates" className="hover:text-brand-cyan transition-colors">TRIO DEBATES</a></li>
                <li><a href="#selection" className="hover:text-brand-cyan transition-colors">SELECTION PHASES</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-display font-medium text-white text-xs uppercase tracking-widest mb-6 font-mono">// CONNECT COMMANDS</h5>
              <div className="flex gap-3">
                {['LinkedIn', 'Github', '𝕏 Command', 'Venture Index'].map((net) => (
                  <button 
                    key={net}
                    onClick={() => alert(`Redirecting to securely verified ZIAN AI ${net} platform...`)}
                    className="px-3 py-2 bg-[#0c1224] border border-zinc-850 hover:border-brand-cyan/20 rounded-md text-[10px] text-zinc-400 font-mono hover:text-white transition-all cursor-pointer"
                  >
                    {net}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-display font-medium text-white text-xs uppercase tracking-widest mb-6 font-mono">// SIGNAL BULLETIN</h5>
              <p className="text-xs text-zinc-500 mb-4 leading-relaxed font-light italic">
                Secure subscriber bulletin summarizing global AI transition workflows.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-[#040814] border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:border-brand-cyan focus:outline-none w-full font-mono"
                />
                <button 
                  onClick={() => alert("Secure subscription acknowledged. Stream linked.")}
                  className="bg-brand-cyan hover:bg-brand-blue text-[#040814] px-3.5 rounded transition-transform hover:scale-105"
                >
                  &rarr;
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-zinc-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} ZIAN AI VENTURES LTD. ALL RIGHTS RESERVED SECTORS CORP.</p>
            <p className="text-zinc-600">Built for AI-Native Operators by <span className="text-brand-cyan font-bold font-display">ZIAN AI &bull; DeepSpace</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
