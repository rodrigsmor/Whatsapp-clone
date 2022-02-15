class Format {
    static getCamelCase(text) {
        return text.replace(/-(\w)/g, (m, p1) => p1.toUpperCase());
    }

    static toTime(duration) {
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60) % 60));
        let hours = parseInt((duration / (1000 * 60 * 60) % 60));
        
        if(hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
}