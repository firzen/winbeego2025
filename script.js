
document.addEventListener('DOMContentLoaded', function() {
  // 初始化 Lucide 图标
  lucide.createIcons();
  
  // 设置当前年份
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // 导航栏滚动效果
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('py-3', 'bg-white/90', 'backdrop-blur-md', 'shadow-md');
      navbar.classList.remove('py-5', 'bg-transparent');
    } else {
      navbar.classList.add('py-5', 'bg-transparent');
      navbar.classList.remove('py-3', 'bg-white/90', 'backdrop-blur-md', 'shadow-md');
    }
  });
  
  // 返回顶部按钮
  const backToTopButton = document.getElementById('back-to-top');
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 移动菜单功能
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  });
  
  closeMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    });
  });
  
  // 滚动淡入效果
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section-fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // 英雄区域淡入
  setTimeout(() => {
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
      heroContent.classList.remove('opacity-0');
      heroContent.classList.add('opacity-100');
    }
  }, 300);
  
  // 联系表单提交
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const contactSuccess = document.getElementById('contact-success');
  const returnFormButton = document.getElementById('return-form-button');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 按钮状态：加载中
      submitButton.textContent = '提交中...';
      submitButton.disabled = true;
      submitButton.classList.add('opacity-70', 'cursor-not-allowed');
      
      // 模拟表单提交（1.5秒后显示成功消息）
      setTimeout(() => {
        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        contactSuccess.classList.add('block');
        
        // 清空表单
        contactForm.reset();
        
        // 重置按钮状态
        submitButton.textContent = '提交咨询';
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
      }, 1500);
    });
  }
  
  if (returnFormButton) {
    returnFormButton.addEventListener('click', function() {
      contactSuccess.classList.add('hidden');
      contactSuccess.classList.remove('block');
      contactForm.classList.remove('hidden');
    });
  }
});
