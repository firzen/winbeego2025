
import React, { useEffect, useRef } from "react";
import { Truck, Package, Map, Calendar, Box, Archive } from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const services = [
    {
      icon: Box,
      title: "国际海运服务",
      description: "提供集装箱运输、散货运输、滚装运输等多种海运方式，满足不同类型货物的运输需求。",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Package,
      title: "国际空运服务",
      description: "为时效性要求高的货物提供快速、安全的空运服务，全球主要城市覆盖。",
      color: "bg-amber-100 text-amber-700"
    },
    {
      icon: Truck,
      title: "仓储与配送",
      description: "提供专业的仓储管理、库存控制、订单处理和配送服务，优化您的供应链。",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Map,
      title: "跨境电商物流",
      description: "为电商企业提供一站式跨境物流解决方案，包括清关、仓储和最后一公里配送。",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Calendar,
      title: "行李回家",
      description: "无需繁琐资料和申办手续，为放假回国，商务返回等提供最便捷的行李承运服务，轻松回家。",
      color: "bg-red-100 text-red-700"
    },
    {
      icon: Archive,
      title: "供应链咨询",
      description: "专业团队为您提供供应链优化建议，降低成本，提高运营效率。",
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <section id="服务" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-logistics-50 opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-logistics-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-logistics-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 section-fade-in">
          <span className="px-4 py-2 bg-logistics-100 text-logistics-800 rounded-full text-sm font-medium mb-4 inline-block">
            我们的服务
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            全方位的物流<span className="text-gradient">解决方案</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            根据您的业务需求，我们提供完整的物流服务链，从规划到执行，全程专业支持。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animated-card section-fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 flex items-center justify-center ${service.color} rounded-xl mb-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center section-fade-in">
          <a 
            href="#contact" 
            className="inline-block bg-logistics-600 hover:bg-logistics-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
          >
            咨询定制方案
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
