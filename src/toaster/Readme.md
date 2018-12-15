```js
const Toaster = require('./toaster.component').default;
const ToasterService = require('./toaster.service').default;
const Button = require('../button').default;

const style = {
    root: {
        backgroundColor: '#e6ebee', 
        border: '1px #e8e8e8 solid'
    },
    toasterContainer: {
        height: '1em',
        marginBottom: '4em'
    },
    toasterButtons: {
        padding: '.5em',
        display: 'flex',
        justifyContent: 'space-around'
    }
};

<div style={style.root}>
    <div style={style.toasterContainer}>
        <Toaster />
    </div>
    
    <div style={style.toasterButtons}>
        <Button onClick={() => ToasterService.showPositiveBannerToaster('Some message')}>
            Positive banner toast
        </Button>
        <Button onClick={() => ToasterService.showWarningBannerToaster('Some warning message')}>
            Warning banner toast
        </Button>
        <Button onClick={() => ToasterService.showNegativeBannerToaster('Some error message')}>
            Negative banner toast
        </Button>
    </div>
    <div style={style.toasterButtons}>
        <Button onClick={() => ToasterService.showPositiveLongToaster('Some title', 'Some message')}>
            Positive long toast
        </Button>
        <Button onClick={() => ToasterService.showWarningLongToaster('Some title', 'Some warning message')}>
            Warning long toast
        </Button>
        <Button onClick={() => ToasterService.showNegativeLongToaster('Some title', 'Some error message')}>
            Negative long toast
        </Button>
    </div>
    <div style={style.toasterButtons}>
        <Button onClick={() => ToasterService.showPositiveShortToaster('Some message')}>
            Positive short toast
        </Button>
        <Button onClick={() => ToasterService.showWarningShortToaster('Some warning message')}>
            Warning short toast
        </Button>
        <Button onClick={() => ToasterService.showNegativeShortToaster('Some error message')}>
            Negative short toast
        </Button>
    </div>
  
</div>
```
