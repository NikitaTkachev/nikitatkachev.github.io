import{r as s,h as t,H as i}from"./p-015335ef.js";import{g as o}from"./p-f3493906.js";import"./p-c5a29178.js";import"./p-551b7a04.js";import"./p-d6720089.js";import{m as a}from"./p-6da9bb6e.js";import{u as n}from"./p-4f120fa2.js";const r=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await n(this.menu)}render(){const s=o(this),a=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":a?"true":null,class:{[s]:!0,"menu-toggle-hidden":a}},t("slot",null))}};r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}