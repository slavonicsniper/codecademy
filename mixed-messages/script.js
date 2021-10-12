const messageComponents = {
    names: ["Erik", "Jane", "Marcus", "Juliet", "Mathias", "Nicole", "Samson", "Lucy"],
    country: ["Slovakia", "Ukraine", "Germany", "Norway", "Hungary", "Czech", "Finland", "Sweden"],
    language: ["Python", "Javascript", "Java", "NodeJS", "C++", "C#", "HTML", "CSS"]
}

const messageComponentsTranslations = {
    sentenceName: ["Ahoj, moje meno je", "Привіт! Мене звати", "Hallo Ich heisse", "Hei mitt navn er", "Helló az én nevem", "Ahoj jmenuji se", "Hei minun nimeni on", "Hej mitt namn är"],
    sentenceCountry: ["Pochádzam z", "Я родом з", "ich komme aus", "jeg kommer fra", "ból érkeztem", "Pocházím z", "Olen kotoisin", "jag kommer från"],
    sentenceLanguage: ["učím sa", "я вивчаю", "Ich lerne", "jeg lærer", "tanulok", "učím se", "opettelen", "jag lär mig"],
}

const getRandom = () => {
    return Math.floor(Math.random() * 8);
}

const buildMessage = () => {
    let message = '';
    const randomNumber = getRandom();
    for(const key in messageComponents) {
        switch(key) {
            case 'names':
                message += `${messageComponentsTranslations.sentenceName[randomNumber]} ${messageComponents[key][getRandom()]}. `;
                break;
            case 'country':
                message += `${messageComponentsTranslations.sentenceCountry[randomNumber]} ${messageComponents[key][randomNumber]}. `;
                break;
            case 'language':
                message += `${messageComponentsTranslations.sentenceLanguage[randomNumber]} ${messageComponents[key][getRandom()]}. `;
                break;
        }
    }
    return message;
}

console.log(buildMessage());