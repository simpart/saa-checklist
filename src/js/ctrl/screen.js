/**
 * @file template.js
 * @brief
 * @author 
 */
const mf   = require('mofron');
const Text = require('mofron-comp-text');
const Icon = require('mofron-comp-fontawesome');
const Screen = require('mofron-comp-screenswh');
const Click = require('mofron-event-click');

let thisobj = null;

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        icon : null,
        get  : () => {
            try {
                return new Screen([
                    new Icon({
                        icon   : 'expand',
                        size   : '0.3rem'
                    }),
                    new Icon({
                        icon   : 'compress',
                        size   : '0.3rem'
                    })
                ]);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        screen : () => {
            try {
                if (null === thisobj.icon) {
                    return;
                }
                if ('expand' === thisobj.icon.icon()) {
                    thisobj.icon.icon('compress');
                } else {
                    thisobj.icon.icon('expand');
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }
    module.exports = thisobj;
} catch (e) {
    console.error(e.stack);
    throw e;
}
/* end of file */
