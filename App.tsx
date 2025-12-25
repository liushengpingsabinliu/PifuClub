import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import SolutionStack from './components/SolutionStack';
import AgentShowcase from './components/AgentShowcase';
import BusinessModel from './components/BusinessModel';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-teal-500 selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            Pi<span className="text-teal-500">Gang</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#problems" className="hover:text-teal-400 transition-colors">痛点</a>
            <a href="#solution" className="hover:text-teal-400 transition-colors">Pi-OS架构</a>
            <a href="#agents" className="hover:text-teal-400 transition-colors">AI智能体</a>
            <a href="#business" className="hover:text-teal-400 transition-colors">商业模式</a>
          </div>
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-teal-900/50">
            预约演示
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <div id="problems">
          <Problems />
        </div>
        <div id="solution">
          <SolutionStack />
        </div>
        <div id="agents">
          <AgentShowcase />
        </div>
        
        {/* FDE Highlight Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-800">
             <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl font-bold text-white mb-6">Forward Deployed Engineers</h2>
                 <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10">
                    皮港的壁垒不仅仅是代码。我们派遣兼具技术与运营能力的<span className="text-teal-400 font-bold">FDE前驻工程师</span>深入机构现场。
                    <br/>
                    他们负责清理脏数据、调整AI模型参数、培训员工，直到系统真正融入业务流。
                 </p>
                 <div className="inline-block p-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500">
                    <div className="bg-slate-900 rounded-full px-8 py-3 text-white font-bold">
                        Only Outcome Matters
                    </div>
                 </div>
             </div>
        </section>

        <div id="business">
          <BusinessModel />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;