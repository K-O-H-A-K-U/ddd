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
        element.addEventListener('click', e => toggle_move(e));
    });

    const toggle_move = event => {
        toggle_content(event.target).then(value => scroll_y(value));
    }

    const get_y = element => {
        return element.getBoundingClientRect().y;
    }

    const scroll_y = y => {
        window.scrollBy({
            top: y,
            behavior: 'smooth'
        })
    }
    const toggle_content = (target) => {
        let article = target;
        while (article.nodeName != 'ARTICLE') {
            article = article.parentNode;
        }
        // nodeType 1 is ELEMENT_NODE
        const content = Array.prototype.map.call(article.childNodes, element => element)
                                         .find(node => node.nodeType == 1 && node.classList.contains('content'));
        if (content.style.display == 'none') {
            Array.prototype.forEach.call(document.getElementsByClassName('content'), content => content.style.display = 'none');
            content.style.display = 'block';
            return Promise.resolve(get_y(article));
        } else {
            content.style.display = 'none'
            return Promise.resolve(get_y(document.getElementById('service')));
        }
    }
}
