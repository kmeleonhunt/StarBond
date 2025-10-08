// Cosmic Connections - Mock Data and Content
// User profiles, zodiac information, and compatibility content

// Detailed zodiac information
const zodiacInfo = {
    'Aries': {
        symbol: '♈',
        element: 'Fire',
        dates: 'March 21 - April 19',
        traits: ['Energetic', 'Pioneering', 'Courageous', 'Passionate'],
        description: 'The Ram leads with fierce determination and boundless energy. Natural-born leaders who thrive on challenges.',
        compatibility: 'Best matches: Leo, Sagittarius, Gemini, Aquarius',
        color: '#FF6B6B'
    },
    'Taurus': {
        symbol: '♉',
        element: 'Earth',
        dates: 'April 20 - May 20',
        traits: ['Reliable', 'Patient', 'Practical', 'Devoted'],
        description: 'The Bull represents stability and sensuality. Grounded individuals who appreciate life\'s pleasures.',
        compatibility: 'Best matches: Virgo, Capricorn, Cancer, Pisces',
        color: '#4ECDC4'
    },
    'Gemini': {
        symbol: '♊',
        element: 'Air',
        dates: 'May 21 - June 20',
        traits: ['Curious', 'Adaptable', 'Expressive', 'Clever'],
        description: 'The Twins embody duality and communication. Quick-witted souls who love learning and sharing.',
        compatibility: 'Best matches: Libra, Aquarius, Aries, Leo',
        color: '#45B7D1'
    },
    'Cancer': {
        symbol: '♋',
        element: 'Water',
        dates: 'June 21 - July 22',
        traits: ['Nurturing', 'Intuitive', 'Protective', 'Emotional'],
        description: 'The Crab represents emotional depth and intuition. Caring souls who value home and family.',
        compatibility: 'Best matches: Scorpio, Pisces, Taurus, Virgo',
        color: '#96CEB4'
    },
    'Leo': {
        symbol: '♌',
        element: 'Fire',
        dates: 'July 23 - August 22',
        traits: ['Confident', 'Generous', 'Creative', 'Dramatic'],
        description: 'The Lion radiates warmth and charisma. Natural performers who love to shine and inspire.',
        compatibility: 'Best matches: Aries, Sagittarius, Gemini, Libra',
        color: '#FECA57'
    },
    'Virgo': {
        symbol: '♍',
        element: 'Earth',
        dates: 'August 23 - September 22',
        traits: ['Analytical', 'Helpful', 'Precise', 'Reliable'],
        description: 'The Maiden seeks perfection through service. Detail-oriented healers who improve the world.',
        compatibility: 'Best matches: Taurus, Capricorn, Cancer, Scorpio',
        color: '#A8E6CF'
    },
    'Libra': {
        symbol: '♎',
        element: 'Air',
        dates: 'September 23 - October 22',
        traits: ['Harmonious', 'Diplomatic', 'Artistic', 'Social'],
        description: 'The Scales represent balance and beauty. Charming peacemakers who seek justice and harmony.',
        compatibility: 'Best matches: Gemini, Aquarius, Leo, Sagittarius',
        color: '#FFB6C1'
    },
    'Scorpio': {
        symbol: '♏',
        element: 'Water',
        dates: 'October 23 - November 21',
        traits: ['Intense', 'Mysterious', 'Transformative', 'Loyal'],
        description: 'The Scorpion embodies passion and transformation. Deep souls who seek truth and authenticity.',
        compatibility: 'Best matches: Cancer, Pisces, Virgo, Capricorn',
        color: '#FF8B94'
    },
    'Sagittarius': {
        symbol: '♐',
        element: 'Fire',
        dates: 'November 22 - December 21',
        traits: ['Adventurous', 'Optimistic', 'Philosophical', 'Free-spirited'],
        description: 'The Archer aims for higher truth. Explorers who seek wisdom and new experiences.',
        compatibility: 'Best matches: Aries, Leo, Libra, Aquarius',
        color: '#DDA0DD'
    },
    'Capricorn': {
        symbol: '♑',
        element: 'Earth',
        dates: 'December 22 - January 19',
        traits: ['Ambitious', 'Disciplined', 'Responsible', 'Traditional'],
        description: 'The Goat climbs to great heights. Determined achievers who build lasting foundations.',
        compatibility: 'Best matches: Taurus, Virgo, Scorpio, Pisces',
        color: '#98D8C8'
    },
    'Aquarius': {
        symbol: '♒',
        element: 'Air',
        dates: 'January 20 - February 18',
        traits: ['Independent', 'Innovative', 'Humanitarian', 'Eccentric'],
        description: 'The Water Bearer brings new ideas. Visionary humanitarians who champion progress.',
        compatibility: 'Best matches: Gemini, Libra, Aries, Sagittarius',
        color: '#87CEEB'
    },
    'Pisces': {
        symbol: '♓',
        element: 'Water',
        dates: 'February 19 - March 20',
        traits: ['Compassionate', 'Artistic', 'Intuitive', 'Dreamy'],
        description: 'The Fish swim in deep emotional waters. Empathetic artists who connect with the universe.',
        compatibility: 'Best matches: Cancer, Scorpio, Taurus, Capricorn',
        color: '#DEB887'
    }
};

