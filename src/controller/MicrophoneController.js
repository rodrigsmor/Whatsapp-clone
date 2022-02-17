import { ClassEvent } from "../utils/ClassEvent";

export class MicrophoneController extends ClassEvent {
    constructor() {
        super();

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            this._mediaStream = new MediaStream(stream);
            
            let audio = new Audio();

            audio.srcObject = this._mediaStream;
            audio.play();

            this.trigger('play', audio);
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