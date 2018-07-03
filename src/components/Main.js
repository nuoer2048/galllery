require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var imageDatas = require('../data/imageDatas.json');
/*
* 得到图片地址*/
    imageDatas = (function genImageUrl(imageUrlArr) {

    for(var i = 0; i<imageUrlArr.length;i++)
    {
        var singaleImageData = imageUrlArr[i];
        singaleImageData.imageURL = require('../images'+singaleImageData.fileName);
        imageUrlArr[i] = singaleImageData;
    }
    return imageUrlArr;
})(imageDatas);


//主的组件
var AppComponent = React.createClass({
    render:function () {
        return(
            <section className="stage">
                <section className="img-sec">

                </section>
                <nav className="controller-nav">

                </nav>
            </section>
        );
    }
});

AppComponent.defaultProps = {
};

export default AppComponent;
