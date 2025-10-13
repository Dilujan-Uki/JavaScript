"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
class Tv {
    tChannel;
    tVolumeLevel;
    tOn;
    constructor(channel, volumeLevel, on) {
        this.tChannel = channel;
        this.tVolumeLevel = volumeLevel;
        this.tOn = on;
    }
    setTvOn(on) {
        this.tOn = on;
    }
    setNewChannel(channel) {
        this.tChannel = channel;
    }
    setVolumeLevel(volumeLevel) {
        this.tVolumeLevel = volumeLevel;
    }
    getTvOn() {
        return this.tOn;
    }
    getNewChannel() {
        return this.tChannel;
    }
    getVolumeLevel() {
        return this.tVolumeLevel;
    }
}
exports.Tv = Tv;
//# sourceMappingURL=tv.js.map