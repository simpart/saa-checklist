/**
 * @file index.js
 * @brief index page initialize
 */
const mf = require('mofron');
require('expose-loader?app!../conf/namesp.js');
require('tetraring4js');

const Appbs = require('mofron-comp-appbase');
const TreeIF = require('mofron-comp-treeif');
const Tree = require('mofron-comp-dev');
const HrzCent = require('mofron-layout-hrzcenter');
const Margin = require('mofron-layout-margin');
const HrzPos = require('mofron-effect-hrzpos');
const Shadow = require('mofron-effect-shadow');
const Fade = require('mofron-effect-fade');
const Frame = require('mofron-comp-flowframe');

const Text = require('mofron-comp-text');
const Header = require('mofron-comp-txtheader');

const OrdView = require('mofron-effect-orderview');
const Click = require('mofron-event-click');
const VisiClk = require('mofron-event-visiclick');

/* app ctrl */
const theme = require('../conf/theme.js');
const base = require('../conf/basestyle.js');
const json = require('../ctrl/json.js');
const card = require('../comp/card.js');

/**
 * build component contents
 * 
 * @return mf.Component object
 */
let start = () => {
    try {
        /* defined contents */
        let ret = new Appbs({
            title     : "SAA Check List",
            header    : new mf.Option({
                            baseColor : 'white',
                            effect    : new Shadow('0.1rem')
                        }),
            baseColor : [245,245,245],
            layout    : [
                new HrzCent(
                    ('mobile' !== mofron.func.devType()) ? 50 : 99
                )
            ],
            effect    : new Fade(),
            child     : new Tree({
                layout         : new Margin('top', '0.2rem'),
                effect         : [ new Fade([10, 400]) ],
                naviText       : new mf.Option({ size : '0.25rem' }),
                backEvent      : card.back,
                nextEvent      : card.next,
                indexElem_func : card.index,
                kvElem_func    : card.keyVal
            })
        });
        
        /* load tree contetns */
        let tree = ret.child()[0];
        let load = (p1) => {
            try { tree.load(p1); } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
        ttrg.rest.get('./conf/list.json', null, load);
        
        return ret;
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}

try {
    base.init();
    let ret = start(app.root);
    app.root.child(
        (true === Array.isArray(ret)) ? ret : [ret]
    );

    theme.init(app.root);
console.log(app.root);
    app.root.visible(true);
    
} catch (e) {
    console.error(e.stack);
}
/* end of file */
