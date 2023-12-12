chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "downloadVideo") {
    let videoElement = document.querySelector("video");
    if (videoElement) {
      chrome.runtime.sendMessage({ url: videoElement.src });
    }
  }
});
