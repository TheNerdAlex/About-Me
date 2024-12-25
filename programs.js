// File Comment Example

// Search Bar

function search() {
    const input = document.getElementById('search-input').value;
    const resultsContainer = document.getElementById('results');
    
    if (input) {
        resultsContainer.innerHTML = `You searched for: ${input}`;
    } else {
        resultsContainer.innerHTML = 'Please enter a search term.';
    }
}

// Navbar

$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $("#myNavbar").toggleClass("collapse");
  });
});

npm install @floating-ui/dom
