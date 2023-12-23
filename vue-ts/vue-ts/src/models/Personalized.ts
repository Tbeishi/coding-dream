//UI需求和后端的接口
export interface Personalized{
    Id:number;
    Type:number;
    name:string;
    copywrite:string;
    picUrl:string;
    canDislike:boolean;
    trackNumberUpdateTime:number;
    playCount:number;
    trackCount:number;
    highQuality:boolean;
    alg:string;
}