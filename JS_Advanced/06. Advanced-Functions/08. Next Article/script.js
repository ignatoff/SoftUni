function getArticleGenerator(articles) {
    const divElement = document.getElementById('content');
    
    function showNext() {
        
        if (articles.length > 0) {
            const info = articles.shift();
            const articleElement = document.createElement('article');
            articleElement.textContent = info;
            divElement.appendChild(articleElement);
        }         
    }
    return showNext;
}