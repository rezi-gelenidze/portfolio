// typing effect on heading, typing "Hello World!"
async function typeEffect() {
    const typeArea = document.getElementById('type-area');
    const text = 'Hello World!';

    // append each letter in every .2s to create type effect
    for (let i = 0; i < text.length; i++) {
        typeArea.innerHTML += text[i];
        await new Promise(r => setTimeout(r, 200));
    }
}

typeEffect();