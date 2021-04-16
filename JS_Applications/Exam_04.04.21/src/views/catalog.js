import { html } from "../../node_modules/lit-html/lit-html.js";

import { getAll } from "../api/data.js";


const catalogTemplate = (data) => html`
    <section id="catalog-page" class="content catalogue">
        <h1>All Articles</h1>
        ${data.length == 0
        ? html`<h3 class="no-articles">No articles yet</h3>`
        : data.map(articleTemplate)}        
    </section>`;

const articleTemplate = (a) => html`
    <a class="article-preview" href="/details/${a._id}">
        <article>
            <h3>Topic: <span>${a.title} </span></h3>
            <p>Category: <span>${a.category} </span></p>
        </article>
    </a>`;

export async function catalogPage(ctx) {
    const data = await getAll();
    ctx.render(catalogTemplate(data));
}