import React, { useState, useEffect } from "react";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
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

  return (
    <section id="联系我们" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-logistics-50 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 section-fade-in">
          <span className="px-4 py-2 bg-logistics-100 text-logistics-800 rounded-full text-sm font-medium mb-4 inline-block">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            准备开始您的<span className="text-gradient">物流之旅</span>？
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            填写下方表单，我们的物流专家将在24小时内与您取得联系，为您提供专业咨询。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 section-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">感谢您的咨询</h3>
                  <p className="text-gray-600 mb-6">我们已收到您的信息，我们的团队将尽快与您取得联系！</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-logistics-700 hover:text-logistics-800 font-medium transition-colors"
                  >
                    返回表单
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-logistics-500 focus:border-logistics-500 transition-colors"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-logistics-500 focus:border-logistics-500 transition-colors"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        电话
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-logistics-500 focus:border-logistics-500 transition-colors"
                        placeholder="请输入您的电话"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        公司
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-logistics-500 focus:border-logistics-500 transition-colors"
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      咨询内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-logistics-500 focus:border-logistics-500 transition-colors resize-none"
                      placeholder="请详细描述您的物流需求，以便我们为您提供更精准的解决方案"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-logistics-600 hover:bg-logistics-700 text-white px-6 py-3 rounded-lg font-medium transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "提交中..." : "提交咨询"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2 section-fade-in">
            <div className="bg-logistics-800 text-white rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">邮箱咨询</h4>
                    <p className="text-logistics-100">info@winbeego.com</p>
                    <p className="text-sm text-logistics-300 mt-1">全天候服务，我们会尽快回复</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">总部地址</h4>
                    <p className="text-logistics-100">广州市黄埔区鱼珠AI智慧港</p>
                    <p className="text-sm text-logistics-300 mt-1">西塔B220</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">全球分支机构</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>上海</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>广州</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>深圳</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>成都</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>香港</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-white/10 rounded-lg">
                    <span>纽约</span>
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

export default Contact;
