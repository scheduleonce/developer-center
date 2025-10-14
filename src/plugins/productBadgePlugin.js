module.exports = function (context, options) {
  return {
    name: "product-badge-plugin",

    injectHtmlTags() {
      return {
        headTags: [],
        preBodyTags: [],
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `
              (function() {
                function enhanceBadges() {
                  const scalarContainer = document.querySelector('.scalar-api-reference');
                  if (!scalarContainer) {
                    return;
                  }
                  
                  const allStrong = scalarContainer.querySelectorAll('strong');
                  let count = 0;
                  
                  allStrong.forEach(function(strong) {
                    const text = strong.textContent || '';
                    
                    // Check if this strong element contains a badge
                    const hasBookingPages = text.includes('BOOKING PAGES ONLY');
                    const hasBookingCalendars = text.includes('BOOKING CALENDARS ONLY');
                    
                    if (hasBookingPages || hasBookingCalendars) {
                      // Apply badge styling directly to the strong element
                      const badgeClass = hasBookingPages 
                        ? 'product-badge product-badge--booking-pages'
                        : 'product-badge product-badge--booking-calendars';
                      
                      strong.className = badgeClass;
                      count++;
                    }
                  });
                  
                  // Only log if badges were found and styled
                  if (count > 0) {
                    console.debug('[ProductBadges] Styled ' + count + ' badges');
                  }
                }
                
                // Run on load
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', enhanceBadges);
                } else {
                  enhanceBadges();
                }
                
                // Run on route changes
                let lastPath = location.pathname;
                const observer = new MutationObserver(function() {
                  if (location.pathname !== lastPath) {
                    lastPath = location.pathname;
                    setTimeout(enhanceBadges, 500);
                  }
                });
                
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
                
                // Also run periodically for Scalar async rendering
                setInterval(enhanceBadges, 2000);
              })();
            `,
          },
        ],
      };
    },
  };
};
