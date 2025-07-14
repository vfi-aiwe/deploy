const n=r=>{if(!r)return{mainRewards:[],rewards:[]};const e=[...r.drop].sort((s,a)=>s.rate-a.rate);return{mainRewards:e.splice(0,2),rewards:e}};export{n as u};
