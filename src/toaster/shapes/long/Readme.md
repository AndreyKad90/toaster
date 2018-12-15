```js
const ToasterLong = require('./toaster-long.component').default;

<div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
    <ToasterLong 
        type="positive" 
        title="Content updated! Well done captain" 
        message="Hey, this is a random information about a good thing that happened."
    />
    <ToasterLong 
        type="warning" 
        title="Notification very important title" 
        message="Hey, this is a random information about a good thing that happened."
    />
    <ToasterLong 
        type="negative" 
        title="Notification very important title" 
        message="Hey, this is a random information about a good thing that happened."
    />
</div>
```
