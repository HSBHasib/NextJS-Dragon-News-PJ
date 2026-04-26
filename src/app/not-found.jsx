import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

export const metadata = {
  title: "404 - Page Not Found | Dragon News",
};

const NotFound = () => {

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Section */}
        <div className="flex justify-center mb-5">
          <div className="p-6 bg-red-100 rounded-full animate-bounce">
            <FaExclamationTriangle className="text-red-600 text-5xl" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-8xl font-black text-gray-200 uppercase tracking-widest mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          The article or category you are looking for doesn't exist or has been moved. 
          Please check the URL or return to our homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-[#D72050] hover:bg-[#b01a42] text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-red-200 w-full sm:w-auto"
          >
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
