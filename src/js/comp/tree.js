/**
 * @file card.js
 * @brief card component
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const FlowFrame = require('mofron-comp-flowframe');
const VisiClk = require('mofron-event-visiclick');
const Click = require('mofron-event-click');
const HrzPos = require('mofron-effect-hrzpos');

let thisobj = null;

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        get : () => {
            try {
                return new Tree({
                    layout         : new Margin('top', '0.2rem'),
                    effect         : [ new Fade([10, 400]) ],
                naviText       : new mf.Option({ size : '0.25rem' }),
                indexElem_func : (telm) => {
                    try {
                        let ret = new Frame({
                            child   : [
                                new Text({
                                    text      : telm.treeKey(),
                                    size      : '0.3rem',
                                    sizeValue : [ 'margin-top', '0.15rem' ],
                                    effect    : [ new HrzPos('center') ]
                                })
                            ],
                            event   : [ new Click((p1) => { p1.mainColor([190, 225,230]) }) ],
                            size    : [ '100%', '0.8rem' ],
                            color   : 'white',
                            flow    : new mf.Option({ speed : 400 })
                        });
                        ret.effect('Fade').delay(0, 200);
                        return ret;
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                kvElem_func : (telm) => {
                    try {
                        return new Frame({
                            child   : [
                                new Text({
                                    text      : telm.treeKey(),
                                    size      : '0.3rem',
                                    sizeValue : [ 'margin-top', '0.15rem' ],
                                    effect    : [ new HrzPos('center') ]
                                })
                            ],
                            size    : [ '100%', '0.8rem' ],
                            color   : 'white',
                            flow    : new mf.Option({ speed : 400 })
                        });
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            })
            } catch (e) {
                
            }
        }
    }
    module.exports = thisobj;
} catch (e) {
    console.error(e.stack);
    throw e;
}
/* end of file */
