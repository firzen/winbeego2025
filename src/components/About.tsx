import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const advantages = [
    "全球网络覆盖，200+国家和地区",
    "专业物流团队，平均15年行业经验",
    "先进的货物追踪系统，24/7实时监控",
    "定制化物流解决方案，满足特殊需求",
    "绿色环保理念，减少碳排放",
    "数字化转型，提高运营效率"
  ];

  return (
    <section id="关于我们" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-logistics-50 rounded-l-[100px] opacity-70" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-logistics-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 section-fade-in">
            <span className="px-4 py-2 bg-logistics-100 text-logistics-800 rounded-full text-sm font-medium mb-4 inline-block">
              关于翼蜂行
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              您值得信赖的<span className="text-gradient">物流合作伙伴</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              翼蜂行创立于2010年，是一家专注于提供综合物流解决方案的国际企业。十余年来，我们不断创新服务模式，优化物流网络，致力于为客户打造高效、可靠、透明的物流体验。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-logistics-600" />
                  </div>
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-logistics-700 font-medium hover:text-logistics-800 transition-colors group"
            >
              了解更多关于我们
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative section-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-logistics-200 w-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-logistics-800 text-lg font-medium">企业形象图片</span>
              </div>
            </div>
            <div className="absolute top-8 -right-8 w-64 h-64 bg-logistics-100 rounded-full -z-10 blur-lg opacity-80"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-logistics-50 rounded-full -z-10 blur-md opacity-80"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center section-fade-in">
          {[
            { number: "15+", label: "年行业经验" },
            { number: "200+", label: "全球网络覆盖" },
            { number: "5000+", label: "企业客户" },
            { number: "100万+", label: "年运输订单" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-logistics-700 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
