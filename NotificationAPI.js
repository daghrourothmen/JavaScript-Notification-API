console.log(Notification.permission);


function showDesktopNotification(){

    const notification = new Notification("some content here",{
        body:'bonjour tout le monde, comment allez-vouz ?',
        icon:'https://i.pinimg.com/originals/c2/10/c3/c210c3b8cd91abbea6e566839249364f.jpg'
    });

    notification.onclick=(e)=>{
        window.location.href = 'https://google.com';
    }
}
if(Notification.permission === 'granted'){
   showDesktopNotification();
}else if(Notification.permission !== 'denied')
{
    Notification.requestPermission().then(permission=>{
        if(permission === 'granted'){
            showDesktopNotification();
        }
    });
}