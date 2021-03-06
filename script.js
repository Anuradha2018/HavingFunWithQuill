let toolbarOptions = [
    ['bold', 'italic', 'underine', 'strike'],
    ['blockquote', 'code-block'],
    [{'header': [1,2.3,4,5,6,false]}],
    [{'list':'ordered'}, {'list': 'bullet'}],
    [ { 'script': 'sub'}, {'script': 'super'}],
    [{'indent': '-1'},{'indent': '+1'} ],
    [{'direction': 'rtl'}],
    [{'size':['small', false, 'large', 'huge']}],
    ['link', 'image', 'video', 'formula'],
    [{'color':[]}, {'background':  []}],
    [{'font': []}],
    [{'align':[]}],
];
let quill = new Quill('#editor', {
    modules: {
        toolbar:toolbarOptions
    },
    theme:'snow'
});
$('#saveDelta').click(function() {
    window.delta = quill.getContents();
    
})