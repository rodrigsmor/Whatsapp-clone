export class MicrophoneController {
    constructor() {
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            this._mediaStream = new MediaStream(stream);
            
            let audio = new Audio();

            audio.srcObject = this._mediaStream;
            audio.play();
        }).catch(err => {
            console.error(err);
        });
    }
}