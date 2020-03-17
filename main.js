
/**JavaScript */
// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);

/**Jquery */

let contentsParent = contents.parent();
contentsParent.prepend($('<img  src="images/">'))
let contents = $('#contents');
contents.remove();