// Chinese zodiac information
const chineseZodiacInfo = {
    'Rat': {
        years: [2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936],
        element: 'Water',
        traits: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming'],
        description: 'Clever and resourceful, Rats are natural survivors who thrive in any environment.',
        compatibility: 'Best with: Dragon, Monkey, Ox',
        color: '#4169E1'
    },
    'Ox': {
        years: [2021, 2009, 1997, 1985, 1973, 1961, 1949, 1937],
        element: 'Earth',
        traits: ['Diligent', 'Dependable', 'Strong', 'Determined'],
        description: 'Steady and reliable, Oxen build strong foundations through patience and hard work.',
        compatibility: 'Best with: Snake, Rooster, Rat',
        color: '#8B4513'
    },
    'Tiger': {
        years: [2022, 2010, 1998, 1986, 1974, 1962, 1950, 1938],
        element: 'Wood',
        traits: ['Brave', 'Confident', 'Competitive', 'Charismatic'],
        description: 'Fierce and courageous, Tigers are natural leaders who inspire others with their passion.',
        compatibility: 'Best with: Horse, Dog, Pig',
        color: '#FF4500'
    },
    'Rabbit': {
        years: [2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939],
        element: 'Wood',
        traits: ['Gentle', 'Elegant', 'Compassionate', 'Peaceful'],
        description: 'Graceful and kind, Rabbits bring harmony and beauty to the world around them.',
        compatibility: 'Best with: Goat, Pig, Dog',
        color: '#FFB6C1'
    },
    'Dragon': {
        years: [2024, 2012, 2000, 1988, 1976, 1964, 1952, 1940],
        element: 'Earth',
        traits: ['Ambitious', 'Energetic', 'Lucky', 'Powerful'],
        description: 'Majestic and powerful, Dragons are born leaders who achieve great things.',
        compatibility: 'Best with: Rat, Monkey, Rooster',
        color: '#FFD700'
    },
    'Snake': {
        years: [2025, 2013, 2001, 1989, 1977, 1965, 1953, 1941],
        element: 'Fire',
        traits: ['Wise', 'Mysterious', 'Intuitive', 'Graceful'],
        description: 'Enigmatic and wise, Snakes possess deep understanding and natural elegance.',
        compatibility: 'Best with: Ox, Rooster, Monkey',
        color: '#8A2BE2'
    },
    'Horse': {
        years: [2026, 2014, 2002, 1990, 1978, 1966, 1954, 1942],
        element: 'Fire',
        traits: ['Active', 'Energetic', 'Kind', 'Popular'],
        description: 'Free-spirited and energetic, Horses bring joy and excitement wherever they go.',
        compatibility: 'Best with: Tiger, Dog, Goat',
        color: '#DC143C'
    },
    'Goat': {
        years: [2027, 2015, 2003, 1991, 1979, 1967, 1955, 1943],
        element: 'Earth',
        traits: ['Gentle', 'Calm', 'Creative', 'Thoughtful'],
        description: 'Peaceful and artistic, Goats create beauty and harmony in their surroundings.',
        compatibility: 'Best with: Rabbit, Pig, Horse',
        color: '#F0E68C'
    },
    'Monkey': {
        years: [2028, 2016, 2004, 1992, 1980, 1968, 1956, 1944],
        element: 'Metal',
        traits: ['Clever', 'Curious', 'Mischievous', 'Innovative'],
        description: 'Quick-witted and playful, Monkeys solve problems with creativity and humor.',
        compatibility: 'Best with: Dragon, Rat, Snake',
        color: '#DAA520'
    },
    'Rooster': {
        years: [2029, 2017, 2005, 1993, 1981, 1969, 1957, 1945],
        element: 'Metal',
        traits: ['Observant', 'Hardworking', 'Courageous', 'Punctual'],
        description: 'Proud and confident, Roosters excel at organization and leadership.',
        compatibility: 'Best with: Ox, Snake, Dragon',
        color: '#FF6347'
    },
    'Dog': {
        years: [2030, 2018, 2006, 1994, 1982, 1970, 1958, 1946],
        element: 'Earth',
        traits: ['Loyal', 'Honest', 'Responsible', 'Caring'],
        description: 'Faithful and true, Dogs are devoted friends who protect those they love.',
        compatibility: 'Best with: Tiger, Horse, Rabbit',
        color: '#696969'
    },
    'Pig': {
        years: [2031, 2019, 2007, 1995, 1983, 1971, 1959, 1947],
        element: 'Water',
        traits: ['Compassionate', 'Generous', 'Diligent', 'Optimistic'],
        description: 'Kind and generous, Pigs bring abundance and joy to everyone around them.',
        compatibility: 'Best with: Rabbit, Goat, Tiger',
        color: '#FFB6C1'
    }
};

