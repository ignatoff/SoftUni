import { html } from "../../node_modules/lit-html/lit-html.js";

import { getArticleById, deleteArticle } from "../api/data.js";


const detailsTemplate = (a, isOwner, onDelete) => html`
    <section id="details-page" class="content details">
        <h1>${a.title} </h1>

        <div class="details-content">
            <strong>Published in category ${a.category} </strong>
            <p>${a.content}</p>

            <div class="buttons">
                ${ isOwner 
                ? html`<a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                <a href="/edit/${a._id}" class="btn edit">Edit</a>`
                : ''}
                <a href="/" class="btn edit">Back</a>
            </div>
        </div>
    </section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const a = await getArticleById(id);
    
    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(a, a._ownerId == userId, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article?');
        if (confirmed) {
            await deleteArticle(a._id);
            ctx.page.redirect('/');
        }
    }
}