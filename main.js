// Cosmic Connections - Main JavaScript Functionality
// Zodiac calculations, compatibility algorithms, and core features

// User data storage
let currentUser = null;
let users = [];
let connections = [];

// Zodiac signs data
const zodiacSigns = {
    'Aries': { element: 'Fire', dates: [3, 21, 4, 19], symbol: '♈' },
    'Taurus': { element: 'Earth', dates: [4, 20, 5, 20], symbol: '♉' },
    'Gemini': { element: 'Air', dates: [5, 21, 6, 20], symbol: '♊' },
    'Cancer': { element: 'Water', dates: [6, 21, 7, 22], symbol: '♋' },
    'Leo': { element: 'Fire', dates: [7, 23, 8, 22], symbol: '♌' },
    'Virgo': { element: 'Earth', dates: [8, 23, 9, 22], symbol: '♍' },
    'Libra': { element: 'Air', dates: [9, 23, 10, 22], symbol: '♎' },
    'Scorpio': { element: 'Water', dates: [10, 23, 11, 21], symbol: '♏' },
    'Sagittarius': { element: 'Fire', dates: [11, 22, 12, 21], symbol: '♐' },
    'Capricorn': { element: 'Earth', dates: [12, 22, 1, 19], symbol: '♑' },
    'Aquarius': { element: 'Air', dates: [1, 20, 2, 18], symbol: '♒' },
    'Pisces': { element: 'Water', dates: [2, 19, 3, 20], symbol: '♓' }
};

// Chinese zodiac animals
const chineseZodiac = [
    'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
    'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
];

// Compatibility matrices
const zodiacCompatibility = {
    'Fire': { compatible: ['Fire', 'Air'], challenging: ['Water', 'Earth'] },
    'Earth': { compatible: ['Earth', 'Water'], challenging: ['Air', 'Fire'] },
    'Air': { compatible: ['Air', 'Fire'], challenging: ['Earth', 'Water'] },
    'Water': { compatible: ['Water', 'Earth'], challenging: ['Fire', 'Air'] }
};

const chineseZodiacCompatibility = {
    'Rat': { best: ['Dragon', 'Monkey'], good: ['Ox'], avoid: ['Horse', 'Goat'] },
    'Ox': { best: ['Snake', 'Rooster'], good: ['Rat'], avoid: ['Goat', 'Horse'] },
    'Tiger': { best: ['Horse', 'Dog'], good: ['Pig'], avoid: ['Monkey', 'Snake'] },
    'Rabbit': { best: ['Goat', 'Pig'], good: ['Dog'], avoid: ['Dragon', 'Rooster'] },
    'Dragon': { best: ['Rat', 'Monkey'], good: ['Rooster'], avoid: ['Dog', 'Rabbit'] },
    'Snake': { best: ['Ox', 'Rooster'], good: ['Monkey'], avoid: ['Tiger', 'Pig'] },
    'Horse': { best: ['Tiger', 'Dog'], good: ['Goat'], avoid: ['Rat', 'Ox'] },
    'Goat': { best: ['Rabbit', 'Pig'], good: ['Horse'], avoid: ['Ox', 'Rat'] },
    'Monkey': { best: ['Dragon', 'Rat'], good: ['Snake'], avoid: ['Tiger', 'Pig'] },
    'Rooster': { best: ['Ox', 'Snake'], good: ['Dragon'], avoid: ['Rabbit', 'Dog'] },
    'Dog': { best: ['Tiger', 'Horse'], good: ['Rabbit'], avoid: ['Dragon', 'Rooster'] },
    'Pig': { best: ['Rabbit', 'Goat'], good: ['Tiger'], avoid: ['Snake', 'Monkey'] }
};

