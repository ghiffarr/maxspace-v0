// Inject official v0 badge into bottom-right corner
(function() {
  // Create badge styles
  const style = document.createElement('style');
  style.textContent = `
    .v0-badge-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    
    .v0-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      text-decoration: none;
      color: #000;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.2s ease;
    }
    
    .v0-badge:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }
    
    .v0-badge-logo {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .v0-badge-container {
        bottom: 16px;
        right: 16px;
      }
      
      .v0-badge {
        padding: 8px 12px;
        font-size: 12px;
      }
      
      .v0-badge-logo {
        width: 16px;
        height: 16px;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Create badge HTML
  const container = document.createElement('div');
  container.className = 'v0-badge-container';
  container.innerHTML = `
    <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" class="v0-badge">
      <div class="v0-badge-logo">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="black" rx="4"/>
          <text x="50%" y="50%" font-size="14" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system">v0</text>
        </svg>
      </div>
      <span>Built with v0</span>
    </a>
  `;
  
  // Inject when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(container);
    });
  } else {
    document.body.appendChild(container);
  }
})();
