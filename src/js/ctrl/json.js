/**
 * @file template.js
 * @brief
 * @author 
 */
const mf = require('mofron');
const Frame = require('mofron-comp-frame');
const Text = require('mofron-comp-text');
const HrzPos = require('mofron-effect-hrzpos');
const VrtPos = require('mofron-effect-vrtpos');
const Fade   = require('mofron-effect-fade');
const Margin = require('mofron-layout-margin');
const Click = require('mofron-event-click');
const Flowmgn = require('mofron-effect-flowmgn');

const FlowFrame = require('mofron-comp-flowframe');
const VisiClk = require('mofron-event-visiclick');

const card = require('../comp/card.js');

require('tetraring4js');
let thisobj = null;
let current = null;


try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        init : (tree) => {
            try {
                let load = (p1) => {
                    try {
                        tree.load(p1); // load json
                        //tree.visible(true);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                /* get contents by GET method */
                ttrg.rest.get('./conf/list.json', null, load);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        addCard : () => {
            try {
                
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        next : () => {
            try {
                console.log("click");
                
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
