function increment(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count; // Update the displayed count
    saveCounts();
  }

  function decrement(id) {
    const countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    if (count > 0) { // Ensure count doesn't go below 0
      count--;
      countElement.textContent = count;
      saveCounts();
    }
  }
  
  function resetCounts() {
    const counts = ["pedestrian-count", "bicycle-count", "motor-count", "auto-count", "light-count", "heavy-count" ];
    counts.forEach(id => {
      document.getElementById(id).textContent = "0";
    });
    saveCounts();
  }

  // Function to save counts to localStorage
function saveCounts() {
    const counts = {
      pedastrian: document.getElementById("pedestrian-count").textContent,
      bicycle: document.getElementById("bicycle-count").textContent,
      motor: document.getElementById("motor-count").textContent,
      auto: document.getElementById("auto-count").textContent,
      light: document.getElementById("light-count").textContent,
      heavy: document.getElementById("heavy-count").textContent,
    };
    localStorage.setItem("counts", JSON.stringify(counts));
  }

  // Function to load counts from localStorage
function loadCounts() {
    const savedCounts = localStorage.getItem("counts");
    if (savedCounts) {
      const counts = JSON.parse(savedCounts);
      document.getElementById("pedestrian-count").textContent = counts.pedestrian;
      document.getElementById("bicycle-count").textContent = counts.bicycle;
      document.getElementById("motor-count").textContent = counts.motor;
      document.getElementById("auto-count").textContent = counts.auto;
      document.getElementById("light-count").textContent = counts.light;
      document.getElementById("heavy-count").textContent = counts.heavy;
    }
  }
  
  // Load counts when the page loads
  window.onload = loadCounts;

  // Function to clear localStorage
function clearStorage() {
    localStorage.removeItem("counts");
    alert("Saved data has been cleared.");
    resetCounts(); // Reset the displayed counts to 0
  }