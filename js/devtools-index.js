window.onload = function() {
    alert('Hello, world! onload');

    var res;

    chrome.devtools.inspectedWindow.getResources(function (_res) {
        res = _res;
    });

    document.getElementById('button2').onclick = function () {

        alert('Hello, world! onclick');

        chrome.extension.sendMessage({
            type: 'color-divs-2',
            res: res,
            inspectedWindow: chrome.devtools.inspectedWindow
        });
    };
};
