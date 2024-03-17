import parts from "../data/parts";

interface Props {
    troubleshooting: string;
    resolution: string;
}

const helpers = [
    { main: 'doesn\'t', variations: ['doesn\'t', 'does not', 'isn\'t', 'is not', 'doesnt', 'doesnt\'', 'isnt', 'doens\'t', 'doesn\''] },
    { main: 'don\'t', variations: ['don\'t', 'do not', 'aren\'t', 'are not', 'arent', 'dont', 'dont\''] },
]

const issues = [
    { main: 'turns on', variations: ['turn on', 'turns on', 'turning on'] },
    { main: 'turns off', variations: ['turn off', 'turns off', 'turning off'] },
    { main: 'charges', variations: ['charge', 'charges', 'charging'] },
    { main: 'boots', variations: ['boot', 'boots', 'booting'] },
    { main: 'connects', variations: ['connect', 'connects', 'connecting'] },
    { main: 'works', variations: ['work', 'works', 'working'] },
    { main: 'flickers', variations: ['flicker', 'flickers', 'flickering'] },
    { main: 'broken', variations: ['break', 'breaks', 'breaking', 'broken'] },
    { main: 'moves smoothly', variations: ['move smoothly', 'moves smoothly', 'moving smoothly'] },
    { main: 'makes loud noises', variations: ['make loud noises', 'makes loud noises', 'making loud noises'] },
    { main: 'makes noises', variations: ['make noises', 'makes noises', 'making noises'] },
    { main: 'empties Fast', variations: ['empty fast', 'empties fast', 'emptying fast'] },
]

const partsAndProducts = [...parts, 
    { desc: "Monitor" },
    { desc: "PC" },
    { desc: "Computer" },
    { desc: "WIFI" },
]

const autoSubject: ({troubleshooting, resolution}: Props) => string = ({
    troubleshooting,
    resolution
}) => {

    // check only the first like and the reolution
    const text = troubleshooting.split(".")[0].toLowerCase();

    const partsMentions: any[] = []

    partsAndProducts.forEach((part) => {
        if (text.includes(part.desc.toLowerCase())) {
            partsMentions.push(part.desc);
        }
    });

    if (partsMentions.length == 0) {
        return 'PC Issue';
    }

    if (partsMentions.length == 2) {
        return `${partsMentions[0]} and ${partsMentions[1]} Issues`
    }

    const part = partsMentions[0]

    const textSplited = text.split(" ")
    
    const partIndex = textSplited.indexOf(part.toLowerCase());

    const textAfterPart = textSplited.slice(partIndex + 1);
    
    let helperVariation = null;
    let variationLength = 0;

    helpers.forEach(helper => {
        helper.variations.forEach(vari => {
            const variation = vari.split(" ");

            let flag = true;
            for(let i = 0; i < variation.length; i++) {
                
                if (textAfterPart[i] != variation[i]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                helperVariation = helper.main;
                variationLength = variation.length;
            }
        });
    });

    // check if there's issue after the helper
    const textAfterHelper = textAfterPart.slice(variationLength).join(" ");

    // check if there's issue variation after the helper
    let issueVariation = null;

    console.log('textAfterHelper', textAfterHelper);
    
    issues.forEach(issue => {
        issue.variations.forEach(vari => {
            
            if (textAfterHelper.includes(vari)) {
                issueVariation = issue.main;
            }
        });
    });

    if (issueVariation == null) {
        return `${part} issue`;
    }

    const problemDesc = `${part} ${helperVariation ?  helperVariation + ' ' : ''}${issueVariation || 'issue'}`;

    console.log(problemDesc);
    
    return problemDesc;
};

export default autoSubject;