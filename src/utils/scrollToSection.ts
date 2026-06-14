export type Prefill={offer?:string;projectType?:string;activity?:string;message?:string};
export const setPrefill=(detail:Prefill)=>window.dispatchEvent(new CustomEvent('scalify:prefill',{detail}));
export const scrollToSection=(id:string,prefill?:Prefill)=>{if(prefill)setPrefill(prefill); const el=document.querySelector(id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'});};
