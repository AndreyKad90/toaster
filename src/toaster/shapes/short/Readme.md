```js
const ToasterShort = require('./toaster-short.component').default;

<div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
    <ToasterShort type="positive" message="Website URL copied"/>
    <ToasterShort type="warning" message="Outdated content"/>
    <ToasterShort type="negative" message="Import failed"/>
</div>
```
