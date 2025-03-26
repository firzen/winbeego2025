
import React, { useEffect, useRef } from "react";
import { ArrowRight, Package, Truck, Route } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-logistics-100 rounded-bl-[100px] opacity-80" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-logistics-50 rounded-tr-[100px] opacity-80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-logistics-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div 
        ref={heroRef}
        className="container px-4 mx-auto flex flex-col items-center text-center transition-opacity duration-1000 ease-out opacity-0"
      >
        <span className="px-4 py-2 bg-logistics-100 text-logistics-800 rounded-full text-sm font-medium mb-6 animate-fade-down">
          专业的物流解决方案提供商
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl leading-tight animate-fade-up">
          高效、<span className="text-gradient">可靠</span>的全球物流服务
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          我们提供端到端的物流解决方案，从仓储、运输到全程追踪，满足您的所有物流需求。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a 
            href="#contact" 
            className="bg-logistics-600 hover:bg-logistics-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            立即咨询
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#services" 
            className="bg-white hover:bg-gray-50 text-logistics-800 border border-gray-200 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-md"
          >
            了解服务
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: Package, title: "全球货物追踪", description: "实时监控您的货物位置" },
            { icon: Truck, title: "专业物流车队", description: "安全高效的货物运输" },
            { icon: Route, title: "最优路线规划", description: "智能化路线设计与优化" }
          ].map((item, index) => (
            <div key={index} className="glass p-6 rounded-2xl animated-card">
              <div className="w-12 h-12 flex items-center justify-center bg-logistics-100 rounded-xl mb-4 text-logistics-700">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
