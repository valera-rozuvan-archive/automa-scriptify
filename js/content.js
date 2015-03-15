// content.js

console.log('[content.js]: At the start.');

function exec(fn) {
    var script = document.createElement('script');

    script.setAttribute('type', 'application/javascript');
    script.textContent = '(' + fn + ')();';

    document.body.appendChild(script); // run the script
    document.body.removeChild(script); // clean up
}

chrome.extension.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch(message.type) {
            case 'colors-div':
                exec(function() {
                    console.log('[content.js]: In case "colors-div".');

                    jQuery('h2.nolinks').each(function (idx, val) {
                        if ($(val).html() === 'Debugging') {
                            $(val).append('... hello = )');
                        }
                    });
                });
            break;
        }
    }
);
