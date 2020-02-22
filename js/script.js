window.addEventListener('load', function(){
    var elm = document.getElementsByClassName("content");
    for (let i = 0; i<elm.length; i++){
        (function(n){
            elm[n].style.display="none";
        })(i);
    }

    document.body.style.visibility="visible";
}, false);

{
    let elm = document.getElementsByClassName('toggle');
    Array.prototype.forEach.call(elm, element => {
        element.addEventListener('click', (e) => {
            let article = e.target;
            while (article.nodeName != 'ARTICLE') {
                article = article.parentNode;
            }
            // nodeType 1 is ELEMENT_NODE
            let content = Array.prototype.map.call(article.childNodes, element => element)
                                             .find(node => node.nodeType == 1 && node.classList.contains('content'));
            content.style.display = (content.style.display == 'none') ? 'block' : 'none';
        });
    });
}
