import './style.css';

const cardTemplate = document.getElementById(
    'card-template'
) as HTMLTemplateElement;

const gridOutput = document.getElementById('grid-output') as HTMLDivElement;

if (cardTemplate && gridOutput) {
    for (let i = 0; i < 4; i++) {
        const clone = cardTemplate.content.cloneNode(true);
        gridOutput.appendChild(clone);
    }
}

const advantagesCards = [
    {
        title: 'Used in 36+ countries and translated into 8 languages',
        description:
            'Our materials are trusted by professionals in over 38 countries and translated into 8 languages, making it easy for trainers to teach students worldwide'
    },
    {
        title: 'START YOUR COURSE IN 7 DAYS',
        description:
            'Our ready-to-use materials allow you to start your training programs in no time. Perfect for online courses, masterclasses, and in-studio sessions'
    },
    {
        title: 'Ready-made, easy-to-use content',
        description:
            'Designed for immediate application, our resources are tailored for various teaching formats, including online training, workshops, and studio-based lessons'
    },
    {
        title: 'Custom design',
        description:
            'We adapt materials to match your school’s style and theme—from unique designs to full course alignment'
    }
];

const advantagesTemplate = document.getElementById(
    'advantages-template'
) as HTMLTemplateElement;

const advantagesOutput = document.getElementById('advantages-grid') as HTMLDivElement;


if (advantagesTemplate && advantagesOutput) {
    for (let i = 0; i < advantagesCards.length; i++) {
        const card = advantagesCards[i];
        const clone = advantagesTemplate.content.cloneNode(true) as DocumentFragment;

        const titleElement = clone.querySelector(".advantages-title");
        const orderElement = clone.querySelector(".advantages-order");
        const descElement = clone.querySelector(".advantages-description");

        if (titleElement) titleElement.textContent = card.title;
        if (orderElement) orderElement.textContent = "0" + (i + 1).toString();
        if (descElement) descElement.textContent = card.description;

        advantagesOutput.appendChild(clone);
    }
  
} else {
    console.log("not found")
}

const benefitsCards = [
    {
        prefix: 'by',
        number:
            '30%',
        content: 'Increases the trainer’s earnings'
    },
    {
        prefix: 'by',
        number:
            '40%',
        content: 'Boost in training efficiency'
    },
    {
        prefix: 'by',
        number:
            '70%',
        content: 'Simplifies understanding of difficult information'
    },
    {
        prefix: 'up to',
        number:
            '80%',
        content: 'Students retain information through visuals'
    },
    {
        prefix: 'by',
        number:
            '90%',
        content: 'Increase student involvement'
    },
];

const benefitsTemplate = document.getElementById(
    'benefits-template'
) as HTMLTemplateElement;

const benefitsOutput = document.getElementById('benefits-grid') as HTMLDivElement;


if (benefitsTemplate && benefitsOutput) {
    for (let i = 0; i < benefitsCards.length; i++) {
        const card = benefitsCards[i];
        const clone = benefitsTemplate.content.cloneNode(true) as DocumentFragment;

        const prefixElement = clone.querySelector(".benefits-prefix");
        const numberElement = clone.querySelector(".benefits-number");
        const contentElement = clone.querySelector(".benefits-content");

        if (prefixElement) prefixElement.textContent = card.prefix;
        if (numberElement) numberElement.textContent = card.number;
        if (contentElement) contentElement.textContent = card.content;

        benefitsOutput.appendChild(clone);
    }
  
} else {
    console.log("not found")
}