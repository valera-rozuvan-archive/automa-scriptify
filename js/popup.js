// Popup.js

window.onload = function () {
    chrome.extension.getBackgroundPage()
        .console.log('[popup.js]: Window loaded.');

    document.getElementById('button').onclick = function () {
        console.log('[popup.js]: Button clicked.');

        chrome.extension.sendMessage({
            type: 'color-divs'
        });
    };
};
