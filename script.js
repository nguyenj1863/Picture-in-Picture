const videoElement = document.getElementById('video');
const displayBtn = document.getElementById('displayBtn');
const mediaBtn = document.getElementById('mediaBtn');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    videoElement.onloadedmetadata = () => {
        videoElement.pause();
    }
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        // Catch Error Here
        console.log('whoops, error here:', error);
    }
}

mediaBtn.addEventListener('click', async () => {
    // Disable mediaBtn
    mediaBtn.disabled = true;
    // Ask for Media
    await selectMediaStream();
    // Reset mediaBtn
    mediaBtn.disabled = false;
});

displayBtn.addEventListener('click', async () => {
    // Disable displayBtn
    displayBtn.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset displayBtn
    displayBtn.disabled = false;
});

