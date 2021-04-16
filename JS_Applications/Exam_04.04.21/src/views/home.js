import { html } from "../../node_modules/lit-html/lit-html.js";

import { getRecent } from "../api/data.js";


const homeTemplate = (js, cSharp, java, python) => html`
    <section id="home-page" class="content">
        <h1>Recent Articles</h1>
        <section class="recent js">
            <h2>JavaScript</h2>
            ${js 
            ? html`
            <article>
                <h3>${js.title}</h3>
                <p>${js.content}</p>
                <a href="/details/${js._id}" class="btn details-btn">Details</a>
            </article>`
            : html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent csharp">
            <h2>C#</h2>
            ${cSharp 
            ? html`
            <article>
                <h3>${cSharp.title}</h3>
                <p>${cSharp.content}</p>
                <a href="/details/${cSharp._id}" class="btn details-btn">Details</a>
            </article>`
            : html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent java">
            <h2>Java</h2>
            ${java 
            ? html`
            <article>
                <h3>${java.title}</h3>
                <p>${java.content}</p>
                <a href="/details/${java._id}" class="btn details-btn">Details</a>
            </article>`
            : html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent python">
            <h2>Python</h2>
            ${python 
            ? html`
            <article>
                <h3>${python.title}</h3>
                <p>${python.content}</p>
                <a href="/details/${python._id}" class="btn details-btn">Details</a>
            </article>`
            : html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
    </section>`;

export async function homePage(ctx) {
    const data = await getRecent();
    const js = data.filter(a => a.category == 'JavaScript' || '')[0];
    const cSharp = data.filter(a => a.category == 'C#' || '')[0];
    const java = data.filter(a => a.category == 'Java' || '')[0];
    const python = data.filter(a => a.category == 'Python' || '')[0];
    
    ctx.render(homeTemplate(js, cSharp, java, python));
}