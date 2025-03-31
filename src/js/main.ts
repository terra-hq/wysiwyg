import './../scss/index.scss';
import './../scss/sanity.scss';
import './../scss/wp.scss';

class TFCommon {
    constructor() {
        this.init();
    }

    init() {

        const startLists = document.querySelectorAll('ol[start]');

        if (startLists.length > 0) {
            startLists.forEach(ol => {
                const startAttr = ol.getAttribute('start');
                if (startAttr !== null) {
                    const start = parseInt(startAttr, 10);
                    if (!isNaN(start)) {
                        (ol as HTMLElement).style.counterReset = `item ${start - 1}`;
                    }
                }
            });
        }

    }
}
export default TFCommon;
new TFCommon();