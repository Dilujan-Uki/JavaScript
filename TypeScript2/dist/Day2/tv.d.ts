export declare class Tv {
    private tChannel;
    private tVolumeLevel;
    private tOn;
    constructor(channel: number, volumeLevel: number, on: boolean);
    setTvOn(on: boolean): void;
    setNewChannel(channel: number): void;
    setVolumeLevel(volumeLevel: number): void;
    getTvOn(): boolean;
    getNewChannel(): number;
    getVolumeLevel(): number;
}
//# sourceMappingURL=tv.d.ts.map