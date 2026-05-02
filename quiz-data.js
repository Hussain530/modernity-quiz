const quizData = [
    {
        id: 1,
        type: 'mcq',
        question: 'The idea that religion has a language is __________________.',
        options: ['Medieval', 'Modern', 'Aryan', 'Semitic'],
        correct: 1, // Modern (index)
        hint: 'Think about when scholars started analyzing religion systematically'
    },
    {
        id: 2,
        type: 'tf',
        question: 'Pre-modern states lacked the apparatuses of census and territorial mapping.',
        options: ['True', 'False'],
        correct: 0, // True
        hint: 'Consider what tools modern states use to control populations'
    },
    {
        id: 3,
        type: 'mcq',
        question: 'The film Exterminate All the Brutes most strongly argues that the Holocaust should be understood as:',
        options: ['A complete break from earlier European history', 'An event caused solely by German exceptionalism', 'A phenomenon disconnected from colonial practices', 'A manifestation of longer histories of racial violence'],
        correct: 3,
        hint: 'The film connects the Holocaust to what came before in Europe'
    },
    {
        id: 4,
        type: 'mcq',
        question: 'The Germans were responsible for the mass-murder of which people of Africa?',
        options: ['The Herero', 'The Zulu', 'The Mali', 'The Maji Maji'],
        correct: 0,
        hint: 'This occurred in German Southwest Africa'
    },
    {
        id: 5,
        type: 'mcq',
        question: 'West, Civilizations, Nations, and Islam are all examples of',
        options: ['collective singularities', 'collective pluralities', 'verbal nouns', 'none of the above'],
        correct: 0,
        hint: 'These are all treated as singular unified concepts'
    },
    {
        id: 6,
        type: 'fillblank',
        question: 'Queen Elizabeth I the Great\'s "marriage to England" is an example of "the collapse of the __________ into the immanent".',
        correct: 'transcendent',
        hint: 'It\'s the opposite of immanent - something above or beyond'
    },
    {
        id: 7,
        type: 'mcq',
        question: 'The leviathan was a biblical _________ representing chaos and enormous power.',
        options: ['Archangel', 'Saint', 'Monster', 'Demigod'],
        correct: 2,
        hint: 'It\'s a fearsome creature from the Bible'
    },
    {
        id: 8,
        type: 'mcq',
        question: 'Before colonialism the term Islam was:',
        options: ['A proper name rather than a verbal noun', 'A verbal noun rather than a proper name', 'Used as a name for the civilization of Muslims', 'Treated with admiration in some parts of Europe'],
        correct: 1,
        hint: 'Colonialism changed how we categorize religions'
    },
    {
        id: 9,
        type: 'mcq',
        question: 'Presentism refers to:',
        options: ['The study of history only through primary sources', 'The belief that the past has no relevance to the present', 'The interpretation of the past based on the present', 'The idea that all historical periods are fundamentally the same'],
        correct: 2,
        hint: 'It\'s about how we judge the past by today\'s standards'
    },
    {
        id: 10,
        type: 'mcq',
        question: 'Frontier masculinity refers to:',
        options: ['A form of masculinity defined by domestic stability and social refinement', 'A model of manhood characterized by violence, instability, and hardship', 'The ideal of masculinity found across the world in patriarchal societies', 'A religiously grounded concept of male virtue centered on discipline and restraint'],
        correct: 1,
        hint: 'Think of the American West and what it symbolized'
    },
    {
        id: 11,
        type: 'mcq',
        question: 'According to Ashis Nandy, imperial rule can be understood as:',
        options: ['A system based purely on economic exploitation without cultural dimensions', 'A form of governance that promotes equality between colonizer and colonized', 'A neutral administrative framework aimed at modernization', 'A gendered structure in which masculinity dominates femininity'],
        correct: 3,
        hint: 'Consider gender dynamics in colonialism'
    },
    {
        id: 12,
        type: 'fillblank',
        question: 'The 1872 painting by John Gast, depicting the flight of Native Americans and animals from the light of American empire progressing West, was called: ________.',
        correct: 'American Progress',
        hint: 'It\'s an iconic American painting about westward expansion'
    },
    {
        id: 13,
        type: 'tf',
        question: 'In every historical age people have thought of themselves as being modern with respect to the past.',
        options: ['True', 'False'],
        correct: 1, // False
        hint: 'Is modernity a recent concept?'
    },
    {
        id: 14,
        type: 'fillblank',
        question: 'In his famous 1898 speech in the Royal Albert Hall in London, the British Prime Minister Lord Salisbury divided the nations of the world into the _________ and the _________.',
        correct: 'living and the dying',
        hint: 'Salisbury believed some nations were destined to decline'
    },
    {
        id: 15,
        type: 'fillblank',
        question: 'The modern expression \'survival of the fittest\' was invented by the \'social thinker\' Herbert Spencer in the year _________.',
        correct: '1864',
        hint: 'It was after Darwin\'s Origin of Species'
    },
    {
        id: 16,
        type: 'fillblank',
        question: 'Charles Darwin wrote the modern \'classic, On the Origin of Species in the year _________.',
        correct: '1859',
        hint: 'A decade before Spencer'
    },
    {
        id: 17,
        type: 'fillblank',
        question: 'What is the Urdu expression for \'survival of the fittest\'?',
        correct: 'There is none',
        hint: 'This concept didn\'t exist in Urdu before colonialism'
    },
    {
        id: 18,
        type: 'tf',
        question: 'Progress is the natural course of history, and so people have always believed in it.',
        options: ['True', 'False'],
        correct: 1, // False
        hint: 'Is belief in progress universal throughout history?'
    },
    {
        id: 19,
        type: 'fillblank',
        question: '\'Revolution\' replaces revelation. \'________\' (collective-singular) replaces God. \'Humanity\' replaces the messiah.',
        correct: 'History',
        hint: 'A secular replacement for religious concepts'
    },
    {
        id: 20,
        type: 'fillblank',
        question: 'Progress = collective historical __________.',
        correct: 'narcissism',
        hint: 'Think about self-love and self-admiration'
    },
    {
        id: 21,
        type: 'fillblank',
        question: 'The ideology of Progress makes living people into _________ from the past.',
        correct: 'ghosts',
        hint: 'They become something not fully real or present'
    },
    {
        id: 22,
        type: 'fillblank',
        question: 'The Christian support for Trump grew out of the corrupt modern interpretation of Christianity called the __________ gospel.',
        correct: 'prosperity',
        hint: 'It promises wealth and success'
    },
    {
        id: 23,
        type: 'fillblank',
        question: 'The implication of the cock-eyedness of Klee\'s Angelus Novus is a vision of the present haunted by __________.',
        correct: 'the past',
        hint: 'Benjamin discusses this painting'
    },
    {
        id: 24,
        type: 'fillblank',
        question: 'William Faulkner\'s famous sentence about the past is: _________.',
        correct: 'The past isn\'t dead, it isn\'t even past',
        hint: 'A famous quote about how the past persists'
    },
    {
        id: 25,
        type: 'fillblank',
        question: 'The lecture contrasted the modern idea of world-history with premodern ideas of ___________ history.',
        correct: 'cosmological',
        hint: 'A history of the cosmos and creation'
    },
    {
        id: 26,
        type: 'fillblank',
        question: 'The course lecturer argued that the process of thinking begins with __________.',
        correct: 'self-questioning',
        hint: 'Critical thinking starts with doubting yourself'
    },
    {
        id: 27,
        type: 'fillblank',
        question: 'The course lecturer argued that an essential criterion of true universality is __________.',
        correct: 'self-criticism',
        hint: 'Universal claims must critique themselves'
    },
    {
        id: 28,
        type: 'fillblank',
        question: 'The \'Anthropocene\' does not refer to human history, but __________ history.',
        correct: 'geological',
        hint: 'It\'s about Earth\'s geological record'
    },
    {
        id: 29,
        type: 'mcq',
        question: 'The phrase "collapse of the transcendent into the immanent" refers to:',
        options: ['The disappearance of faith and religion, and the triumph of rationalism', 'The total denial of transcendence', 'The relocation of salvation into historical processes', 'The return to medieval theological ideas and arguments'],
        correct: 2,
        hint: 'Salvation becomes a historical event, not a divine one'
    },
    {
        id: 30,
        type: 'mcq',
        question: 'In John Gast\'s American Progress, the schoolbook carried by the allegorical figure symbolizes:',
        options: ['Religious conversion', 'National Enlightenment', 'Legal authority', 'Democratic equality'],
        correct: 1,
        hint: 'Education spreads with westward expansion'
    },
    {
        id: 31,
        type: 'mcq',
        question: 'Frederick Jackson Turner is associated with the idea that:',
        options: ['Race determines culture', 'The frontier shaped American identity', 'Industrialization destroyed democracy', 'Imperialism weakened nations'],
        correct: 1,
        hint: 'He wrote about the American frontier thesis'
    },
    {
        id: 32,
        type: 'mcq',
        question: 'Modern racial classification is linked to which scientific practice?',
        options: ['The research of evolutionary biology', 'Modern taxonomy applied to humans', 'Comparative linguistic and cognitive analysis', 'Cultural anthropology and ethnographic research'],
        correct: 1,
        hint: 'Classifying humans like specimens in nature'
    },
    {
        id: 33,
        type: 'fillblank',
        question: 'The modern idea that history itself proves superiority maps racial difference onto __________.',
        correct: 'time/history',
        hint: 'Some races are ahead in time, others behind'
    },
    {
        id: 34,
        type: 'mcq',
        question: 'Racism is the combination of:',
        options: ['Cultural and religious factors in a society', 'Economics and politics', 'Biological and historical superiority', 'Nationalism and imperialism'],
        correct: 2,
        hint: 'It combines nature and history'
    },
    {
        id: 35,
        type: 'mcq',
        question: 'Which distinction correctly describes chattel slavery?',
        options: ['The enslaved person owes labor but retains personhood', 'The enslaved person is bound to land, not owned', 'The enslaved person is property without qualification', 'The enslaved person holds customary rights'],
        correct: 2,
        hint: 'Total property status'
    },
    {
        id: 36,
        type: 'fillblank',
        question: 'In Christian millenarian thought since the late medieval period, technological advance was understood as the recovery of the perfection man possessed before __________.',
        correct: 'the Fall',
        hint: 'Adam and Eve\'s expulsion from Eden'
    },
    {
        id: 37,
        type: 'mcq',
        question: 'The term "polycrisis" refers to:',
        options: ['Multiple unrelated small crises that vary from region to region', 'A set of regional conflicts that threaten to escalate into global war', 'Interconnected global crises that amplify each other', 'A purely economic recession that may move to depression'],
        correct: 2,
        hint: 'Multiple crises that feed into each other'
    },
    {
        id: 38,
        type: 'mcq',
        question: 'Louis XIV is remembered as "Great" primarily because he:',
        options: ['Instituted the system of constitutional monarchy', 'Centralized and embodied the French state', 'Had a fine taste in architecture, arts and literature', 'Ended all wars in Europe through his diplomatic acumen'],
        correct: 1,
        hint: 'He said "I am the state"'
    },
    {
        id: 39,
        type: 'mcq',
        question: 'Elizabeth I is often remembered as embodying:',
        options: ['Catholic universalism and global pastoral service', 'English Protestant national identity', 'The spirit of the Elizabethan Age and Shakespearean ethos', 'Roman traditions of imperial authority'],
        correct: 1,
        hint: 'She\'s the symbol of English nationalism'
    },
    {
        id: 40,
        type: 'mcq',
        question: 'The phrase "L\'État, c\'est moi" (\'I am the state\') is associated with:',
        options: ['Peter the Great', 'Frederick the Great', 'Louis XIV', 'Catherine the Great'],
        correct: 2,
        hint: 'The French king said this'
    },
    {
        id: 41,
        type: 'mcq',
        question: 'In early modern Europe, monarchs increasingly embodied:',
        options: ['A universal empire', 'A national collective', 'Their dynasty', 'A tribal confederation'],
        correct: 1,
        hint: 'Nations, not universal empires'
    },
    {
        id: 42,
        type: 'mcq',
        question: 'The "king\'s two bodies" refers to:',
        options: ['The mortal body and the immortal political body', 'The armed forces and the ecclesiastical establishment', 'Two different kings sharing a single sovereignty', 'The monarch and his parliament'],
        correct: 0,
        hint: 'The body natural and the body politic'
    },
    {
        id: 43,
        type: 'mcq',
        question: 'The Mughal Empire did NOT:',
        options: ['Govern diverse cultures and peoples', 'Claim universal kingship', 'Embody a nation called "Hindustan"', 'Develop court ritual and spiritual allegiance'],
        correct: 2,
        hint: 'The Mughal Empire was not a nation-state'
    },
    {
        id: 44,
        type: 'fillblank',
        question: 'The modern cult of "Progress" is a cognitive __________.',
        correct: 'catastrophe',
        hint: 'A disaster for thinking'
    },
    {
        id: 45,
        type: 'tf',
        question: 'David Olusoga discusses a painting set in 16th century Lisbon in which all the Africans are slaves.',
        options: ['True', 'False'],
        correct: 0, // True
        hint: 'Slavery in early colonial Europe'
    },
    {
        id: 46,
        type: 'mcq',
        question: 'The two World Wars:',
        options: ['Strengthened unquestioned belief in progress', 'Ended industrialization', 'Weakened the prestige of the idea of progress', 'Created feudalism'],
        correct: 2,
        hint: 'Wars devastate the idea of progress'
    },
    {
        id: 47,
        type: 'mcq',
        question: 'In the twentieth century, "development" often replaced the term:',
        options: ['Civilization', 'Empire', 'Progress', 'Revolution'],
        correct: 2,
        hint: 'A new term for the old ideology'
    },
    {
        id: 48,
        type: 'mcq',
        question: 'In the essay by Jose Maria Sbert on Progress, the latter is described as having a quasi-religious quality because it:',
        options: ['Replaced all religion officially', 'Was preached by priests', 'Promised future redemption', 'Rejected science'],
        correct: 2,
        hint: 'Like salvation, progress promises a better future'
    },
    {
        id: 49,
        type: 'mcq',
        question: 'Modernization required:',
        options: ['Preservation of tribal structures', 'Acceptance of the industrial way of life', 'Rejection of science and technology', 'Isolation from the world'],
        correct: 1,
        hint: 'Industrialization is central to modernity'
    },
    {
        id: 50,
        type: 'mcq',
        question: 'The events of 1492 in Iberia involved:',
        options: ['The Renaissance and the Protestant Reformation', 'Ethnic cleansing and overseas colonization', 'Industrialization', 'The Enlightenment'],
        correct: 1,
        hint: 'The Spanish Inquisition and Columbus sailed'
    },
    {
        id: 51,
        type: 'mcq',
        question: 'Indirect rule relied heavily on:',
        options: ['Native elites and local authorities', 'European settlers', 'International organizations', 'Industrial workers'],
        correct: 0,
        hint: 'Colonial governors ruled through local leaders'
    },
    {
        id: 52,
        type: 'mcq',
        question: 'According to Mamdani, indirect rule tended to create:',
        options: ['Democratic states', 'Permanent minorities', 'Economic equality', 'Religious unity'],
        correct: 1,
        hint: 'It divided populations into groups'
    },
    {
        id: 53,
        type: 'mcq',
        question: 'Thomas Babington Macaulay argued that colonial education should create:',
        options: ['Independent intellectuals and civic-political actors', 'Religious scholars, writers, and preachers', 'Interpreters between the British and Indian subjects', 'Agricultural workers'],
        correct: 2,
        hint: 'Education as a tool of cultural intermediation'
    },
    {
        id: 54,
        type: 'mcq',
        question: 'Which thinker argued for toleration of minorities as long as they were loyal to the state?',
        options: ['Thomas Hobbes', 'Jean-Jacques Rousseau', 'Karl Marx', 'John Locke'],
        correct: 3,
        hint: 'The philosopher of liberalism'
    },
    {
        id: 55,
        type: 'mcq',
        question: 'The doctrine that allowed European explorers to claim lands inhabited by non-Christians was called:',
        options: ['Doctrine of sovereignty', 'Doctrine of discovery', 'Doctrine of nationalism', 'Doctrine of assimilation'],
        correct: 1,
        hint: 'This justified European colonization'
    },
    {
        id: 56,
        type: 'fillblank',
        question: 'The Treaty of __________ is usually considered the beginning of the modern state system.',
        correct: 'Westphalia',
        hint: 'A 1648 treaty that ended religious wars'
    },
    {
        id: 57,
        type: 'fillblank',
        question: 'The first famine under British rule in India, soon after they won the right to collect revenue, happened in the year __________.',
        correct: '1770',
        hint: 'Late 18th century'
    },
    {
        id: 58,
        type: 'fillblank',
        question: 'The policy of bringing European culture and institutions to colonies was known as the __________ mission.',
        correct: 'civilising',
        hint: 'The ideology of colonialism'
    },
    {
        id: 59,
        type: 'fillblank',
        question: 'In contrasting pre-British governance with British administration, Mike Davis uses the expression \'laws of __________ versus laws __________\'.',
        correct: 'leather versus of iron',
        hint: 'Harsh versus harsh, but different kinds'
    },
    {
        id: 60,
        type: 'mcq',
        question: 'Matthew Arnold described Europe\'s cultural origins as a combination of:',
        options: ['Greek and Roman traditions', 'Hellenism and Hebraism', 'Christianity and Islam', 'Philosophy and science'],
        correct: 1,
        hint: 'Two major cultural traditions'
    },
    {
        id: 61,
        type: 'mcq',
        question: 'In Arnold\'s framework, Hellenism is most associated with:',
        options: ['Moral discipline and rigour, as well as obedience', 'Political authority', 'Religious law and its observance', 'Scientific inquiry, art, and intellectual freedom'],
        correct: 3,
        hint: 'The Greek tradition of philosophy and beauty'
    },
    {
        id: 62,
        type: 'mcq',
        question: 'Hebraism, according to Arnold, emphasizes:',
        options: ['Rational philosophy and speculative thought', 'Aesthetic beauty, art and poetry', 'Moral duty and religious obedience', 'Scientific experimentation'],
        correct: 2,
        hint: 'Jewish religious tradition'
    },
    {
        id: 63,
        type: 'mcq',
        question: 'The scholar who famously noted similarities between Sanskrit, Greek, and Latin in 1786 was:',
        options: ['Friedrich Schlegel', 'Ernest Renan', 'William Jones', 'Franz Bopp'],
        correct: 2,
        hint: 'An English scholar in India'
    },
    {
        id: 64,
        type: 'mcq',
        question: 'Early European philologists used the term "Aryan" primarily to refer to:',
        options: ['A political ideology', 'A family of languages', 'A religious tradition', 'A geographical region'],
        correct: 1,
        hint: 'Originally a linguistic term'
    },
    {
        id: 65,
        type: 'mcq',
        question: 'The discovery of the Indo-European language family led scholars to compare it with another major language group called:',
        options: ['Hellenic', 'Semitic', 'Germanic', 'Romanic'],
        correct: 1,
        hint: 'The other major language family'
    },
    {
        id: 66,
        type: 'mcq',
        question: 'Wilhelm von Humboldt believed that language:',
        options: ['Was merely a tool for communication', 'Reflected the inner spirit of a people', 'Developed randomly', 'Had little relation to culture'],
        correct: 1,
        hint: 'Language embodies cultural identity'
    },
    {
        id: 67,
        type: 'mcq',
        question: 'Nineteenth-century philologists often ranked languages according to their grammatical structure, placing the highest value on:',
        options: ['Agglutination', 'Inflection', 'Trilateral root system', 'A large and growing vocabulary'],
        correct: 1,
        hint: 'Indo-European languages with complex inflections'
    },
    {
        id: 68,
        type: 'mcq',
        question: 'According to Marx, capital:',
        options: ['Abstracts', 'Moralizes', 'Civilizes', 'Harmonizes'],
        correct: 0,
        hint: 'Capital removes human relationships'
    },
    {
        id: 69,
        type: 'mcq',
        question: 'The core move of the documentary series on capitalism is to:',
        options: ['Celebrate free markets as timeless', 'Defend neoliberalism', 'Reject all economic thought', 'Denaturalize capitalism'],
        correct: 3,
        hint: 'Show capitalism as a historical system, not natural'
    },
    {
        id: 70,
        type: 'mcq',
        question: 'According to the series, the neoliberal turn is associated with:',
        options: ['Marx and Engels', 'Hayek and Friedman', 'Smith and Ricardo', 'Polanyi and Keynes'],
        correct: 1,
        hint: 'Modern free-market advocates'
    },
    {
        id: 71,
        type: 'mcq',
        question: 'Polanyi is presented as the thinker who shows that the self-regulating market is:',
        options: ['Ideal for the development of a productive society', 'A transhistorical fact of human society and thus natural to it', 'Historically anomalous and socially destructive', 'Politically neutral and therefore a matter for experts'],
        correct: 2,
        hint: 'The market is not natural, it causes harm'
    },
    {
        id: 72,
        type: 'mcq',
        question: 'The final episode argues that economic transactions have usually been:',
        options: ['Governed only by price signals determined by the market', 'Embedded in social norms and institutions', 'A separate sphere from society that has its own rules', 'Controlled by credit systems such as banks and other financial institutions'],
        correct: 1,
        hint: 'Economy is embedded in society'
    },
    {
        id: 73,
        type: 'mcq',
        question: 'The final normative claim of the series is that:',
        options: ['Society must be subordinated to the market', 'The market must replace politics', 'The economy must be reintegrated into society', 'Austerity is the ideal economic arrangement for prosperity'],
        correct: 2,
        hint: 'Economy should serve society'
    },
    {
        id: 74,
        type: 'mcq',
        question: 'What does the term \'martial races\' mean in Streets\' introduction?',
        options: ['All soldiers are equally manly and worthy of battle', 'Some groups of men are naturally suited to war', 'Only Europeans can be good soldiers', 'War is caused only by religion'],
        correct: 1,
        hint: 'Racialization of military capability'
    },
    {
        id: 75,
        type: 'mcq',
        question: 'Which three groups does Streets say were linked in British military and popular discourse?',
        options: ['Pathans, Bengalis, and Tamils', 'English, Scots, and Irish', 'Highlanders, Sikhs, and Gurkhas', 'Rajputs, Marathas, and Afghans'],
        correct: 2,
        hint: 'Groups seen as martial'
    },
    {
        id: 76,
        type: 'mcq',
        question: 'After 1857, British recruitment in India shifted especially toward:',
        options: ['Bengal and Madras', 'Burma and Ceylon', 'Bombay and Gujarat', 'Punjab and Nepal'],
        correct: 3,
        hint: 'Away from rebel regions'
    },
    {
        id: 77,
        type: 'mcq',
        question: 'By 1914, about how much of the native infantry was made up of so-called martial races?',
        options: ['One-quarter', 'One-third', 'One-half', 'Three-quarters'],
        correct: 3,
        hint: 'The majority'
    },
    {
        id: 78,
        type: 'mcq',
        question: 'Streets says martial race ideology was most systematically developed between:',
        options: ['1750 and 1800', '1814 and 1857', '1880 and 1914', '1919 and 1947'],
        correct: 2,
        hint: 'After 1857 rebellion'
    },
    {
        id: 79,
        type: 'mcq',
        question: 'Sikata Banerjee\'s book examines the relationship between masculinity and:',
        options: ['Hindu nationalism', 'Global capitalism', 'Buddhist monasticism', 'Mughal administration'],
        correct: 0,
        hint: 'Modern Indian political movement'
    },
    {
        id: 80,
        type: 'mcq',
        question: 'According to Banerjee, the British often represented Indian men as:',
        options: ['Naturally democratic', 'Spiritually superior', 'The effeminate other', 'Ideal citizen-soldiers'],
        correct: 2,
        hint: 'Emasculation as colonial strategy'
    },
    {
        id: 81,
        type: 'mcq',
        question: 'Banerjee argues that Hindu nationalist women often enter the movement through images such as:',
        options: ['Sovereign queen, worker, and dancer', 'Virginal bride, maternal educator, and transmitter of tradition', 'Heroic mother, chaste wife, and celibate warrior', 'Widow, reformer, and saint'],
        correct: 2,
        hint: 'Militant female imagery in nationalism'
    },
    {
        id: 82,
        type: 'mcq',
        question: 'Banerjee, following Benedict Anderson, says nationalism is:',
        options: ['Ancient and unchanging', 'Entirely biological', 'Purely military', 'Imagined'],
        correct: 3,
        hint: 'Nations are constructed communities'
    },
    {
        id: 83,
        type: 'mcq',
        question: 'What is a major theme shared by both Streets and Banerjee?',
        options: ['Political matters are largely separate from gender relations and identities', 'Ideas of masculinity help shape political and national identities', 'Nationalism leads to social harmony, peace and fraternity', 'Race and religion do not matter in modern history'],
        correct: 1,
        hint: 'Gender is political'
    },
    {
        id: 84,
        type: 'mcq',
        question: 'Hypermasculinity is survivalist because it is:',
        options: ['Calm and self-forgetful', 'Always under threat', 'Devoted to contemplation', 'Indifferent to rank'],
        correct: 1,
        hint: 'Survival mode is permanent'
    },
    {
        id: 85,
        type: 'mcq',
        question: '"Manosphere masculinity is bare life with muscles" most nearly means:',
        options: ['Masculinity grounded in art and contemplation', 'Masculinity guided by wisdom traditions', 'Masculinity defined by service and humility', 'Masculinity reduced to survival'],
        correct: 3,
        hint: 'Stripped down to biological basics'
    },
    {
        id: 86,
        type: 'mcq',
        question: '"Bare life" refers to which one of two concepts of life in Plato:',
        options: ['Political citizenship', 'Rational contemplation', 'Biological continuance', 'Divine illumination'],
        correct: 2,
        hint: 'Mere biological existence'
    },
    {
        id: 87,
        type: 'mcq',
        question: 'Islamic metaphysics understands baqāʾ chiefly as:',
        options: ['Abiding in what is real', 'Indefinite biological continuation', 'Staying alive longer', 'Military endurance'],
        correct: 0,
        hint: 'A spiritual concept'
    },
    {
        id: 88,
        type: 'mcq',
        question: 'In Hobbes, the primary motivator of politics is:',
        options: ['Love of the beautiful state', 'Desire for virtue', 'Search for a just political order', 'Fear of violent death'],
        correct: 3,
        hint: 'Fear, not reason'
    },
    {
        id: 89,
        type: 'mcq',
        question: 'Hypermasculinity begins the moment:',
        options: ['Fear replaces the good', 'Courage replaces fear', 'Religion replaces politics', 'The state disappears'],
        correct: 0,
        hint: 'When survival trumps virtue'
    },
    {
        id: 90,
        type: 'mcq',
        question: 'In the "Survival vs. Saʿāda" contrast, saʿāda is associated with:',
        options: ['Paranoia and fear', 'Biological persistence', 'Excellence of soul', 'Domination of others'],
        correct: 2,
        hint: 'Arabic word for flourishing'
    },
    {
        id: 91,
        type: 'mcq',
        question: 'In the contrast between survival and wisdom, wisdom requires:',
        options: ['Acceleration and urgency', 'Constant novelty', 'Permanent anxiety', 'Ripening'],
        correct: 3,
        hint: 'Time to develop'
    },
    {
        id: 92,
        type: 'mcq',
        question: 'Sophia Vasalou\'s account of greatness of spirit centers on:',
        options: ['Domination and honour-seeking', 'Aspiration toward the noble', 'Status and wealth accumulation', 'Public display and performance'],
        correct: 1,
        hint: 'Virtue of the soul'
    },
    {
        id: 93,
        type: 'mcq',
        question: 'Sachiko Murata\'s account of manliness and futuwwa teaches that true manliness is:',
        options: ['Swagger and self-display', 'Political dominance', 'Physical prowess above all', 'Purification of intention'],
        correct: 3,
        hint: 'Islamic virtue of intention'
    },
    {
        id: 94,
        type: 'mcq',
        question: 'Muravvat/murūʾa includes all of the following except:',
        options: ['Generosity', 'Humanity', 'Politeness', 'Domination'],
        correct: 3,
        hint: 'What doesn\'t fit this virtue?'
    },
    {
        id: 95,
        type: 'mcq',
        question: 'Which quality is linked with goodness, prophecy, and intellect?',
        options: ['Ferocity and aggression', 'Forbearance and gentleness', 'Pride and honour deriving from revelation', 'Conquest'],
        correct: 1,
        hint: 'A gentle virtue'
    },
    {
        id: 96,
        type: 'fillblank',
        question: 'Progress is flat time; survival is flat life; hypermasculinity is flat __________.',
        correct: 'masculinity',
        hint: 'All three are "flat"'
    },
    {
        id: 97,
        type: 'mcq',
        question: 'According to the documentaries, the manosphere recruits men first of all through:',
        options: ['Advanced philosophical arguments and well-developed ideologies', 'Affective wounds such as loneliness, humiliation, and confusion', 'Religious rituals, prayer meetings, and pilgrimages to religious sites', 'State propaganda and public radio and television programmes'],
        correct: 1,
        hint: 'Emotional targeting'
    },
    {
        id: 98,
        type: 'mcq',
        question: 'The manosphere is primarily:',
        options: ['An ironic internet phenomenon that uses camp and other forms of irony', 'A harmless trend among young men that should be considered entertainment', 'A fringe phenomenon with no wider significance', 'A concentrated expression of wider modern logics'],
        correct: 3,
        hint: 'It reflects modern problems'
    },
    {
        id: 99,
        type: 'mcq',
        question: 'One major idea from Core 102 is that the manosphere often packages misogyny as:',
        options: ['Comedy for largely entertainment purposes', 'Therapy, self-improvement, and clarity', 'Legitimate reform of out-of-control \'political correctness\'', 'Environmental ethics'],
        correct: 1,
        hint: 'Misogyny disguised as help'
    },
    {
        id: 100,
        type: 'mcq',
        question: 'The manosphere is not just a belief system but also:',
        options: ['An industry', 'A medical diagnosis', 'A religion', 'A political party'],
        correct: 0,
        hint: 'It makes money'
    },
    {
        id: 101,
        type: 'mcq',
        question: 'Modernity helps produce manosphere culture by generating:',
        options: ['Total social conformism and ideological coherence', 'Universal equality and brotherhood', 'Competition and damaged forms of selfhood', 'The rapid acceleration of technology'],
        correct: 2,
        hint: 'Modern competition creates insecurity'
    },
    {
        id: 102,
        type: 'mcq',
        question: 'Lydia Wilson\'s article on the \'Academic Justification for Male Supremacy\' especially helps us see how male supremacy can appear as:',
        options: ['Young adult entertainment', 'Resistance to the regime of political correctness', 'Agricultural policy', 'Neutral science or hard truth'],
        correct: 3,
        hint: 'Disguised as objectivity'
    },
    {
        id: 103,
        type: 'mcq',
        question: 'In Lydia Wilson, evolutionary psychology is important because it can be used to:',
        options: ['Naturalize male aggression and female subordination', 'Abolish gender hierarchy and lead to social anarchy', 'Explain all the human and social sciences as well as economic behavior', 'Defend democracy'],
        correct: 0,
        hint: 'It provides scientific justification'
    },
    {
        id: 104,
        type: 'mcq',
        question: 'Lydia Wilson shows that modern domination often appears in:',
        options: ['Entrepreneurial form', 'Charismatic form', 'Rationalized form', 'Religious form'],
        correct: 2,
        hint: 'Hidden in logic and systems'
    },
    {
        id: 105,
        type: 'mcq',
        question: 'Cadwalladr\'s main move is to argue that Epstein should be understood not just as an exception, but as:',
        options: ['A minor celebrity phenomenon', 'A mirror of a wider culture', 'A fictional figure', 'A widely known legal case'],
        correct: 1,
        hint: 'Systemic problem, not individual'
    },
    {
        id: 106,
        type: 'mcq',
        question: 'In Cadwalladr\'s argument, the culture does not merely hide sexual exploitation, it also:',
        options: ['Abolishes desire', 'Rejects digital media', 'Protects all girls equally', 'Eroticizes teenagers for profit'],
        correct: 3,
        hint: 'Industry profits from sexualization'
    }
];
