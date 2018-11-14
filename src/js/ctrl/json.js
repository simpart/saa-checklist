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


require('tetraring4js');
let thisobj = null;
let current = null;
let frmopt  = (key) => {
    try {
        return {
            size      : ['100%', '0.8rem'],
            mainColor : [253, 253, 253],
            event     : new Click(
                (p1) => {
                    try {
                        let idxlst = p1.parent().child();
                        for (let idx in idxlst) {
                            idxlst[idx].visible(false);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            ),
            effect    : new Fade(),
            child     : new Text({
                size      : '0.3rem',
                text      : key,
                sizeValue : [ 'margin-top', '0.15rem' ],
                effect    : [ new HrzPos('center') ]
            }),
            visible       : false
        };
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        //conts : new mf.Component(),
        init  : (cnt) => {
            try {
                let loop = thisobj.listLoop;
                let pnt  = thisobj.conts;
                let root = app.root;
                ttrg.rest.get(
                    './conf/list.json',
                    null,
                    (p1) => {
                        try {
                            loop(p1, cnt);
                            root.visible(true);
                            
                            let cntchd = cnt.child()[0].child();
                            for (let cidx in cntchd) {
                                setTimeout(
                                    (p1) => { 
                                        try {
                                            p1.visible(true);
                                            p1.effect('Fade').execute(true);
                                        } catch (e) {
                                            console.error(e.stack);
                                            throw e;
                                        }
                                    },
                                    0.1 * 1000 * (parseInt(cidx)+1),
                                    cntchd[cidx]
                                );
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }
                    //thisobj.listcb
                );
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        card : (key, val) => {
            try {
                return new Frame(frmopt(key));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        index : (idx) => {
            try {
                return new Frame(frmopt(idx));
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        listLoop : (prm, conts) => {
            try {
                let lstwrp = new mf.Component({
                    effect : new Margin('top', '0.2rem')
                });
                conts.child(lstwrp);
                for (let pidx in prm) {
                    if ('string' === typeof prm[pidx]) {
                        // card
                        lstwrp.child(new thisobj.card(pidx));
                    } else {
                        // index
                        lstwrp.child(new thisobj.index(pidx));
                    }
                    //console.log(typeof prm[pidx]);
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
