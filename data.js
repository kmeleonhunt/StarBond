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
// Chinese zodiac information with correct elements by year
const chineseZodiacInfo = {
    'Rat': {
        years: [
            {year: 2020, element: 'Metal'},
            {year: 2008, element: 'Earth'},
            {year: 1996, element: 'Fire'},
            {year: 1984, element: 'Wood'},
            {year: 1972, element: 'Water'},
            {year: 1960, element: 'Metal'},
            {year: 1948, element: 'Earth'},
            {year: 1936, element: 'Fire'}
        ],
        traits: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming'],
        description: 'Clever and resourceful, Rats are natural survivors who thrive in any environment.',
        compatibility: 'Best with: Dragon, Monkey, Ox',
        color: '#4169E1'
    },
    'Ox': {
        years: [
            {year: 2021, element: 'Metal'},
            {year: 2009, element: 'Earth'},
            {year: 1997, element: 'Fire'},
            {year: 1985, element: 'Wood'},
            {year: 1973, element: 'Water'},
            {year: 1961, element: 'Metal'},
            {year: 1949, element: 'Earth'},
            {year: 1937, element: 'Fire'}
        ],
        traits: ['Diligent', 'Dependable', 'Strong', 'Determined'],
        description: 'Steady and reliable, Oxen build strong foundations through patience and hard work.',
        compatibility: 'Best with: Snake, Rooster, Rat',
        color: '#8B4513'
    },
    'Tiger': {
        years: [
            {year: 2022, element: 'Water'},
            {year: 2010, element: 'Metal'},
            {year: 1998, element: 'Earth'},
            {year: 1986, element: 'Fire'},
            {year: 1974, element: 'Wood'},
            {year: 1962, element: 'Water'},
            {year: 1950, element: 'Metal'},
            {year: 1938, element: 'Earth'}
        ],
        traits: ['Brave', 'Confident', 'Competitive', 'Charismatic'],
        description: 'Fierce and courageous, Tigers are natural leaders who inspire others with their passion.',
        compatibility: 'Best with: Horse, Dog, Pig',
        color: '#FF4500'
    },
    'Rabbit': {
        years: [
            {year: 2023, element: 'Water'},
            {year: 2011, element: 'Metal'},
            {year: 1999, element: 'Earth'},
            {year: 1987, element: 'Fire'},
            {year: 1975, element: 'Wood'},
            {year: 1963, element: 'Water'},
            {year: 1951, element: 'Metal'},
            {year: 1939, element: 'Earth'}
        ],
        traits: ['Gentle', 'Elegant', 'Compassionate', 'Peaceful'],
        description: 'Graceful and kind, Rabbits bring harmony and beauty to the world around them.',
        compatibility: 'Best with: Goat, Pig, Dog',
        color: '#FFB6C1'
    },
    'Dragon': {
        years: [
            {year: 2024, element: 'Wood'},
            {year: 2012, element: 'Water'},
            {year: 2000, element: 'Metal'},
            {year: 1988, element: 'Earth'},
            {year: 1976, element: 'Fire'},
            {year: 1964, element: 'Wood'},
            {year: 1952, element: 'Water'},
            {year: 1940, element: 'Metal'}
        ],
        traits: ['Ambitious', 'Energetic', 'Lucky', 'Powerful'],
        description: 'Majestic and powerful, Dragons are born leaders who achieve great things.',
        compatibility: 'Best with: Rat, Monkey, Rooster',
        color: '#FFD700'
    },
    'Snake': {
        years: [
            {year: 2025, element: 'Wood'},
            {year: 2013, element: 'Water'},
            {year: 2001, element: 'Metal'},
            {year: 1989, element: 'Earth'},
            {year: 1977, element: 'Fire'},
            {year: 1965, element: 'Wood'},
            {year: 1953, element: 'Water'},
            {year: 1941, element: 'Metal'}
        ],
        traits: ['Wise', 'Mysterious', 'Intuitive', 'Graceful'],
        description: 'Enigmatic and wise, Snakes possess deep understanding and natural elegance.',
        compatibility: 'Best with: Ox, Rooster, Monkey',
        color: '#8A2BE2'
    },
    'Horse': {
        years: [
            {year: 2026, element: 'Fire'},
            {year: 2014, element: 'Wood'},
            {year: 2002, element: 'Water'},
            {year: 1990, element: 'Metal'},
            {year: 1978, element: 'Earth'},
            {year: 1966, element: 'Fire'},
            {year: 1954, element: 'Wood'},
            {year: 1942, element: 'Water'}
        ],
        traits: ['Active', 'Energetic', 'Kind', 'Popular'],
        description: 'Free-spirited and energetic, Horses bring joy and excitement wherever they go.',
        compatibility: 'Best with: Tiger, Dog, Goat',
        color: '#DC143C'
    },
    'Goat': {
        years: [
            {year: 2027, element: 'Fire'},
            {year: 2015, element: 'Wood'},
            {year: 2003, element: 'Water'},
            {year: 1991, element: 'Metal'},
            {year: 1979, element: 'Earth'},
            {year: 1967, element: 'Fire'},
            {year: 1955, element: 'Wood'},
            {year: 1943, element: 'Water'}
        ],
        traits: ['Gentle', 'Calm', 'Creative', 'Thoughtful'],
        description: 'Peaceful and artistic, Goats create beauty and harmony in their surroundings.',
        compatibility: 'Best with: Rabbit, Pig, Horse',
        color: '#F0E68C'
    },
    'Monkey': {
        years: [
            {year: 2028, element: 'Earth'},
            {year: 2016, element: 'Fire'},
            {year: 2004, element: 'Wood'},
            {year: 1992, element: 'Water'},
            {year: 1980, element: 'Metal'},
            {year: 1968, element: 'Earth'},
            {year: 1956, element: 'Fire'},
            {year: 1944, element: 'Wood'}
        ],
        traits: ['Clever', 'Curious', 'Mischievous', 'Innovative'],
        description: 'Quick-witted and playful, Monkeys solve problems with creativity and humor.',
        compatibility: 'Best with: Dragon, Rat, Snake',
        color: '#DAA520'
    },
    'Rooster': {
        years: [
            {year: 2029, element: 'Earth'},
            {year: 2017, element: 'Fire'},
            {year: 2005, element: 'Wood'},
            {year: 1993, element: 'Water'},
            {year: 1981, element: 'Metal'},
            {year: 1969, element: 'Earth'},
            {year: 1957, element: 'Fire'},
            {year: 1945, element: 'Wood'}
        ],
        traits: ['Observant', 'Hardworking', 'Courageous', 'Punctual'],
        description: 'Proud and confident, Roosters excel at organization and leadership.',
        compatibility: 'Best with: Ox, Snake, Dragon',
        color: '#FF6347'
    },
    'Dog': {
        years: [
            {year: 2030, element: 'Metal'},
            {year: 2018, element: 'Earth'},
            {year: 2006, element: 'Fire'},
            {year: 1994, element: 'Wood'},
            {year: 1982, element: 'Water'},
            {year: 1970, element: 'Metal'},
            {year: 1958, element: 'Earth'},
            {year: 1946, element: 'Fire'}
        ],
        traits: ['Loyal', 'Honest', 'Responsible', 'Caring'],
        description: 'Faithful and true, Dogs are devoted friends who protect those they love.',
        compatibility: 'Best with: Tiger, Horse, Rabbit',
        color: '#696969'
    },
    'Pig': {
        years: [
            {year: 2031, element: 'Metal'},
            {year: 2019, element: 'Earth'},
            {year: 2007, element: 'Fire'},
            {year: 1995, element: 'Wood'},
            {year: 1983, element: 'Water'},
            {year: 1971, element: 'Metal'},
            {year: 1959, element: 'Earth'},
            {year: 1947, element: 'Fire'}
        ],
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
