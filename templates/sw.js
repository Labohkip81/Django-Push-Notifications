//Register event listener for the push event
self.addEventListener('push', function(event){
    //Retrieve the textual payload from event.data (a Push MessageData object).
    //Other formats are supported (ArrayBuffer, Blob, JSON), Check out the documentation
    const eventInfo = event.data.text();
    const data = JSON.parse(eventInfo);
    const head = data.head || 'New Notification !!';
    const body = data.body || 'This is default content. Your notification did not have one :)';

    // Keep the service worker alive until the notification is created
    event.waitUntil(
        self.ServiceWorkerRegistration.showNotification(head,{
            body: body,
            icon: "https://i.imgur.com/MZM3K5w.png"
        })
    );
});