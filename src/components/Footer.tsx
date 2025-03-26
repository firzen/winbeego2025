import React from "react";
import { Package, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Package className="h-6 w-6" />
              <span className="font-bold text-xl">翼蜂行</span>
            </div>
            <p className="text-gray-400 mb-6">
              翼蜂行：专业的物流解决方案提供商，为全球客户提供高效、可靠的物流服务。
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-logistics-600 hover:text-white transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5">服务</h3>
            <ul className="space-y-3">
              {[
                "国际海运",
                "国际空运",
                "仓储与配送",
                "跨境电商物流",
                "项目物流",
                "供应链咨询"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5">关于我们</h3>
            <ul className="space-y-3">
              {[
                "公司介绍",
                "发展历程",
                "企业文化",
                "核心优势",
                "新闻动态",
                "加入我们"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5">联系我们</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                上海市浦东新区世纪大道100号环球金融中心15楼
              </li>
              <li>
                <a href="tel:+86-400-123-4567" className="hover:text-white transition-colors">
                  +86 400-123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@freightnexus.com" className="hover:text-white transition-colors">
                  info@freightnexus.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} 翼蜂行. 保留所有权利。 | winbeego.com
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              服务条款
            </a>
            <button 
              onClick={scrollToTop}
              className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              回到顶部
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
