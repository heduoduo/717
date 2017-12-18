import Vue from 'vue';
import _ from 'lodash';
let message = {
    install (Vue) {
        var that = this;
        Object.defineProperty(Vue.prototype, '$message', {
            value: function (msg) {
                that.init(msg);
            }
        });
    },
    init (msg) {
        let bodyEL = document.body;
        if (bodyEL.querySelector('.imessage')) {
            return;
        }
        let el = this.createElement('div', {class: 'imessage'}, [msg]);
        bodyEL.appendChild(el);
        el.addEventListener('webkitAnimationEnd', function () {
            bodyEL.removeChild(el);
        });
    },
    createElement (type, props = {}, children) {
        if (!_.isString(type)) {
            console.error('first argument must be string');
            return;
        }
        let el = document.createElement(type);
        if (!_.isObject(props)) {
            console.error('second argument must be object');
            return;
        }
        for (let i in props) {
            el.setAttribute(i, props[i]);
        }
        if (!_.isArray(children)) {
            console.error('third argument must be children');
            return;
        }
        if (children && children.length > 0) {
            children.forEach((item) => {
                if (_.isElement(item)) {
                    el.appendChild(item);
                } else if (_.isString(item)) {
                    el.innerText = item;
                } else {
                    console.warn('child must ba string or element');
                }
            });
        }
        return el;
    }
};
export default message;