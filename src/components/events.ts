import { reactive, watch, html } from "@arrow-js/core";

export default function events() {
  return html`
  <div class="col-span-1 h-[100rem] flex flex-col">  
    <h2>Events</h2>
    <iframe class="airtable-embed flex-1" src="https://airtable.com/embed/shrnhVMltxFsLEYWu?backgroundColor=green&layout=card" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
