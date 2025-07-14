function s(e){return new Promise(t=>setTimeout(t,e))}async function i(e=1e3,t,...n){return await s(e),t(...n)}export{i as s,s as t};