// Life path number meanings
const lifePathInfo = {
    1: {
        title: 'The Leader',
        traits: ['Independent', 'Ambitious', 'Innovative', 'Determined'],
        description: 'Natural-born leaders who blaze their own trails and inspire others to follow.',
        compatibility: 'Best with: 3, 5, 6'
    },
    2: {
        title: 'The Peacemaker',
        traits: ['Diplomatic', 'Sensitive', 'Cooperative', 'Intuitive'],
        description: 'Harmony-seekers who bring balance and understanding to relationships.',
        compatibility: 'Best with: 4, 8, 9'
    },
    3: {
        title: 'The Communicator',
        traits: ['Creative', 'Expressive', 'Optimistic', 'Social'],
        description: 'Joyful souls who spread happiness and connect people through communication.',
        compatibility: 'Best with: 1, 5, 7'
    },
    4: {
        title: 'The Builder',
        traits: ['Practical', 'Reliable', 'Organized', 'Hardworking'],
        description: 'Foundation-builders who create lasting structures and systems.',
        compatibility: 'Best with: 2, 6, 8'
    },
    5: {
        title: 'The Adventurer',
        traits: ['Freedom-loving', 'Versatile', 'Curious', 'Dynamic'],
        description: 'Free spirits who embrace change and seek new experiences.',
        compatibility: 'Best with: 1, 3, 9'
    },
    6: {
        title: 'The Nurturer',
        traits: ['Caring', 'Responsible', 'Compassionate', 'Protective'],
        description: 'Natural caregivers who create harmony and support others.',
        compatibility: 'Best with: 1, 4, 7'
    },
    7: {
        title: 'The Seeker',
        traits: ['Analytical', 'Spiritual', 'Introspective', 'Wise'],
        description: 'Truth-seekers who dive deep into life\'s mysteries and meaning.',
        compatibility: 'Best with: 3, 5, 6'
    },
    8: {
        title: 'The Achiever',
        traits: ['Ambitious', 'Authoritative', 'Successful', 'Material-minded'],
        description: 'Powerful manifestors who achieve great success in the material world.',
        compatibility: 'Best with: 2, 4, 6'
    },
    9: {
        title: 'The Humanitarian',
        traits: ['Compassionate', 'Generous', 'Idealistic', 'Universal'],
        description: 'World-servers who dedicate themselves to helping humanity.',
        compatibility: 'Best with: 2, 5, 8'
    },
    11: {
        title: 'The Illuminator',
        traits: ['Inspiring', 'Intuitive', 'Spiritual', 'Visionary'],
        description: 'Spiritual messengers who bring light and inspiration to others.',
        compatibility: 'Best with: 2, 4, 6'
    },
    22: {
        title: 'The Master Builder',
        traits: ['Powerful', 'Practical', 'Visionary', 'Influential'],
        description: 'Master manifestors who build dreams into reality on a large scale.',
        compatibility: 'Best with: 4, 6, 8'
    },
    33: {
        title: 'The Master Teacher',
        traits: ['Compassionate', 'Wise', 'Healing', 'Uplifting'],
        description: 'Spiritual teachers who heal and uplift humanity through love.',
        compatibility: 'Best with: 6, 9, 11'
    }
};

