export class DataBodyMeasurements {
  name:string='';
  dataArm:number=0;
  dataChest:number=0;
  dataWaist:number=0;
  dataHip:number=0;
  dataLeg:number=0;
  dataCalf:number=0;

  constructor(nameC:string, armC:number, chestC:number, waistC:number, hipC:number, legC:number, calfC:number )
  {
    this.name = nameC;
    this.dataArm = armC;
    this.dataChest= chestC;
    this.dataWaist = waistC;
    this.dataHip = hipC;
    this.dataLeg = legC;
    this.dataCalf = calfC;
  }
}
