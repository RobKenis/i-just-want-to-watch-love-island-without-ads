let openVideo = document.getElementById('openVideo');

openVideo.onclick = function(element) {
    chrome.storage.local.get('lastVideo', function(data) {
        window.open(data['lastVideo'], '_blank');
    });
};
