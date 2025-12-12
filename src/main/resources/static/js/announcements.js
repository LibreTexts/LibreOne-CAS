// announcements.js
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://one.libretexts.org/api/v1/announcements/global')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(json) {
        if (json.data && json.data.length > 0) {
          // Create banner container if it doesn't exist
          let bannerContainer = document.getElementById('announcement-banners');
          if (!bannerContainer) {
            bannerContainer = document.createElement('div');
            bannerContainer.id = 'announcement-banners';
            bannerContainer.style.position = 'fixed';
            bannerContainer.style.top = '0';
            bannerContainer.style.left = '0';
            bannerContainer.style.right = '0';
            bannerContainer.style.zIndex = '9999';
            document.body.insertBefore(bannerContainer, document.body.firstChild);
          }
          
          // Add each announcement as a banner
          json.data.forEach(function(announcement) {
            const banner = document.createElement('div');
            banner.className = 'announcement-banner';
            banner.style.backgroundColor = announcement.background_color;
            banner.style.color = '#ffffff';
            banner.style.padding = '10px 16px';
            banner.style.textAlign = 'center';
            banner.style.position = 'relative';
            banner.style.fontSize = '1rem';
            banner.style.fontWeight = '600';
            
            // Create content wrapper
            const contentWrapper = document.createElement('div');
            contentWrapper.innerHTML = announcement.content;
            contentWrapper.style.display = 'inline-block';
            contentWrapper.style.maxWidth = '90%';
            contentWrapper.style.fontSize = '1rem';
            contentWrapper.style.fontWeight = '600';
            
            
            banner.appendChild(contentWrapper);
            bannerContainer.appendChild(banner);
          });
          
          // Adjust body padding to account for fixed banners
          document.body.style.paddingTop = bannerContainer.offsetHeight + 'px';
        }
      })
      .catch(function(error) {
        console.error('Error fetching announcements:', error);
      });
  });
})();
