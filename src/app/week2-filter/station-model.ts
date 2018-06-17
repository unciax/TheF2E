export class StationModel {
    stationID: string;
    stationNo: string;
    stationPic: string;
    stationName: string;
    stationAddress: string;
    stationLat: number;
    stationLon: number;
    stationDesc: string;
    stationBike: number;
    stationSpace: number;

    convert(station) {

        if (!station) return;

        this.stationID = station.StationID[0];
        this.stationNo = station.StationNO[0];
        this.stationPic = station.StationPic3[0];
        this.stationName = station.StationName[0];
        this.stationAddress = station.StationAddress[0];
        this.stationLat = station.StationLat[0];
        this.stationLon = station.StationLon[0];
        this.stationDesc = station.StationDesc[0];
        this.stationBike = station.StationNums1[0];
        this.stationSpace = station.StationNums2[0]
    }

}