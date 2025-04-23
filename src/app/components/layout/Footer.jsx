'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="py-8 text-sm border-t"
      style={{ 
        backgroundColor: '#000000', 
        color: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p>© {new Date().getFullYear()} Aashu on the Beat. All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="transition-colors"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="transition-colors"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              Terms of Use
            </Link>
            <Link 
              href="/cookies" 
              className="transition-colors"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 