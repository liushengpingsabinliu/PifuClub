import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Pi Gang · 皮港</h2>
            <p className="max-w-xs mb-6">
              医疗美容机构的“AI联合创始人”与智能操作系统。<br/>
              将物理世界的业务逻辑代码化，把冰冷的技术变成滚烫的业绩。
            </p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">WX</span>
              <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer">IN</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">解决方案</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 cursor-pointer">数据本体 Ontology</li>
              <li className="hover:text-teal-400 cursor-pointer">私有化 RAG</li>
              <li className="hover:text-teal-400 cursor-pointer">AI Agent 智能体</li>
              <li className="hover:text-teal-400 cursor-pointer">驻场交付 FDE</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>网址: pifu.club</li>
              <li>邮箱: contact@pifu.club</li>
              <li>地址: 北京市朝阳区...</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Pi Gang Tech. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;