// Mock user data
function generateMockUsers() {
    const names = [
        'Aria Stellar', 'Leo Cosmic', 'Nova Celeste', 'Orion Sky', 'Luna Mystic',
        'Phoenix Fire', 'Stella Moon', 'Atlas Star', 'Lyra Harmony', 'Cosmo Dream',
        'Aurora Light', 'Zenith Cosmos', 'Serena Starlight', 'Galaxy Rider', 'Comet Blaze',
        'Nebula Grace', 'Solar Flare', 'Celestial Dawn', 'Cosmic Ray', 'Star Gazer'
    ];

    const hobbies = [
        ['Astrology', 'Meditation', 'Crystals', 'Yoga'],
        ['Stargazing', 'Photography', 'Hiking', 'Reading'],
        ['Art', 'Music', 'Dancing', 'Travel'],
        ['Cooking', 'Gardening', 'Nature', 'Animals'],
        ['Technology', 'Gaming', 'Movies', 'Fitness'],
        ['Spirituality', 'Tarot', 'Healing', 'Writing'],
        ['Adventure', 'Sports', 'Beach', 'Mountains'],
        ['Fashion', 'Design', 'Beauty', 'Shopping'],
        ['Science', 'Philosophy', 'History', 'Learning'],
        ['Food', 'Wine', 'Culture', 'Languages']
    ];

    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

    for (let i = 0; i < 20; i++) {
        const birthDate = new Date(1985 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const zodiacSign = getZodiacSign(birthDate);
        const chineseZodiac = getChineseZodiac(birthDate.getFullYear());
        const lifePath = getLifePathNumber(birthDate);

        users.push({
            id: i + 1,
            name: names[i],
            birthDate: birthDate,
            zodiacSign: zodiacSign,
            chineseZodiac: chineseZodiac,
            lifePath: lifePath,
            location: locations[Math.floor(Math.random() * locations.length)],
            hobbies: hobbies[Math.floor(Math.random() * hobbies.length)],
            image: `https://picsum.photos/seed/${i + 1}/300/300.jpg`,
            bio: `Cosmic soul seeking meaningful connections. ${zodiacSign} with a passion for ${hobbies[Math.floor(Math.random() * hobbies.length)][0].toLowerCase()}.`,
            compatibility: {}
        });
    }
}

// Calculate Western zodiac sign
function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    for (const [sign, data] of Object.entries(zodiacSigns)) {
        const [startMonth, startDay, endMonth, endDay] = data.dates;
        
        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
            return sign;
        }
    }
    return 'Capricorn'; // Default for edge cases
}

// Calculate Chinese zodiac animal
function getChineseZodiac(year) {
    const startYear = 1900; // Year of the Rat
    const index = (year - startYear) % 12;
    return chineseZodiac[index < 0 ? index + 12 : index];
}

