import React from 'react';
import { IconBrain, IconArrowRight } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-pi-card border border-slate-700 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-slate-300 text-sm font-medium tracking-wide">Pi Gang · 皮港</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          医美机构的
          <br />
          <span className="gradient-text">AI联合创始人</span>
          <span className="text-white"> & </span>
          <br />
          <span className="text-white">智能操作系统</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          我们不是卖SaaS软件，我们提供“Palantir式”的大数据治理与AI驻场交付。
          <br />
          构建机构专属的<span className="text-teal-400">RAG知识库</span>与<span className="text-teal-400">AI智能体</span>。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="group relative px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105">
            <span className="flex items-center space-x-2">
              <span>预约演示</span>
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 font-medium rounded-lg transition-colors">
            了解 Pi-OS 架构
          </button>
        </div>
        
        <div className="mt-20 border-t border-slate-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">Decision</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Intelligence</p>
            </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">Private</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">RAG Knowledge</p>
            </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">Agent</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Workflows</p>
            </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">Forward</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Deployed Ops</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;