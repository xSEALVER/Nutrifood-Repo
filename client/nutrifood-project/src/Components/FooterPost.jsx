import { Link } from 'react-router-dom';

function FooterPost() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-700 shadow-lg">
      <div className="flex justify-center items-center px-8 py-3">
        <div className="flex space-x-12">
          {/* Home Icon */}
          <Link 
            to="/journal" 
            className="text-black hover:text-blue-300 transition-colors duration-200"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.1l-8 7.2v10.7c0 1.1.9 2 2 2h4v-6h4v6h4c1.1 0 2-.9 2-2v-10.7l-8-7.2z"/>
            </svg>
          </Link>
          
          {/* Profile Icon */}
          <Link 
            to="/profile" 
            className="text-black hover:text-blue-300 transition-colors duration-200"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterPost;