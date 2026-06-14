export const calcRoi=(missed:number,value:number,rate:number)=>({monthly:missed*value,yearly:missed*value*12,recoverable:missed*value*rate/100});
