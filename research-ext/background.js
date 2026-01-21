// Open side panel automatically when the extension icon is clicked
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// Fired when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Research Assistant extension installed");

  // Enable and register side panel globally
  chrome.sidePanel.setOptions({
    path: "sidepanel.html",
    enabled: true
  });
});
