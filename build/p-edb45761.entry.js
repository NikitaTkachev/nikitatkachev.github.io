import{r as t,c as o,w as i,h as s,H as n,a as e}from"./p-015335ef.js";import{c as a,g as r}from"./p-f3493906.js";import{p as h}from"./p-c5a29178.js";import{c as l,h as c}from"./p-7840618d.js";const d=class{constructor(i){t(this,i),this.ionChange=o(this,"ionChange",7),this.ionSelect=o(this,"ionSelect",7),this.ionStyle=o(this,"ionStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const o=t.target,i=this.checked;this.value=o.value,this.scrollable&&(i?this.checkButton(i,o):this.setCheckedClasses()),this.checked=o}}colorChanged(t,o){(void 0===o&&void 0!==t||void 0!==o&&void 0===t)&&this.emitStyle()}valueChanged(t,o){this.ionSelect.emit({value:t}),(""!==o||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const o of t)o.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await import("./p-101feae9.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const o=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),o&&this.addRipple(t);const i=this.valueAfterGesture;void 0!==i&&(this.ionChange.emit({value:i}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!a.getBoolean("animated",!0)||!a.getBoolean("rippleEffect",!0))return;const o=this.getButtons().find((t=>t.value===this.value)),i=(o.shadowRoot||o).querySelector("ion-ripple-effect");if(!i)return;const{x:s,y:n}=h(t.event);i.addRipple(s,n).then((t=>t()))}setActivated(t){this.getButtons().forEach((o=>{t?o.classList.add("segment-button-activated"):o.classList.remove("segment-button-activated")})),this.activated=t}activate(t){const o=t.event.target,i=this.getButtons().find((t=>t.value===this.value));"ION-SEGMENT-BUTTON"===o.tagName&&(i||(this.value=o.value,this.setCheckedClasses()),this.value===o.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,o){const s=this.getIndicator(t),n=this.getIndicator(o);if(null===s||null===n)return;const e=s.getBoundingClientRect(),a=n.getBoundingClientRect(),r=`translate3d(${e.left-a.left}px, 0, 0) scaleX(${e.width/a.width})`;i((()=>{n.classList.remove("segment-button-indicator-animated"),n.style.setProperty("transform",r),n.getBoundingClientRect(),n.classList.add("segment-button-indicator-animated"),n.style.setProperty("transform","")})),this.value=o.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),o=t.findIndex((t=>t.value===this.value))+1;this.checked=t.find((t=>t.value===this.value));for(const o of t)o.classList.remove("segment-button-after-checked");o<t.length&&t[o].classList.add("segment-button-after-checked")}setNextIndex(t,o=!1){const i="rtl"===document.dir,s=this.activated,n=this.getButtons(),e=n.findIndex((t=>t.value===this.value)),a=n[e];let r,h;if(-1===e)return;const l=a.getBoundingClientRect(),c=l.left,d=l.width,g=t.currentX,u=document.elementFromPoint(g,l.top+l.height/2);if(s&&!o){if(i?g>c+d:g<c){const t=e-1;t>=0&&(h=t)}else if((i?g<c:g>c+d)&&s&&!o){const t=e+1;t<n.length&&(h=t)}void 0===h||n[h].disabled||(r=n[h])}if(!s&&o&&(r=u),null!=r){if("ION-SEGMENT"===r.tagName)return!1;a!==r&&this.checkButton(a,r)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=r(this);return s(n,{onClick:this.onClick,class:l(this.color,{[t]:!0,"in-toolbar":c("ion-toolbar",this.el),"in-toolbar-color":c("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},s("slot",null))}get el(){return e(this)}static get watchers(){return{color:["colorChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};d.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};export{d as ion_segment}