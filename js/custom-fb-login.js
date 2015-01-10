  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log("statusChangeCallback" + response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {

    	window.location.href = "home.html";
    	
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    console.log("checking log");
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '776198329083699',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    console.log("accessToken: "+response.authResponse.accessToken);
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        document.getElementById('profileData').innerHTML = "<B>JSon Response : Profile Data </B><br />" + JSON.stringify(response);
    });

    readProfilePic();
    readFeeds();
    readFeedLinks();
    readFeedPosts();
    readFeedStatuses();
    readFeedTagged();

  }// end of testAPI

  function readProfilePic(){
    console.log("Loading Profile Pic");
  FB.api(
    "/me/picture",
    {
        "redirect": false,
        "height": "200",
        "type": "normal",
        "width": "200"
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        document.getElementById('profilePic').innerHTML = "<B>JSon Response : Profile PIC </B><br />" + JSON.stringify(response);

      }
    }
    );
  }


  function readFeeds(){
    console.log("Loading news feeds");
    FB.api(
    "/me/feed",
    function (response) {
      if (response && !response.error) {
        document.getElementById('profileFeeds').innerHTML = "<B> JSon Response : Profile Feeds </B><br />" + JSON.stringify(response);
      }
    }
);
  }

    function readFeedLinks(){
    console.log("Loading feeds : Links");
    FB.api(
    "/me/links",
    function (response) {
      if (response && !response.error) {
        document.getElementById('profileLinks').innerHTML = "<B> JSon Response : Profile Feeds : Links </B><br />" + JSON.stringify(response);
      }
    }
    );
  }

    function readFeedPosts(){
    console.log("Loading feeds : Posts");
    FB.api(
    "/me/posts",
    function (response) {
      if (response && !response.error) {
        document.getElementById('profilePosts').innerHTML = "<B> JSon Response : Profile Feeds : Posts </B><br />" + JSON.stringify(response);
      }
    }
    );
  }

    function readFeedStatuses(){
    console.log("Loading feeds : Statuses");
    FB.api(
    "/me/statuses",
    function (response) {
      if (response && !response.error) {
        document.getElementById('profileFeeds').innerHTML = "<B> JSon Response : Profile Feeds : Status </B><br />" + JSON.stringify(response);
      }
    }
    );
  }

        function readFeedTagged(){
    console.log("Loading feeds : Tagged ");
    FB.api(
    "/me/tagged ",
    function (response) {
      if (response && !response.error) {
        document.getElementById('profileTagged').innerHTML = "<B> JSon Response : Profile Feeds : Tagged</B><br />" + JSON.stringify(response);
      }
    }
    );
  }