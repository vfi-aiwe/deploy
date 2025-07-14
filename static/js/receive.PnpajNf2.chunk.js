import{e6 as b,ef as C,eo as N,e7 as v,ea as l,ei as w,ek as u,en as f,ex as h,ec as k,em as $,e9 as A,ej as R}from"./index.BDWbwHp_.js";import{n as x,c as y,U as T,o as I,r as m}from"./if-defined.DwgRnjdE.chunk.js";import"./index.CWJ9d5et.chunk.js";import"./index.DZET-17b.chunk.js";import"./index.Bnxun2UK.chunk.js";const S=b`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var g=function(a,e,r,i){var s=arguments.length,t=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,r,i);else for(var n=a.length-1;n>=0;n--)(o=a[n])&&(t=(s<3?o(t):s>3?o(e,r,t):o(e,r))||t);return s>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends v{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e?.map(r=>l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};p.styles=[C,N,S];g([x({type:Array})],p.prototype,"networkImages",void 0);g([x()],p.prototype,"text",void 0);p=g([y("wui-compatible-network")],p);const O=b`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var d=function(a,e,r,i){var s=arguments.length,t=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,r,i);else for(var n=a.length-1;n>=0;n--)(o=a[n])&&(t=(s<3?o(t):s>3?o(e,r,t):o(e,r))||t);return s>3&&t&&Object.defineProperty(e,r,t),t};let c=class extends v{constructor(){super(),this.unsubscribe=[],this.address=w.state.address,this.profileName=w.state.profileName,this.network=u.state.activeCaipNetwork,this.preferredAccountTypes=w.state.preferredAccountTypes,this.unsubscribe.push(w.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):f.showError("Account not found")}),u.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=h.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${T.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${k.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${I(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=u.getAllRequestedCaipNetworks(),r=u.checkIfSmartAccountEnabled(),i=u.state.activeCaipNetwork;if(this.preferredAccountTypes?.[i?.chainNamespace]===$.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[h.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const t=(e?.filter(o=>o?.assets?.imageId)?.slice(0,5)).map(h.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${t}
    ></wui-compatible-network>`}onReceiveClick(){A.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(R.copyToClopboard(this.address),f.showSuccess("Address copied"))}catch{f.showError("Failed to copy")}}};c.styles=O;d([m()],c.prototype,"address",void 0);d([m()],c.prototype,"profileName",void 0);d([m()],c.prototype,"network",void 0);d([m()],c.prototype,"preferredAccountTypes",void 0);c=d([y("w3m-wallet-receive-view")],c);export{c as W3mWalletReceiveView};
