const debug = document.querySelector(".debug")

var CHROME = {}

var styleEnabled = true;

const button = document.getElementById('toggleButton');

function updateStatusIndicator() {

    const statusIndicator = document.querySelector(".statusIndicator")

    getTab()

            debug.innerHTML = CHROME.activTab_string

            const tabURL = CHROME.activTab.url

    if (tabURL.includes("streamelements.com")) {
        statusIndicator.style.background = 'green';                
    } else {
        statusIndicator.style.background = 'red';
    }

}






function updateSetting(data, value){
chrome.storage.sync.set({ data: value }, function() {
    console.log(`Value saved in storage ${data}: ` + value);
  });
}




 // Function to toggle the button state
 function toggleButtonState(updateStorage) {
    button.classList.toggle('enabled'); // Toggle the 'enabled' class
    button.textContent = button.classList.contains('enabled') ? 'ON' : 'OFF'; // Change text based on state

    if(!updateStorage) return;

    styleEnabled = !styleEnabled

    updateSetting("styleEnabled", styleEnabled)

}

// Add click event listener to toggle the button state
document.getElementById('toggleButton').addEventListener('click', toggleButtonState);







// Update the status indicator when the popup is loaded
setInterval(updateStatusIndicator, 500)

debug.innerHTML = "Loaded popup.js"

function getTab(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        var activeTab = tabs[0];
        var activeTabId = activeTab.id; // or do whatever you need

        CHROME.activTab = activeTab
        CHROME.activTab_string = JSON.stringify(activeTab)

      });

}