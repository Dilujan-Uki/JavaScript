export class Tv{
    private tChannel:number;
    private tVolumeLevel:number;
    private tOn:boolean;

    constructor(channel:number,volumeLevel:number,on:boolean){
        this.tChannel=channel;
        this.tVolumeLevel=volumeLevel;
        this.tOn=on;
    }

    public setTvOn(on:boolean){
        this.tOn=on;
    }

    public setNewChannel(channel:number){
        this.tChannel=channel
    }

    public setVolumeLevel(volumeLevel:number){
        this.tVolumeLevel=volumeLevel;
    }

    public getTvOn(){
        return this.tOn;
    }
    
    public getNewChannel(){
        return this.tChannel;
    }

    public getVolumeLevel(){
        return this.tVolumeLevel;
    }
}