// Calculate life path number
function getLifePathNumber(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Sum all digits
    let sum = 0;
    sum += month.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    sum += day.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    sum += year.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    
    // Reduce to single digit (except master numbers 11, 22, 33)
    while (sum > 9 && ![11, 22, 33].includes(sum)) {
        sum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    
    return sum;
}

// Calculate zodiac compatibility score
function calculateZodiacCompatibility(sign1, sign2) {
    const element1 = zodiacSigns[sign1].element;
    const element2 = zodiacSigns[sign2].element;
    
    if (element1 === element2) return 100;
    if (zodiacCompatibility[element1].compatible.includes(element2)) return 85;
    if (zodiacCompatibility[element1].challenging.includes(element2)) return 40;
    return 60;
}

// Calculate Chinese zodiac compatibility score
function calculateChineseZodiacCompatibility(animal1, animal2) {
    const compat = chineseZodiacCompatibility[animal1];
    
    if (compat.best.includes(animal2)) return 100;
    if (compat.good.includes(animal2)) return 75;
    if (compat.avoid.includes(animal2)) return 30;
    return 50;
}

// Calculate life path compatibility
function calculateLifePathCompatibility(path1, path2) {
    const compatiblePairs = [
        [1, 5], [1, 3], [2, 6], [2, 8], [3, 1], [3, 5],
        [4, 2], [4, 8], [5, 1], [5, 3], [6, 2], [6, 9],
        [7, 3], [7, 9], [8, 2], [8, 4], [9, 6], [9, 7]
    ];
    
    const isCompatible = compatiblePairs.some(pair => 
        (pair[0] === path1 && pair[1] === path2) || 
        (pair[0] === path2 && pair[1] === path1)
    );
    
    return isCompatible ? 85 : 50;
}

// Calculate hobby compatibility bonus
function calculateHobbyCompatibility(hobbies1, hobbies2) {
    const shared = hobbies1.filter(hobby => hobbies2.includes(hobby));
    const compatibility = Math.min(100, 30 + (shared.length * 20));
    return { score: compatibility, shared: shared };
}

// Calculate overall compatibility
function calculateOverallCompatibility(user1, user2) {
    const zodiacScore = calculateZodiacCompatibility(user1.zodiacSign, user2.zodiacSign);
    const chineseScore = calculateChineseZodiacCompatibility(user1.chineseZodiac, user2.chineseZodiac);
    const lifePathScore = calculateLifePathCompatibility(user1.lifePath, user2.lifePath);
    const hobbyData = calculateHobbyCompatibility(user1.hobbies, user2.hobbies);
    
    // Weight the scores (zodiac and Chinese zodiac have more weight)
    const overallScore = Math.round(
        (zodiacScore * 0.3 + chineseScore * 0.3 + lifePathScore * 0.2 + hobbyData.score * 0.2)
    );
    
    return {
        overall: overallScore,
        zodiac: zodiacScore,
        chinese: chineseScore,
        lifePath: lifePathScore,
        hobbies: hobbyData.score,
        sharedHobbies: hobbyData.shared
    };
}

// Find compatible users
function findCompatibleUsers(user, options = {}) {
    const {
        minCompatibility = 0,
        maxResults = 10,
        includeHobbies = true,
        poolLevel = 'all' // 'low', 'medium', 'high', 'all'
    } = options;
    
    const compatibility = [];
    
    users.forEach(otherUser => {
        if (otherUser.id === user.id) return;
        
        const compat = calculateOverallCompatibility(user, otherUser);
        
        // Apply pool filtering
        let includeInResults = true;
        if (poolLevel === 'high' && compat.overall < 70) includeInResults = false;
        if (poolLevel === 'medium' && (compat.overall < 40 || compat.overall >= 70)) includeInResults = false;
        if (poolLevel === 'low' && compat.overall >= 40) includeInResults = false;
        
        if (includeInResults && compat.overall >= minCompatibility) {
            compatibility.push({
                user: otherUser,
                compatibility: compat
            });
        }
    });
    
    // Sort by compatibility score
    compatibility.sort((a, b) => b.compatibility.overall - a.compatibility.overall);
    
    return compatibility.slice(0, maxResults);
}

// Registration function
function registerUser(userData) {
    const newUser = {
        id: users.length + 1,
        ...userData,
        zodiacSign: getZodiacSign(userData.birthDate),
        chineseZodiac: getChineseZodiac(userData.birthDate.getFullYear()),
        lifePath: getLifePathNumber(userData.birthDate)
    };
    
    users.push(newUser);
    currentUser = newUser;
    
    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return newUser;
}

// Connection request functions
function sendConnectionRequest(fromUserId, toUserId, message = '') {
    const connection = {
        id: connections.length + 1,
        fromUserId: fromUserId,
        toUserId: toUserId,
        message: message,
        status: 'pending',
        timestamp: new Date()
    };
    
    connections.push(connection);
    return connection;
}

function acceptConnectionRequest(connectionId) {
    const connection = connections.find(c => c.id === connectionId);
    if (connection) {
        connection.status = 'accepted';
        return true;
    }
    return false;
}

function declineConnectionRequest(connectionId) {
    const connection = connections.find(c => c.id === connectionId);
    if (connection) {
        connection.status = 'declined';
        return true;
    }
    return false;
}

// Initialize application
function initializeApp() {
    // Load mock data
    generateMockUsers();
    
    // Load current user from localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        // Convert birthDate string back to Date object
        if (currentUser.birthDate) {
            currentUser.birthDate = new Date(currentUser.birthDate);
        }
    }
    
    console.log('Cosmic Connections initialized with', users.length, 'users');
}

// Utility functions
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getZodiacSymbol(sign) {
    return zodiacSigns[sign]?.symbol || '♈';
}

function getCompatibilityLevel(score) {
    if (score >= 80) return { level: 'High', color: '#4CAF50' };
    if (score >= 60) return { level: 'Medium', color: '#FF9800' };
    return { level: 'Low', color: '#F44336' };
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        users,
        currentUser,
        getZodiacSign,
        getChineseZodiac,
        getLifePathNumber,
        calculateOverallCompatibility,
        findCompatibleUsers,
        registerUser,
        sendConnectionRequest,
        acceptConnectionRequest,
        declineConnectionRequest,
        initializeApp,
        formatDate,
        getZodiacSymbol,
        getCompatibilityLevel
    };
}