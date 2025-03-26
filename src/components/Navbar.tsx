
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Package, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-md" : "py-5 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-logistics-800 transition-opacity hover:opacity-80"
        >
          <Package className="h-6 w-6" />
          <span className="font-semibold text-xl">FreightNexus</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["首页", "服务", "关于我们", "联系我们"].map((item, index) => (
            <a
              key={index}
              href={`#${item === "首页" ? "hero" : item}`}
              className="text-gray-600 hover:text-logistics-700 transition-colors text-sm font-medium relative py-2 px-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-logistics-500 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-logistics-600 hover:bg-logistics-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            获取报价
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-8">
              <a href="#" className="flex items-center gap-2 text-logistics-800">
                <Package className="h-6 w-6" />
                <span className="font-semibold text-xl">FreightNexus</span>
              </a>
              <button 
                className="text-gray-700 p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {["首页", "服务", "关于我们", "联系我们"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item === "首页" ? "hero" : item}`}
                  className="text-gray-600 hover:text-logistics-700 transition-colors text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-logistics-600 hover:bg-logistics-700 text-white px-5 py-3 rounded-lg text-lg font-medium transition-colors mt-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                获取报价
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
