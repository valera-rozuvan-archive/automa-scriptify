// background.js

chrome.extension.getBackgroundPage()
    .console.log('[background.js]: Starting.');

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch(request.type) {
            case 'color-divs':
                colorDivs();
                break;
            case 'color-divs-2':
                chrome.extension.getBackgroundPage()
                    .console.log('[background.js]: color-divs-2 message');
                chrome.extension.getBackgroundPage()
                    .console.log('[background.js]: res = ', request.res);
                chrome.extension.getBackgroundPage()
                    .console.log('[background.js]: inspectedWindow = ', request.inspectedWindow);

                chrome.tabs.get(request.inspectedWindow.tabId, function (tab) {
                    chrome.extension.getBackgroundPage()
                        .console.log('[background.js]: tab info = ', tab);
                });

                break;
        }

        return true;
    }
);

chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        switch (port.name) {
            case 'color-divs-port':
                // colorDivs();
                chrome.extension.getBackgroundPage()
                    .console.log('[background.js]: color-divs-port message');
                break;
        }
    });
});

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
