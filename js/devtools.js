// devtools.js

chrome.devtools.panels.create(
    'AutomaScriptify',
    '../icons/38x38.png',
    '../html/devtools-index.html'
);

var port = chrome.extension.connect({ name: 'color-divs-port' });

    chrome.extension.getBackgroundPage()
            .console.log('[devtools.js]: Just started onload() function.');

    //document.getElementById('button2').onclick = function() {
        port.postMessage({ type: 'color-divs-2'});
    //};
