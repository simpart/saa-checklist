/**
 * @file card.js
 * @brief card component
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const Frame = require('mofron-comp-flowframe');
const VisiClk = require('mofron-event-visiclick');
const Click = require('mofron-event-click');
const Hover = require('mofron-event-hover');
const HrzPos = require('mofron-effect-hrzpos');
const Font = require('mofron-effect-font');

const TurnCard = require('./TurnCard.js');

let thisobj = null;

try {
    if (null !== thisobj) {
        module.exports = thisobj;
    }

    thisobj = {
        mode  : 'next',
        back  : (tree) => {
            try {
                let tchd = tree.current().treeChild();
                for (let tidx in tchd) {
                    tchd[tidx].treeComp().flow().execOption({
                        value : ['-0.2rem', '0.2rem']
                    });
                }
                thisobj.mode = 'back';
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        next  : (tree) => {
            try {
                thisobj.mode = 'next';
                let tchd = tree.current().treeChild();
                for (let tidx in tchd) {
                    tchd[tidx].treeComp().flow().execOption({
                        value : ['0.2rem', '-0.2rem']
                    });
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        index : (telm) => {
            try {
                let ret = new Frame({
                    child   : [
                        new Text({
                            text      : telm.treeKey(),
                            size      : '0.3rem',
                            sizeValue : [
                                'margin-top',
                                ('mobile' === mofron.func.devType()) ? '0.2rem' : '0.15rem'
                            ],
                            effect    : [
                                new HrzPos('center'),
                                new Font('"M PLUS Rounded 1c"')
                            ]
                        })
                    ],
                    event   : [
                        new Click((p1) => { p1.mainColor([190, 225,230]) }),
                        new Hover(
                            (h1_frm,h2,h3_flg) => {
                                try {
                                    let shd = h1_frm.effect('Shadow');
                                    shd.execOption({
                                        value : (true === h3_flg) ? '0.1rem' : '0rem'
                                    });
                                    shd.forcedExec(h3_flg);
                                } catch (e) {
                                    console.error(e.stack);
                                    throw e;
                                }
                            }
                        )
                    ],
                    size    : [ '100%', '0.8rem' ],
                    mainColor   : [252,252,253],
                    flow    : new mf.Option({ speed : 150 })
                });
                
                if ( ('mobile' === mofron.func.devType()) && (33 < telm.treeKey().length) ) {
                    ret.height('1.6rem');
                    ret.child()[0].style({ 'margin-top' : '0.4rem' });
                } 
                    
                
                /* effect config */
                ret.effect('Fade').delay(0, 100);
                
                if ('back' === thisobj.mode) {
                    ret.flow().execOption({ value : ['-0.2rem', '0.2rem'] });
                }
                return ret;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        },
        keyVal : (telm) => {
            try {
                let ret = new TurnCard({
                    contsTxt : [ telm.treeKey(), telm.treeValue() ],
                    textComp : new mf.Option({
                        size      : '0.2rem',
                        style     : {
                            'margin-top'  : ('mobile' === mofron.func.devType()) ? '0.2rem' : '0.15rem',
                            'margin-left' :  '0.2rem'
                        },
                        effect : [ new Font('"M PLUS Rounded 1c"') ]
                    }),
                    event   : [
                        new Hover(
                            (h1_frm,h2,h3_flg) => {
                                try {
                                    let shd = h1_frm.effect('Shadow');
                                    shd.execOption({
                                        value : (true === h3_flg) ? '0.1rem' : '0rem'
                                    });
                                    shd.forcedExec(h3_flg);
                                } catch (e) {
                                    console.error(e.stack);
                                    throw e;
                                }
                            }
                        )
                    ],
                    size      : [ '100%', '0.6rem' ],
                    mainColor : [252, 252, 253],
                    flow      : new mf.Option({ speed : 100 })
                });
                
                return ret;
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