// Success stories for testimonials
const successStories = [
    {
        id: 1,
        names: 'Emma & David',
        zodiac1: 'Leo',
        zodiac2: 'Libra',
        compatibility: 92,
        story: 'Our cosmic connection was undeniable from the first message. As a Leo and Libra, we balance each other perfectly. The platform showed us our 92% compatibility, and it was spot on!',
        image: 'https://picsum.photos/seed/success1/300/200.jpg',
        duration: '2 years together'
    },
    {
        id: 2,
        names: 'Maya & James',
        zodiac1: 'Pisces',
        zodiac2: 'Scorpio',
        compatibility: 88,
        story: 'Being a Pisces, I always felt misunderstood until I met James, my Scorpio soulmate. Our water sign connection runs deep, and we understand each other on a spiritual level.',
        image: 'https://picsum.photos/seed/success2/300/200.jpg',
        duration: '18 months together'
    },
    {
        id: 3,
        names: 'Alex & Sarah',
        zodiac1: 'Aquarius',
        zodiac2: 'Gemini',
        compatibility: 85,
        story: 'As fellow air signs, we connected instantly on an intellectual level. Our conversations never end, and we inspire each other daily. Thank you, Cosmic Connections!',
        image: 'https://picsum.photos/seed/success3/300/200.jpg',
        duration: '1 year together'
    },
    {
        id: 4,
        names: 'Carlos & Maria',
        zodiac1: 'Taurus',
        zodiac2: 'Virgo',
        compatibility: 90,
        story: 'Our earth sign compatibility creates such a stable, loving foundation. We both value loyalty and build our relationship on trust and mutual respect.',
        image: 'https://picsum.photos/seed/success4/300/200.jpg',
        duration: '3 years together'
    }
];

// Hobby categories for matching
const hobbyCategories = {
    'Creative': ['Art', 'Music', 'Writing', 'Photography', 'Design', 'Crafts'],
    'Active': ['Fitness', 'Sports', 'Hiking', 'Dancing', 'Yoga', 'Swimming'],
    'Intellectual': ['Reading', 'Learning', 'Philosophy', 'Science', 'Technology', 'Chess'],
    'Social': ['Travel', 'Cooking', 'Dining', 'Parties', 'Networking', 'Volunteering'],
    'Spiritual': ['Meditation', 'Astrology', 'Crystals', 'Tarot', 'Healing', 'Nature'],
    'Entertainment': ['Movies', 'Gaming', 'Theater', 'Concerts', 'Museums', 'Comedy']
};

// Location data for realistic user distribution
const locations = [
    { city: 'New York', state: 'NY', country: 'USA', lat: 40.7128, lng: -74.0060 },
    { city: 'Los Angeles', state: 'CA', country: 'USA', lat: 34.0522, lng: -118.2437 },
    { city: 'Chicago', state: 'IL', country: 'USA', lat: 41.8781, lng: -87.6298 },
    { city: 'Houston', state: 'TX', country: 'USA', lat: 29.7604, lng: -95.3698 },
    { city: 'Phoenix', state: 'AZ', country: 'USA', lat: 33.4484, lng: -112.0740 },
    { city: 'Philadelphia', state: 'PA', country: 'USA', lat: 39.9526, lng: -75.1652 },
    { city: 'San Antonio', state: 'TX', country: 'USA', lat: 29.4241, lng: -98.4936 },
    { city: 'San Diego', state: 'CA', country: 'USA', lat: 32.7157, lng: -117.1611 },
    { city: 'Dallas', state: 'TX', country: 'USA', lat: 32.7767, lng: -96.7970 },
    { city: 'San Jose', state: 'CA', country: 'USA', lat: 37.3382, lng: -121.8863 }
];

// Compatibility tips and insights
const compatibilityTips = {
    'high': [
        'Your cosmic energies align perfectly! This connection has strong potential for lasting love.',
        'The stars have blessed this match. Your compatibility suggests deep understanding and harmony.',
        'This is a cosmic connection worth exploring. Your energies complement each other beautifully.'
    ],
    'medium': [
        'With understanding and effort, this connection can grow stronger. Focus on communication.',
        'Your differences can create balance. Embrace what makes each of you unique.',
        'This match has potential! Working together can strengthen your cosmic bond.'
    ],
    'low': [
        'Every connection teaches us something. This match may require extra patience and understanding.',
        'Sometimes the most unexpected pairings create the most growth. Keep an open mind.',
        'While challenging, this connection could lead to personal transformation for both partners.'
    ]
};

// Life path compatibility insights
const lifePathInsights = {
    '1-1': 'Two leaders can create a power couple, but must learn to share the spotlight.',
    '1-2': 'The leader and peacemaker balance each other perfectly - a harmonious match.',
    '1-3': 'Creative energy flows between you. This pairing inspires innovation and joy.',
    '2-4': 'The peacemaker and builder create stable, nurturing relationships.',
    '3-5': 'Adventure and creativity combine for an exciting, dynamic partnership.',
    '6-9': 'The nurturer and humanitarian share deep compassion and service to others.',
    '7-11': 'Two spiritual seekers on parallel journeys of wisdom and understanding.',
    '8-22': 'The achiever and master builder can manifest incredible success together.'
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        zodiacInfo,
        chineseZodiacInfo,
        lifePathInfo,
        successStories,
        hobbyCategories,
        locations,
        compatibilityTips,
        lifePathInsights
    };
}