import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IconTrendingUp, IconShield, IconPieChart } from './Icons';

const data = [
  { name: 'Month 1', Traditional: 100, PiGang: 100 },
  { name: 'Month 2', Traditional: 105, PiGang: 120 },
  { name: 'Month 3', Traditional: 108, PiGang: 150 },
  { name: 'Month 4', Traditional: 110, PiGang: 190 },
  { name: 'Month 5', Traditional: 112, PiGang: 240 },
  { name: 'Month 6', Traditional: 115, PiGang: 310 },
];

const BusinessModel: React.FC = () => {
  return (
    <section className="py-24 bg-pi-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            商业模式：<span className="gradient-gold">利益共同体</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            摒弃单纯的SaaS订阅，我们采用“建设费 + 联营分润”的高价值模式。
            <br/>我们敢于对结果负责。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-500">01</div>
                 <h3 className="text-xl font-bold text-white mb-2">系统部署与建设</h3>
                 <p className="text-teal-400 font-bold mb-4">Setup Fee (一次性)</p>
                 <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-start"><span className="mr-2">•</span>数据清洗与本体映射</li>
                    <li className="flex items-start"><span className="mr-2">•</span>私有RAG知识库搭建</li>
                    <li className="flex items-start"><span className="mr-2">•</span>本地化模型训练</li>
                    <li className="flex items-start"><span className="mr-2">•</span>业务SOP梳理</li>
                 </ul>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-500">02</div>
                 <h3 className="text-xl font-bold text-white mb-2">年度维护与资源</h3>
                 <p className="text-teal-400 font-bold mb-4">Subscription (按年)</p>
                 <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-start"><span className="mr-2">•</span>云资源与算力消耗</li>
                    <li className="flex items-start"><span className="mr-2">•</span>AI Token使用费</li>
                    <li className="flex items-start"><span className="mr-2">•</span>系统功能迭代</li>
                    <li className="flex items-start"><span className="mr-2">•</span>7x24h 线上支持</li>
                 </ul>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border border-amber-500/30">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-amber-500">03</div>
                 <h3 className="text-xl font-bold text-white mb-2">增量业绩分润</h3>
                 <p className="text-amber-400 font-bold mb-4">Revenue Share (联营)</p>
                 <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-start"><span className="mr-2 text-amber-500">★</span>激活沉睡客户</li>
                    <li className="flex items-start"><span className="mr-2 text-amber-500">★</span>AI辅助提升客单价</li>
                    <li className="flex items-start"><span className="mr-2 text-amber-500">★</span>设定基准线，抽取超额佣金</li>
                    <li className="flex items-start"><span className="mr-2 text-amber-500">★</span>利益绑定，共担风险</li>
                 </ul>
            </div>
        </div>

        {/* Chart Section */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-bold text-white">GMV 增长预测模型</h3>
                    <p className="text-slate-500 text-sm">皮港系统 vs 传统SaaS带来的业绩影响</p>
                </div>
                <div className="flex space-x-4 text-sm mt-4 md:mt-0">
                    <div className="flex items-center"><span className="w-3 h-3 bg-slate-600 rounded-full mr-2"></span>传统SaaS (记账本)</div>
                    <div className="flex items-center"><span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>皮港 Pi-OS (智能决策)</div>
                </div>
            </div>
            
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPi" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} 
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="Traditional" stroke="#64748b" strokeWidth={2} fillOpacity={0} fill="url(#colorTraditional)" />
                        <Area type="monotone" dataKey="PiGang" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorPi)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessModel;