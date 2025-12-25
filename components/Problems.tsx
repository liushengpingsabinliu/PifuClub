import React from 'react';
import { IconUserCheck, IconDatabase, IconNetwork, IconBrain } from './Icons';

const ProblemCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="p-6 rounded-2xl bg-pi-card border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/20 group">
    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-teal-400 group-hover:bg-teal-500/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Problems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            医美机构的<span className="text-teal-500">“数字化顽疾”</span>
          </h2>
          <p className="text-slate-400 text-lg">
            为什么买了那么多SaaS系统，机构的运营效率依然没有本质提升？
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProblemCard 
            title="“名医/金牌咨询”依赖症" 
            desc="核心话术与诊疗方案锁死在个别员工脑中。员工离职，经验清零，新人培训周期长，标准化复制极难。"
            icon={<IconUserCheck />}
          />
          <ProblemCard 
            title="SaaS只是“记账本”" 
            desc="现有的HIS/CRM只能记录“发生了什么”，无法利用数据反哺业务，告诉老板“为什么发生”以及“接下来该做什么”。"
            icon={<IconDatabase />}
          />
           <ProblemCard 
            title="扩张导致的稀释" 
            desc="连锁扩张时，管理标准和服务质量随着层级稀释，导致“连而不锁”，单店盈利模型难以在异地完美复刻。"
            icon={<IconNetwork />}
          />
           <ProblemCard 
            title="凭直觉决策" 
            desc="投放渠道选择、品项引进、库存管理往往拍脑袋决定，缺乏全链路数据支撑的精细化测算。"
            icon={<IconBrain />}
          />
        </div>
      </div>
    </section>
  );
};

export default Problems;