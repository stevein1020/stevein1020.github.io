// Breathing
const breatheText = document.getElementById('breathe-text');
const breatheTimer = document.getElementById('breathe-timer');
let isBreathingIn = true;
let countdown = 3;

const updateBreathing = () => {
    countdown--;
    if (countdown === 0) {
        countdown = 3;
        isBreathingIn = !isBreathingIn;
        breatheText.textContent = isBreathingIn ? 'breathe in...' : 'breathe out...';
    }
    breatheTimer.textContent = countdown;
};

setInterval(updateBreathing, 1000);

// Thoughts
const thoughts = [
    "I wonder what the weather will be like today. I should check my phone app.",
    "I'm kind of hungry. I don't want to cook, though. Maybe I'll order takeout instead.", 
    "I've spent so much time unhappy that I've forgotten what it's like to be happy. I need to find joy again.",
    "What's the meaning of life? What's my purpose on this Earth? Ugh.",
    "I'm so tired. I need to get more sleep. Maybe I should go to bed earlier tonight.",
    "I'm incompetent. Why am I so bad at everything? Why am I getting these negative thoughts? I can't even be good at being positive.",
    "Nobody wants to be around me. I feel like I push everyone away somehow. At the same time, I don't want to be around anyone. I'm a complete mess.",
    "I'm surrounded by people 24/7 and yet I feel so lonely. It's a strange feeling inside. I'm not even sure what I want.",
    "It's so tiring to fake being happy all the time. I wish I could just be myself. People don't like me for who I am, though.",
    "Damn, I'm a genius. That solution I came up with was pretty clever actually.",
    "My back is starting to hurt from sitting like this.",
    "I should call my dad more often. She always knows how to make me feel better.",
    "That project at work is going really well. The team seems pleased with my contributions.",
    "Why can't I focus? My mind keeps wandering. There are too many distractions around me.",
    "I love how the sunlight feels on my skin. It's such a beautiful morning today.",
    "Did I remember to lock the door?",
    "I'm proud of how far I've come. I've actually made a lot of progress.",
    "These meditation sessions are really helping me. I feel more peaceful than before. I must be careful not to get too attached to this feeling, though.",
    "I keep thinking about that embarrassing thing from 10 years ago. Why can't I let it go?",
    "Nobody understands what I'm going through. Sometimes it feels like I'm completely alone.",
    "The birds singing outside sound so peaceful. Nature has a way of calming me.",
    "I should start exercising more. Why can't I stick to a routine?",
    "Why do I always procrastinate everything? I need to work on my time management skills.",
    "I'm actually pretty good at my job. My colleagues seem to value my input.",
    "My nose is itchy but I must not move. I must stay in this meditation pose.",
    "I wonder what my friends are doing right now. I should organize a get-together soon.",
    "I'm not good enough for a promotion. Maybe I need to believe in myself more.",
    "That was a really nice compliment I got yesterday. It made me feel appreciated.",
    "I should drink more water and eat healthier. My body would thank me for taking better care.",
    "Why can't I be more like other people? But why does that matter? I need to appreciate my uniqueness.",
    "I'm grateful for my health. Not everyone is fortunate enough to feel this well.",
    "These thoughts keep racing through my head. I need to find ways to quiet them.",
    "I'm excited about my vacation next month. It's going to be such a needed break.",
    "I feel like I'm falling behind in life. Everyone else seems to have it together.",
    "The coffee I had this morning was perfect. It really helped start my day right. But caffeine is bad for my health. I should probably cut back.",
    "I wish I could stop comparing myself to others. It only makes me feel worse.",
    "My apartment looks really nice after cleaning. The fresh environment helps my mood.",
    "I'm worried about my future. There are so many uncertainties ahead of me.",
    "That joke I made actually landed well. Maybe I'm funnier than I thought.",
    "I should start saving more money. A better financial cushion would reduce my stress.",
    "Why am I always so anxious? These feelings seem to control my daily life.",
    "I'm better at this than I thought. Maybe I underestimate myself too often.",
    "I need to stop being so hard on myself. Self-compassion is something I should practice.",
    "The dinner I cooked yesterday turned out great. I'm improving my culinary skills.",
    "I feel like I'm not living up to my potential. There's so much more I could do.",
    "I should meditate more often. It really helps clear my mind of negativity.",
    "Why can't I sleep better at night? Maybe I should establish a better routine.",
    "I'm actually pretty resilient. I've overcome so many challenges in my life.",
    "I need to organize my closet. The mess is starting to stress me out.",
    "I miss my old friends. We used to have such great times together.",
    "That sunset yesterday was breathtaking. I should take more time to appreciate nature.",
    "I'm not as bad at socializing as I thought. People seem to enjoy my company.",
    "My shoulders feel tense. I should schedule a massage or do some stretches.",
    "I should read more books. Reading always helps me escape and learn new things.",
    "Why do I always feel behind schedule? I need to manage my time better.",
    "I handled that difficult situation well. My conflict resolution skills are improving.",
    "I need to stop overthinking everything. It's exhausting and usually unproductive.",
    "I feel like I'm not doing enough. But maybe I'm being too demanding of myself.",
    "That was a really productive meeting. My ideas were well-received by the team.",
    "I should call my friend back. I've been putting off social connections lately.",
    "Why do I keep putting things off? Procrastination is becoming a real problem.",
    "I'm getting better at setting boundaries. It feels good to prioritize my needs.",
    "I need to plan my week better. A good schedule would help reduce my stress.",
    "I feel disconnected from everyone. Maybe I should reach out more often.",
    "I'm stronger than I give myself credit for. I've survived every challenge so far.",
    "I should start that hobby I've been thinking about. It would be good for me.",
    "Why can't I make decisions faster? I spend too much time weighing options.",
    "I'm proud of maintaining my exercise routine. My body feels stronger every day.",
    "I need to stop checking my phone so much. It's becoming a bad habit.",
    "The rain sounds really peaceful. It's nature's way of creating calming white noise.",
    "I feel like I'm making progress. Small steps forward are still steps forward.",
    "I should spend less time on social media. It often leaves me feeling drained and anxious.",
    "Why do I always doubt myself? I need to work on building self-confidence.",
    "I'm good at finding solutions to problems. My analytical skills are quite strong.",
    "I need to declutter my space. A tidy environment would help clear my mind.",
    "The morning air feels refreshing. It's a perfect start to what could be great.",
    "I'm worried about that deadline. I should break the project into smaller tasks.",
    "That presentation went better than expected. My public speaking is improving.",
    "I should try that new restaurant. Exploring new places always excites me.",
    "Why can't I be more patient? Good things take time to develop.",
    "I'm actually pretty creative. My ideas often help solve complex problems.",
    "I need to work on my posture. Sitting up straight makes me feel more confident.",
    "The weekend was really rejuvenating. I needed that time to recharge.",
    "I feel like I'm not measuring up. But compared to what standard exactly?",
    "That was a good conversation with my friend. We should connect more often.",
    "I should start journaling again. It helped me process my thoughts better.",
    "I'm getting better at managing my time. My new schedule is working well.",
    "I need to be more assertive. Standing up for myself is important.",
    "The music I'm listening to is so calming. It helps me stay focused.",
    "I feel like I can handle whatever comes my way. I'm more capable than before.",
    "I should try that new workout routine. It might help energize my mornings.",
    "Why can't I let go of past mistakes? They don't define who I am now.",
    "I'm doing the best I can. That's all anyone can really ask for.",
    "I need to practice more self-care. Taking care of myself isn't selfish.",
    "The breeze feels nice today. It's carrying away some of my stress.",
    "I feel more centered than yesterday. These meditation sessions are really helping.",
    "That project I finished turned out well. My hard work paid off.",
    "I should learn a new skill. Personal growth is important for self-development.",
    "Why do I always worry about the future? The present moment is what matters.",
    "I need to take more breaks. Working non-stop isn't good for my wellbeing.",
];

