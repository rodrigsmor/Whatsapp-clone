export class CameraController {
    constructor(videoEl) {
        this._videoEl = videoEl;
    
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            this._mediaStream = new MediaStream(stream);
            this._videoEl.srcObject = this._mediaStream;
            this._videoEl.play();
        }).catch(err => {
            console.error(err);
        });
    }
    
    stop() {
        this._mediaStream.getTracks().forEach(track => {
            track.stop();
        });
    }
}