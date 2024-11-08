// Event listener for "Melody's Section" (Tremblement de Terre section)
document.addEventListener('DOMContentLoaded', () => {
    // Array to hold questions, options, and associated images for each option
    const questions = [
        {
            text: "Tu es en classe en train de travailler tranquillement avec tes camarades quand, soudain, tout se met à trembler. Que fais-tu?",
            options: [
                { text: "Se protéger sous un bureau.", nextQuestion: 1, image: "images/Q1-OP1.png" },
                { text: "Courir près des fenêtres", nextQuestion: 2, image: "images/Q1-OP2.png" }
            ]
        },
        {
            text: "Bonne réponse! Le tremblement de terre continue. Que fais-tu ensuite?",
            options: [
                { text: "Rester sous le bureau jusqu'à ce que les secousses s'arrêtent.", nextQuestion: 3, image: "images/Q1-OP1.png" },
                { text: "Sortir prudemment pour suivre les consignes d'évacuation.", nextQuestion: 5, image: "images/assemblypoint.png" }
            ]
        },
        {
            text: "Mauvaise réponse! Que fais-tu maintenant?",
            options: [
                { text: "Se protéger sous un bureau", nextQuestion: 1, image: "images/Q1-OP1.png" },
                { text: "Essaye de sortir de la salle", nextQuestion: 4, image: "images/GoingOut.png" }
            ]
        },
        {
            text: "Les secousses s’arrêtent. Que fais-tu maintenant?",
            options: [
                { text: "Vérifier que les fenêtres et portes sont intactes", nextQuestion: 5, image: "images/Q1-OP2.png" },
                { text: "Rester sous le bureau et attendre un peu", nextQuestion: 6, image: "images/Q1-OP1.png" }
            ]
        },
        {
            text: "Attention! Les secousses recommencent. Que fais-tu?",
            options: [
                { text: "Rester sous le bureau", nextQuestion: 7, image: "images/Q1-OP1.png" },
                { text: "Essayer de sortir en courant", nextQuestion: 8, image: "images/GoingOut.png" }
            ]
        },
        {
            text: "Bien joué! Tu es resté à l’abri sous le bureau. Mais maintenant?",
            options: [
                { text: "Écouter les instructions de la maîtresse", nextQuestion: 9, image: "images/listening.png" },
                { text: "Essayer de sortir de la salle", nextQuestion: 8, image: "images/GoingOut.png" }
            ]
        },
        {
            text: "Tu écoutes les instructions de la maîtresse. Que fais-tu maintenant?",
            options: [
                { text: "Te rendre à un point de rassemblement en sécurité", nextQuestion: 9, image: "images/assemblypoint.png" },
                { text: "Essayer de retourner dans ta classe", nextQuestion: null, image: "images/class.png" }
            ]
        },
        {
            text: "Mauvaise réponse! Essaye encore.",
            options: [
                { text: "Se protéger sous un bureau", nextQuestion: 7, image: "images/Q1-OP1.png" }
            ]
        },
        {
            text: "Tu arrives au point de rassemblement en sécurité. Que fais-tu maintenant?",
            options: [
                { text: "Attendre l'arrivée des secours", nextQuestion: 10, image: "images/Firefighter.png" },
                { text: "Retourner à la maison", nextQuestion: 11, image: "images/home.png" }
            ]
        },
        {
            text: "Tu es maintenant chez toi après le tremblement de terre. Que fais-tu?",
            options: [
            { text: "Vérifier si tout va bien à la maison", nextQuestion: 12, image: "images/insidehome.png" },
            { text: "Rester calme et surveiller les nouvelles", nextQuestion: 12, image: "images/news.png" }
    ]
        },
        {
            text: "Félicitations! Tu as bien réagi et tu es en sécurité maintenant.",
            options: [
                { text: "Recommencer le quiz", nextQuestion: 0, image: "images/success.png" }
            ]
        }
    ];

    let currentQuestionIndex = 0;

    // Function to display a question and update options with an image above each card's text
    function renderQuestion(index) {
        const questionContainer = document.querySelector('.question');
        const cardsContainer = document.getElementById('cardsContainer');

        // Load the current question
        const question = questions[index];
        questionContainer.innerHTML = question.text;

        // Clear existing options and add new ones
        cardsContainer.innerHTML = '';

        // Loop through each option and create a card for each
        question.options.forEach((option, i) => {
            const card = document.createElement('div');
            card.className = `card ${i % 2 === 0 ? 'card-blue' : 'card-green'}`;

            // Add the option-specific image above the option text
            const img = document.createElement('img');
            img.src = option.image; 
            img.alt = "Option Image";
            img.className = "option-image";
            card.appendChild(img);

            // Add the option text to the card
            const optionText = document.createElement('p');
            optionText.textContent = option.text;
            card.appendChild(optionText);

            // Add click event to move to the next question for any card clicked
            card.addEventListener('click', () => {
                if (option.nextQuestion !== null) {
                    renderQuestion(option.nextQuestion);
                } else {
                    alert("Quiz terminé!");
                }
            });

            cardsContainer.appendChild(card);
        });
    }

    // Initial render of the first question
    renderQuestion(currentQuestionIndex);
});
