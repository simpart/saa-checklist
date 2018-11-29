/**
 * @file   IndexCard.js
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const Frame = require('mofron-comp-frame');
const HrzPos = require('mofron-effect-hrzpos');

mf.comp.IndexCard = class extends Frame {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('IndexFrame');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.size('100%', '0.8rem');
            this.mainColor([253, 253, 253]);
            this.child(this.indexTxt());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    indexTxt (prm) {
        try {
            if ('string' === typeof prm) {
                this.indexTxt().execOption({
                    text : prm,
                });
                return;
            } else if (true === mf.func.isObject(prm, 'Text')) {
                prm.execOption({
                    size      : '0.3rem',
                    sizeValue : [ 'margin-top', '0.15rem' ],
                    effect    : [ new HrzPos('center') ]
                });
            }
            return this.innerComp('indexTxt', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    indexChild (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'Component')) {
                prm.executeOption({ indexParent : this });
            }
            return this.arrayMember('indexChild', 'Component', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    indexParent (prm) {
        try { return this.member('indexParent', ['Component'], prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.IndexCard;
/* end of file */
