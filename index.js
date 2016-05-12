function printMessage(fromUser, message) {
    var $chatWindow = $('#messages');
    var $user = $('<span class="username">').text(fromUser + ':');
    var $message = $('<span class="message">').text(message);
    var $container = $('<div class="message-container">');
    $container.append($user).append($message);
    $chatWindow.append($container);

    $chatWindow.scrollTop($chatWindow[0].scrollHeight);
}
function sendtext(channel){
    var $input = $('#chat-input');
    $input.on('keydown', function(e) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        if (e.keyCode == 13) {
            //alert($input.val());
            channel.join().then(function(channel) {
                channel.sendMessage($input.val())
                $input.val('');
            });
        }
    });
}

function get_channel(messagingClient, channel_name){
    messagingClient.getChannels().then(function(channels) {
        for (i=0; i<channels.length; i++) {
            var channel = channels[i];
    //              console.log('Channel: ' + channel.friendlyName);
            if(channel.uniqueName == channel_name){
                console.log(channel);
                sendtext(channel);
                channel.on('messageAdded', function(message) {
                    //alert(message);
                    printMessage(message.author, message.body);

                });
            }
        }
    });
    
}

function createchannel(){
    $('#messages').show();
    $('#chat-input').show();
    
    $.getJSON('./token.php',{
        identity: 'Gargi Pal',
        device: 'browser'
    },function(data) {
        console.log(data);
 
        // Alert the user they have been assigned a random username
//        username = data.identity;
//        print('Welcome To The Chat Room : ' 
//            + '<span class="me">' + username + '</span>', true);

        // Initialize the IP messaging client
        var accessManager = new Twilio.AccessManager(data.token);
        var messagingClient = new Twilio.IPMessaging.Client(accessManager);
        
//        messagingClient.createChannel({
//            uniqueName: 'subhadip1',
//            friendlyName: 'Test Chat Channel'
//        }).then(function(channel) {
//            console.log('Created test channel:');
//            console.log(channel);
//            sendtext(channel);
//        });
        get_channel(messagingClient, 'subhadip');
        
    });
}

$(function() {
    // Get handle to the chat div 
    var $chatWindow = $('#messages');

    // Manages the state of our access token we got from the server
    var accessManager;

    // Our interface to the IP Messaging service
    var messagingClient;

    // A handle to the "general" chat channel - the one and only channel we
    // will have in this sample app
    var generalChannel;

    var add_log=$('#add_log').val();
    // The server will assign the client a random username - store that value
    // here
    var username;

    // Helper function to print info messages to the chat window






    function print(infoMessage, asHtml) {
        var $msg = $('<div class="info">');
        if (asHtml) {
            $msg.html(infoMessage);
        } else {
            $msg.text(infoMessage);
        }
       
        $chatWindow.append($msg);
    }

    // Helper function to print chat message to the chat window
    

    // Alert the user they have been assigned a random username
    print('Logging in...');

    // Get an access token for the current user, passing a username (identity)
    // and a device ID - for browser-based apps, we'll always just use the 
    // value "browser"
//    $.getJSON('./token.php', {
//        identity: username,
//        device: 'browser'
//    }, function(data) {
//        console.log(data);
// 
//        // Alert the user they have been assigned a random username
//        username = data.identity;
//        print('Welcome To The Chat Room : ' 
//            + '<span class="me">' + username + '</span>', true);
//
//        // Initialize the IP messaging client
//        accessManager = new Twilio.AccessManager(data.token);
//        messagingClient = new Twilio.IPMessaging.Client(accessManager);

        // Get the general chat channel, which is where all the messages are
        // sent in this simple application
//        print('Attempting to join "general" chat channel...');
//        var promise = messagingClient.getChannelByUniqueName('general');
//
//        promise.then(function(channel) {
//
//            console.log(channel);
//
//             generalChannel = channel;
//
//            if (!generalChannel) {
//                
//                // If it doesn't exist, let's create it
//                messagingClient.createChannel({
//                    uniqueName: 'general',
//                    friendlyName: 'General Chat Channel'
//                }).then(function(channel) {
//                    console.log('Created general channel:');
//                    console.log(channel);
//                    generalChannel = channel;
//                    setupChannel();
//                });
//
//
//
//            } else {
//                
//                console.log('Found general channel:');
//                //alert(generalChannel);
//              //  var chat_history=generalChannel.messages;
//                console.log(generalChannel);
//               // console.log(chat_history.length);
//                
//               // console.log(generalChannel.messages);
//                // newchannel 
//
//        generalChannel.getMessages().then(function(messages) {
//        var totalMessages = messages.length;
//       
//        if(add_log==1){
//             print('Chat history');
//
//        for (i=0; i<messages.length; i++) 
//            {
//                var message = messages[i];
//                print('<span>'+message.author+":"+ message.body + '</span>', true);
//                console.log(message.author+":"+ message.body); 
//            }
//               console.log('Total Messages:' + totalMessages); 
//            }
//    
//            });
//                // newchannel  
//                setupChannel();
//                createchannel();
//            }
//        });
//    });




    // Set up channel after it has been found
    function setupChannel() {



        // Join the general channel
        generalChannel.join().then(function(channel) {
            print('Joined channel as ' 
                + '<span class="me">' + username + '</span>.', true);
        });

        // Listen for new messages sent to the channel
        generalChannel.on('messageAdded', function(message) {
            //alert(message);
            printMessage(message.author, message.body);

        });
    }

    // Send a new message to the general channel
    



});


