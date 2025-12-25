import React, { useState } from 'react';
import { AgentRole } from '../types';
import { IconBot, IconArrowRight } from './Icons';

const agents: AgentRole[] = [
  {
    id: 'consultant',
    role: '咨询师 Copilot',
    title: 'The Closer',
    description: '实时监听对话，利用RAG调取类似成功案例，推荐最优成交话术和方案。解决新人不会谈单、过度承诺等问题。',
    tools: ['查询私有案例库', '库存/排班实时查询', '智能报价单生成', '话术实时推荐'],
    workflow: '监听对话 -> 识别意图(嫌贵) -> 检索金牌话术 -> 推荐回复'
  },
  {
    id: 'doctor',
    role: '医生 Copilot',
    title: 'The Co-pilot',
    description: '辅助书写病历，自动核查禁忌症，推荐联合治疗方案。释放医生精力，专注于医疗交付本身。',
    tools: ['病历自动生成', '禁忌症自动风控', '联合治疗方案推荐', '术后随访计划生成'],
    workflow: '医生口述 -> 提取关键信息 -> 校验健康档案 -> 生成合规病历'
  },
  {
    id: 'ceo',
    role: 'CEO Copilot',
    title: 'The Analyst',
    description: '每日自动生成经营诊断日报，预警现金流风险和库存积压。不再看枯燥的报表，直接看“洞察”和“建议”。',
    tools: ['自然语言查库(Text-to-SQL)', '经营异常检测', '库存积压预警', 'ROI自动测算'],
    workflow: '数据巡检 -> 发现异常(库存积压) -> 根因分析 -> 推送处理建议'
  }
];

const AgentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
         <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">岗位级 AI 赋能</h2>
            <p className="text-slate-400">针对医美机构核心岗位打造的专属智能体</p>
         </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-slate-800 border-teal-500 shadow-lg shadow-teal-900/20'
                    : 'bg-transparent border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                    <span className={`text-lg font-bold ${activeTab === index ? 'text-teal-400' : 'text-slate-300'}`}>
                        {agent.role}
                    </span>
                    {activeTab === index && <IconArrowRight className="w-5 h-5 text-teal-500" />}
                </div>
                <p className="text-sm text-slate-500">{agent.title}</p>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:w-2/3">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-teal-500/20 rounded-lg text-teal-400">
                            <IconBot className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{agents[activeTab].role}</h3>
                            <p className="text-slate-400 text-sm">Codename: {agents[activeTab].title}</p>
                        </div>
                    </div>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        {agents[activeTab].description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-teal-500 font-bold uppercase text-xs tracking-wider mb-4">Available Tools</h4>
                            <ul className="space-y-3">
                                {agents[activeTab].tools.map((tool, i) => (
                                    <li key={i} className="flex items-center text-slate-300 text-sm bg-slate-900/50 p-2 rounded border border-slate-700">
                                        <span className="text-teal-500 mr-2">⚡</span> {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                             <h4 className="text-teal-500 font-bold uppercase text-xs tracking-wider mb-4">Agent Workflow</h4>
                             <div className="bg-slate-900/50 p-4 rounded border border-slate-700 text-slate-300 text-sm font-mono">
                                {agents[activeTab].workflow}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;