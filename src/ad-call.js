//create empty apntag object if it doesn't exist
var apntag = apntag || {};
//create a queue on the apntag object
apntag.anq = apntag.anq || [];
//load ast.js - async
(function() {
    var d = document, scr = d.createElement('script'), pro = d.location.protocol, tar = d.getElementsByTagName("head")[0];
    scr.type = 'text/javascript'; scr.async = true;
    scr.src = ((pro === 'https:') ? 'https' : 'http') + '://acdn.adnxs.com/ast/ast.js';
    if(!apntag.l){apntag.l=true; tar.insertBefore(scr, tar.firstChild);}
})();
//push commands to loading queue, to allow for async loading
apntag.anq.push(function() {
    //set global page options
    apntag.setPageOpts({
        member: 882,
        disablePsa: true,
        targetingParams: {
           
        }
    });
    //define ad tags
    apntag.defineTag({
        tagId: 12119864,
        sizes: [[1,1]],
        targetId: 'an-demo-ad',
        native: {
            title: {required: true, max_length: 140},
            body: {required: true, max_length: 300},
            image: {required: false},
            sponsoredBy: {required: true, max_length: 50},
            icon: {required:false, sizes: [{width: 300, height: 300}]},
            cta: {required:false}
        }
    });
    //start loading tags
    apntag.loadTags();
});