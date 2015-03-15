// background.js

chrome.extension.getBackgroundPage()
    .console.log('[background.js]: Starting.');

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch(request.type) {
            case 'color-divs':
                colorDivs();
            break;
        }

        return true;
    }
);

function colorDivs() {
    chrome.extension.getBackgroundPage()
        .console.log('[background.js]: Starting colorDivs().');

    // Send a message to the content script.
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendMessage(
            tab.id,
            {type: 'colors-div', color: '#F00'}
        );
    });
}
