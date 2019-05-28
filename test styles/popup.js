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
});/*
$(function(){
    $('#Convert').click(function(){
        chrome.storage.sync.get('YourText',function(Text){
            window.open("http://islfromtext.in/avatarnewpp.php?texting="+Text.YourText);  // Functionality for convert button
        })
    })
});
$(function(){
    $('#Clear').click(function(){
        chrome.storage.sync.set({'YourText':''},function(){
            var notifOptions = {
                type: 'basic',
                iconUrl: 'logo.png',
                title: 'Text Cleared!',
                message: 'Your Text was cleared!!'
            }
            chrome.notifications.create('resetNotif',notifOptions);  // Functionality of clear button
            $('#YourText').text('');
            $('#EnteredText').val('');
        });
    })
});*/