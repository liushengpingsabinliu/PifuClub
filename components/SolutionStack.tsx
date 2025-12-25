import React from 'react';
import { IconLayers, IconDatabase, IconBot, IconUsers } from './Icons';

const Layer = ({ title, subtitle, items, color, icon }: { title: string; subtitle: string; items: string[]; color: string; icon: React.ReactNode }) => (
  <div className={`relative p-8 rounded-2xl border ${color} bg-slate-800/50 backdrop-blur-sm mb-6 overflow-hidden transition-all hover:translate-x-2`}>
    <div className="absolute top-0 right-0 p-4 opacity-10">
        {React.cloneElement(icon as React.ReactElement, { className: "w-24 h-24" })}
    </div>
    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
        <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                {icon} {title}
            </h3>
            <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    </div>
  </div>
);

const SolutionStack: React.FC = () => {
  return (
    <section className="py-24 bg-pi-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-bold tracking-widest text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            Pi-OS 医美智能操作系统
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            打破传统软件孤岛，通过四个步骤实现业务逻辑的“代码化”与“智能化”。
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-[16.66%] top-10 bottom-10 w-0.5 bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0 hidden md:block"></div>

            <Layer 
                title="数字化基建: The Ontology" 
                subtitle="构建数据本体，建立对象与关系的动态映射"
                color="border-blue-900/50 hover:border-blue-500/50"
                icon={<IconLayers className="w-6 h-6 text-blue-400" />}
                items={[
                    "连接HIS/CRM/WeCom数据孤岛",
                    "实体解析 (Entity Resolution)",
                    "物理世界对象映射 (Digital Twin)",
                    "动态关系网络 (Kinetic Graph)"
                ]}
            />

            <Layer 
                title="知识沉淀: Private RAG" 
                subtitle="机构专属的“第二大脑”，私有化检索增强生成"
                color="border-indigo-900/50 hover:border-indigo-500/50"
                icon={<IconDatabase className="w-6 h-6 text-indigo-400" />}
                items={[
                    "SOP/案例/论文向量化",
                    "混合检索 (关键词 + 语义)",
                    "多模态检索 (文本 + 影像)",
                    "数据不出本地/私有云"
                ]}
            />

            <Layer 
                title="决策辅助: AI Agents" 
                subtitle="主动思考的Copilot，而非被动问答"
                color="border-purple-900/50 hover:border-purple-500/50"
                icon={<IconBot className="w-6 h-6 text-purple-400" />}
                items={[
                    "咨询师 Agent (成交辅助)",
                    "医生 Agent (病历与风控)",
                    "CEO Agent (经营诊断)",
                    "主动任务执行与调用工具"
                ]}
            />

            <Layer 
                title="驻场交付: Forward Deployed" 
                subtitle="Palantir模式的核心，将技术转化为GMV"
                color="border-teal-900/50 hover:border-teal-500/50"
                icon={<IconUsers className="w-6 h-6 text-teal-400" />}
                items={[
                    "FDE 前驻工程师进场",
                    "脏数据清理与流程重塑",
                    "现场Prompt调优与模型迭代",
                    "以GMV结果为导向的联营"
                ]}
            />
        </div>
      </div>
    </section>
  );
};

export default SolutionStack;