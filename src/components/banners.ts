import { reactive, watch, html } from "@arrow-js/core";

export default function banners() {
  return html`
  <div class="ol-span-1 2xl:col-span-2 h-600">  
    <h2>Banners</h2>
    <iframe class="airtable-embed w-full h-full" src="https://airtable.com/embed/shryxvWCTUs9vPzrh?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
