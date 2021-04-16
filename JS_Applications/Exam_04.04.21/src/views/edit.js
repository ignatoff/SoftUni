import { html } from "../../node_modules/lit-html/lit-html.js";

import { editArticle, getArticleById } from "../api/data.js";


const editTemplate = (a, onSubmit) => html`
    <section id="edit-page" class="content">
        <h1>Edit Article</h1>

        <form @submit=${onSubmit} id="edit">
            <fieldset>
                <p class="field title">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter article title" .value=${a.title}>
                </p>

                <p class="field category">
                    <label for="category">Category:</label>
                    <input type="text" name="category" id="category" placeholder="Enter article category" .value=${a.category}>
                </p>
                <p class="field">
                    <label for="content">Content:</label>
                    <textarea name="content" id="content" .value=${a.content}></textarea>
                </p>

                <p class="field submit">
                    <input class="btn submit" type="submit" value="Save Changes">
                </p>
            </fieldset>
        </form>
    </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const a = await getArticleById(id);

    ctx.render(editTemplate(a, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();
        const matcher = ['JavaScript', 'C#', 'Java', 'Python'];

        if (!title || !category || !content) {
            return alert('All fields are required!');
        }
        if (!matcher.includes(category)) {
            return alert('Category don\'t match! You can choose JavaScript, C#, Java or Python');
        }

        await editArticle(id, {title, category, content});

        ctx.page.redirect('/details/:id');
    }
}