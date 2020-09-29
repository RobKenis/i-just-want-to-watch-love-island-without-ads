let openVideo = document.getElementById('openVideo');
const VIDEO_PLAYER_URL = 'https://demo.theoplayer.com/test-your-stream-with-statistics';

openVideo.onclick = function(element) {
    chrome.storage.local.get('lastVideo', function(data) {
        window.open(`${VIDEO_PLAYER_URL}?url=${data['lastVideo']}`, '_blank');
    });
};
