
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Package, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <Package className="h-16 w-16 text-logistics-600" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">页面未找到</p>
        <p className="text-gray-600 mb-8">
          很抱歉，您访问的页面不存在或已被移除。
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-logistics-600 hover:bg-logistics-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </a>
      </div>
    </div>
  );
};

export default NotFound;
