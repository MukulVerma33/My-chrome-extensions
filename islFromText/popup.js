$(function(){
    chrome.storage.sync.get(['YourText'],function(Text){
        $('#YourText').text(Text.YourText);
    })
        $('#Done').click(function(){
        chrome.storage.sync.get(['YourText'],function(Text){
            var newText='';
            var EnteredText = $('#EnteredText').val();
            if(EnteredText)
            {
                newText+=(EnteredText);
            }
            chrome.storage.sync.set({'YourText':newText});
            chrome.storage.sync.get('YourText',function(Text){
            window.open("http://islfromtext.in/avatarnewpp.php?texting="+Text.YourText);})
            $('#YourText').text(newText);
            $('#EnteredText').val('');
            chrome.storage.sync.set({'YourText':''},function(){
                $('#YourText').text('');
                $('#EnteredText').val('');
            });
        });
    });
});