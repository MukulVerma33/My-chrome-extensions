var contextMenuItem = {
    "id": "ConverttoIsl",
    "title": "Convert Text to ISL",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="ConverttoIsl" && clickData.selectionText){
        if(clickData.selectionText){
            chrome.storage.sync.get(['YourText'],function(Text){
                /*var newText='';
                newText += (clickData.selectionText);*/
                /*chrome.storage.sync.set({'YourText': newText});*/
                window.open("http://islfromtext.in/avatarnewpp.php?texting="+clickData.selectionText);              
            });
        }
    }
});


