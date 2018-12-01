/**
 * @file   mofron-comp-TurnCard/index.js
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const FlowFrame = require('mofron-comp-flowframe');
const Click = require('mofron-event-click');
const Fade = require('mofron-effect-fade');
const Size = require('mofron-effect-size');

mf.comp.TurnCard = class extends FlowFrame {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('TurnCard');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.child([ this.textComp() ]);
            let card   = this;
            let upd_cb = (u1_cmp) => {
                try {
                    card.textComp().text(
                        card.contsTxt()[
                            (false === card.isBack()) ? 0 : 1
                        ]
                    );
                    card.textComp().visible(true);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            let turn = (t1_cmp) => {
                try {
                    t1_cmp.isBack(!t1_cmp.isBack());
                    
                    let txt_len = t1_cmp.contsTxt()[(true === t1_cmp.isBack()) ? 1 : 0].length;

                    if (70 < txt_len) {
                        t1_cmp.height('1.8rem');
                    } else {
                        t1_cmp.getResizer().forcedExec(
                            (34 < txt_len) ? true : false
                        );
                    }
                    t1_cmp.mainColor(
                        (true === t1_cmp.isBack()) ? [230,245,250] : [252,252,253]
                    );
                    
                    t1_cmp.textComp().visible(false, upd_cb);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            
            
            this.event([ new Click(turn) ]);
            this.effect([ this.getResizer() ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getResizer () {
        try {
            if (undefined === this.m_resizer) {
                this.m_resizer = new Size({
                    suspend : true,
                    height  : [ '0.9rem', '0.6rem' ],
                });
            }
            return this.m_resizer;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    isBack (prm) {
        try {
            return this.member('isBack', 'boolean', prm, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    contsTxt (frt, bck) {
        try {
            if (undefined === frt) {
                /* getter */
                return (undefined === this.m_cnttxt) ? ['', ''] : this.m_cnttxt;
            }
            /* setter */
            if (undefined === this.m_cnttxt) {
                this.m_cnttxt = ['', ''];
            }
            if ('string' === typeof frt) {
                this.m_cnttxt[0] = frt;
                if (70 < frt.length) {
                    t1_cmp.height('1.8rem');
                } else if (34 < frt.length) {
                    this.getResizer().forcedExec(true);
                }
            }
            if ('string' === typeof bck) {
                this.m_cnttxt[1] = bck;
            }
            
            if (true !== this.target().isPushed()) {
                this.textComp().text(frt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    textComp (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'Text')) {
                prm.execOption({
                    effect : [ new Fade(100) ]
                });
            }
            return this.innerComp('textComp', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TurnCard;
/* end of file */
