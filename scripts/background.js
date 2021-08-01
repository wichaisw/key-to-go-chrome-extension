chrome?.tabs?.onActivated.addListener(tab => {
  console.log("tab: ")
  console.log(tab)
  chrome.tabs.get(tab.tabId, current_tab_info => {
    console.log(current_tab_info.url)
  });
  chrome.tabs.executeScript(
    null, 
    { file: './scripts/keyListener.js' },
    () => { console.log("injected")}
  );

});
