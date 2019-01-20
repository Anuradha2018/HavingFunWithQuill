let toolbarOptions = [
    ['bold', 'italic', 'underine', 'strike'],
    ['blockquote', 'code-block']
];

let quill = new Quill('#editor', {
    modules: {
        toolbar:toolbarOptions
    },
    theme:'snow'
});