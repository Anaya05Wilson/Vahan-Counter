function increment(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
  }

  function decrement(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    if (count > 0) { // Ensure count doesn't go below 0
      count--;
      countElement.textContent = count;
    }
  }
  
  function resetCounts() {
    const counts = ["pedestrian-count", "bicycle-count", "motor-count", "auto-count", "light-count", "heavy-count" ];
    counts.forEach(id => {
      document.getElementById(id).textContent = "0";
    });
  }