function createFloatingThought() {
    const thoughtElement = document.createElement('div');
    thoughtElement.className = 'floating-thought';
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const words = randomThought.split(' ');
    
    // randomly place and rotate on screen
    const randomRotation = Math.random() * 60 - 30;
    const randomX = Math.random() * 80 + 10;
    const randomY = Math.random() * 80 + 10;
    const randomWidth = Math.random() * 30 + 120;

    thoughtElement.style.setProperty('--rotation', `${randomRotation}deg`);
    thoughtElement.style.setProperty('--width', `${randomWidth}px`);
    thoughtElement.style.left = `${randomX}%`;
    thoughtElement.style.top = `${randomY}%`;
    
    // dismiss on click
    thoughtElement.addEventListener('click', () => {
        thoughtElement.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => thoughtElement.remove(), 1000);
    });
    
    const container = document.getElementById('thoughts-container');
    container.appendChild(thoughtElement);
    
    // make words appear one by one
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.style.opacity = '0';
        thoughtElement.appendChild(wordSpan);
        
        setTimeout(() => {
            wordSpan.style.opacity = '1';
        }, index * 200); 
    });

    scheduleNextThought();
}

function scheduleNextThought() {
    const delay = Math.random() * 5000 + 5000; // random delay between 5-10 seconds
    setTimeout(createFloatingThought, delay);
}

createFloatingThought();