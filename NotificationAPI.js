function showDesktopNotification(){


    // Create new instance of notification and customize it
    const notification = new Notification("some content here",{
        body:'bonjour tout le monde, comment allez-vouz ?',
        icon:'https://i.pinimg.com/originals/c2/10/c3/c210c3b8cd91abbea6e566839249364f.jpg'
    });

    //handle onclick event
    notification.onclick=(e)=>{
        window.location.href = 'https://google.com';
    }
}

if (Notification.permission === 'granted')

    {
      //invoke the function
      showDesktopNotification();

    }
else 

if (Notification.permission !== 'denied')

    {

        //asking for user permission

        Notification.requestPermission().then(permission=>{

            //activate next block of code only if permission is granted

            if(permission === 'granted')
            {    //invoke the function
                showDesktopNotification();
            }
        });
    }