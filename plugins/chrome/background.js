chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.vijf.be'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

chrome.webRequest.onBeforeRequest.addListener(
    details => captureStreamingUrls(details),
    { urls: ["https://*.telenet-ops.be/*"] },
    []
);

const captureStreamingUrls = (request) => console.log(request.url)
