<script>
  // Retrieve the previous page from local storage
  var previousPage = localStorage.getItem('previousPage') || '';

  // Get the current page URL
  var currentPage = window.location.href;

  // Compare the current page with the previous page
  if (currentPage === previousPage) {
    // Trigger an event in Matomo for duplicate pages
    _paq.push(['trackEvent', 'Page', 'Duplicate', currentPage]);
  }

  // Store the current page as the previous page for the next visit
  localStorage.setItem('previousPage', currentPage);
</script>
