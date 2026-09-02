/**
 * 5LA Insights — published article library.
 *
 * Single source of truth for the Insights landing page (/insights), the
 * individual article pages (/insights/[slug]), the homepage Insights preview,
 * and the sitemap.
 *
 * EDITOR NOTES
 * - `body` is an ordered list of blocks. A plain string is a paragraph;
 *   `{ list }` renders a bulleted list; `{ quote }` renders a pull quote;
 *   `{ heading }` renders a section subhead for pieces written in labelled
 *   sections. Pull quotes are lifted from the article's own text and are NOT
 *   repeated in the surrounding paragraphs.
 * - `readingMinutes()` is calculated from the real word count of `body` —
 *   never hand-written.
 * - `date` values are the editorial publication dates. Update them to the
 *   real publication dates before launch; they are the only field here that
 *   is not drawn from the approved article drafts.
 * - `image` paths point at /public/brand/insights. These are interim
 *   selections from the approved 5LA brand photography library; they can be
 *   replaced with dedicated article photography without touching any layout.
 */

/** A single block of article body content. */
export type Block =
  | string
  | { list: string[] }
  | { quote: string }
  | { heading: string };

export type Article = {
  /** URL slug (route: /insights/[slug]). */
  slug: string;
  /** Small editorial category label. */
  category: string;
  /** Article headline. */
  title: string;
  /**
   * Short standfirst shown under the title. Composed from sentences in the
   * article itself so the meaning of the draft is never altered.
   */
  dek: string;
  /** Short preview line used on cards. Also drawn from the article text. */
  excerpt: string;
  /** ISO publication date (YYYY-MM-DD). */
  date: string;
  /** Hero / preview photography. */
  image: string;
  /** Descriptive alt text for `image`. */
  imageAlt: string;
  /** Ordered article body. */
  body: Block[];
};

/** The article author — shared by every current article. */
export const author = {
  name: "L.J.",
  title: "Founder of The 5 Loaves Agency",
  byline: "L.J., Founder of The 5 Loaves Agency",
  bio:
    "L.J. brings more than two decades of experience across hospitality, events, operations, leadership, workforce development, media, and theatrical production.",
  /** Founder section on the About page. */
  href: "/about#founder-heading",
} as const;

export const articles: Article[] = [
  /* ------------------------------------------------------------------ 01 */
  {
    slug: "when-the-salary-disappears",
    category: "Training & Workforce Development",
    title: "When the Salary Disappears",
    dek: "Part Two: The real cost of job loss, and why career security may need a new definition.",
    excerpt:
      "A company may employ you. It should never own your entire ability to survive.",
    date: "2026-08-14",
    image: "/brand/insights/when-the-salary-disappears.jpg",
    imageAlt:
      "A Black woman executive in a burgundy suit reviewing documents and notes at a table in a warm, candlelit dining room.",
    body: [
      "Earlier this week, we talked about the employment losses Black women experienced during 2025.",
      "But counting jobs only tells part of the story.",
      "Because when a professional position disappears, a salary disappears with it.",
      "And that salary may be supporting far more than one person.",

      { heading: "Let’s talk about $75,000." },
      "According to U.S. Census Bureau data, approximately 7.06 million Black women between ages 25 and 64 worked full-time, year-round in 2024.",
      "Of that group, approximately 1.95 million earned at least $75,000 annually.",
      "That’s about 27.6% of full-time, year-round Black female workers in that age range.",
      "To be clear: that does not mean 1.95 million women earning $75,000 were laid off.",
      "The available public data do not allow us to make that connection.",
      "But the number tells us something important.",
      "There is a substantial population of Black women who spent years building careers capable of producing middle- and upper-middle-income salaries.",
      "And when those careers are disrupted, the consequences extend far beyond a job title.",
      "An $85,000 salary may be paying a mortgage.",
      "A $100,000 salary may be supporting children and an aging parent.",
      "That paycheck may be funding health insurance, tuition, retirement contributions, childcare, transportation and the emergency savings that took years to build.",
      "So when the job goes away, we shouldn’t simply say:",
      "“She lost her job.”",
      {
        quote:
          "She may have lost the financial structure holding an entire household together.",
      },

      { heading: "And “just get another job” isn’t always that simple." },
      "In 2025, the Bureau of Labor Statistics counted an annual average of approximately 769,000 unemployed Black women.",
      "About 222,000 had been unemployed for 27 weeks or longer.",
      "The average duration of unemployment for Black women was 27.1 weeks.",
      "That’s more than six months.",
      "Six months of applications.",
      "Six months of résumé changes.",
      "Six months of hearing that the company “decided to move in another direction.”",
      "Six months of wondering whether your experience now makes you overqualified.",
      "Six months of watching savings shrink.",
      "And if the next opportunity comes with a salary $20,000 or $30,000 lower than the previous one, employment may return—but the financial recovery may take considerably longer.",

      { heading: "So what does career security mean now?" },
      "This is the part I believe professionals need to think about differently.",
      "This is not an argument against education.",
      "It is not an argument against corporate careers.",
      "And it is certainly not an argument that everybody should quit tomorrow and become an entrepreneur.",
      "But I do believe the days of allowing one employer to represent our entire economic plan deserve reconsideration.",
      "A company can value you and still restructure.",
      "A manager can love your work and still be told to eliminate your department.",
      "Twenty years of service can still end with a severance package.",
      "So perhaps the question becomes:",
      "What belongs to you when the company no longer does?",
      "Your knowledge does.",
      "Your reputation does.",
      "Your relationships do.",
      "Your skills do.",
      "Your network does.",
      "Your ideas do.",
      "And the ability to generate income outside one employer can belong to you too.",
      "That may mean consulting. Freelancing. Teaching. Speaking. Contract work. Maintaining a professional portfolio. Building stronger industry relationships. Obtaining another certification. Creating a second stream of income. Or simply keeping your résumé and LinkedIn profile current before you need them.",
      "The answer doesn’t have to be entrepreneurship.",
      "The answer is options.",

      { heading: "The Compass Point" },
      "Maybe the new definition of professional security isn’t:",
      "“I have a good job.”",
      "Maybe it’s:",
      "“I have options if this job goes away.”",
      "Build the degree.",
      "Build the career.",
      "Build the retirement.",
      "Build the savings.",
      "But also build your skills, your network, your reputation and your ability to move.",
      "Because a company may employ you.",
      "It should never own your entire ability to survive.",

      { heading: "And there is another part of today’s employment environment we need to discuss." },
      "When someone has been unemployed for months, they’re tired.",
      "They’re applying everywhere.",
      "They’re watching savings disappear.",
      "Then suddenly an email arrives:",
      "“We reviewed your résumé and believe you’d be perfect for our remote management position. Salary: $95,000.”",
      "The message comes from Gmail.",
      "The interview happens by text.",
      "And the “recruiter” needs personal information immediately.",
      "When you’ve been searching for six months, a fraudulent job offer doesn’t always look like a scam.",
      "Sometimes it looks like relief.",
      "That’s where The Tablemakers Compass goes next.",
      "The Tablemakers Compass — where leadership, hospitality, business and the human experience meet.",
      "Sources: U.S. Census Bureau Current Population Survey/ASEC; U.S. Bureau of Labor Statistics; Economic Policy Institute; Institute for Women’s Policy Research.",
    ],
  },

  /* ------------------------------------------------------------------ 02 */
  {
    slug: "she-got-the-degree-part-one",
    category: "Training & Workforce Development",
    title:
      "She Got the Degree. She Built the Career. Then the Job Disappeared.",
    dek: "Part One: What happened to Black women in the workforce? The labor market changed around us, and the numbers deserve our attention.",
    excerpt:
      "Fourteen percent of the female workforce. More than half of the losses. That deserves a conversation.",
    date: "2026-08-12",
    image: "/brand/insights/she-got-the-degree.jpg",
    imageAlt:
      "A Black woman executive in a burgundy suit reviewing documents and notes at a table in a warm, candlelit dining room.",
    body: [
      "For generations, the instructions were clear.",
      "Go to school. Get the degree. Find a good job. Work hard. Move up. Build your retirement. Create a better life for your family.",
      "And for many Black women, that is exactly what we did.",
      "We earned the degrees. We entered industries where they were often one of very few. We became managers, directors, analysts, HR professionals, project leaders, administrators and government leaders.",
      "We built careers.",
      "And then, for a significant number of us, the job disappeared.",
      "Not because our degrees expired. Not because twenty years of experience suddenly meant nothing.",
      "The labor market changed around us.",
      "And the numbers deserve our attention.",

      { heading: "Let’s get the numbers right." },
      "You may have seen claims online that “600,000 Black women were laid off.”",
      "That is not a statistic I am comfortable repeating.",
      "Being laid off, becoming unemployed, losing employment and leaving the labor force are related but they are not the same thing.",
      "What we can document is still significant.",
      "According to the Institute for Women’s Policy Research, Black women had 251,000 fewer jobs in August 2025 than they did in January 2025.",
      "During that same period, Black women represented only 14.1% of the female workforce, yet accounted for 54.7% of the employment losses among women.",
      "By December, some employment had returned, but there were still 113,000 fewer employed Black women than there had been in January.",
      {
        quote:
          "Fourteen percent of the female workforce. More than half of the losses. That deserves a conversation.",
      },

      { heading: "And these weren’t simply entry-level workers." },
      "One of the most striking findings came from the Economic Policy Institute.",
      "Black women with bachelor’s degrees experienced a 3.5-percentage-point decline in their employment-to-population ratio between 2024 and 2025—the largest decline among the education groups examined.",
      "Their labor-force participation rate also declined.",
      "That matters because education has long been presented as one of the clearest paths to security.",
      "Get the degree and you’ll have options. Get into management and you’ll be safer. Build seniority and you’ll have stability.",
      "But what happens when the woman with the degree, certifications, leadership experience and fifteen years with an organization walks into work and learns that her position has been eliminated or given to someone else? Where exactly is the promised security then?",

      { heading: "The public sector was hit especially hard." },
      "This story also requires some honesty about where the losses occurred.",
      "It would be easy to say corporate America eliminated hundreds of thousands of Black women’s jobs.",
      "The data does not support that simple conclusion.",
      "EPI found that much of the overall decline was driven by the public sector.",
      "Black women’s public-sector employment fell by approximately 155,656, including about 95,371 fewer Black women employed by the federal government.",
      "There were also significant declines in areas such as financial activities, professional and business services and manufacturing.",
      "At the same time, gains in education and health services helped offset some of those losses.",
      "The story isn’t that every industry stopped hiring Black women.",
      "The story is that some of the career paths long viewed as stable suddenly became considerably less stable.",
      "And that should make all of us pay attention.",

      { heading: "The Compass Point" },
      "Maybe this isn’t simply a story about layoffs.",
      "Maybe it is a story about what happens when an entire generation of professionals realizes that doing everything “right” does not guarantee that the institution will protect the life they built around it.",
      "The degree still matters. Experience still matters. Leadership still matters.",
      "But perhaps we need to have a different conversation about security.",
      "Because having a good job and being economically secure are not always the same thing.",

      { heading: "Friday in Part Two: What happens when the salary disappears?" },
      "We’re going to talk about the nearly 2 million Black women earning $75,000 or more, long-term unemployment, the real household cost of losing a professional salary—and why today’s workers may need to start thinking differently about career security.",
      "Because the question may no longer be:",
      "“Do you have a good job?”",
      "The better question might be:",
      "“If that job disappeared tomorrow, what would you still have?”",
      "The Tablemakers Compass — where leadership, hospitality, business and the human experience meet.",
      "Sources: U.S. Bureau of Labor Statistics; Economic Policy Institute; Institute for Women’s Policy Research.",
    ],
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: "future-of-events-is-more-meaningful",
    category: "Events & Experience",
    title: "The Future of Events Isn’t Bigger. It’s More Meaningful.",
    dek: "Bigger does not automatically mean better. The future of events is not simply bigger. It is more meaningful.",
    excerpt:
      "An event can be visually impressive and still leave guests emotionally untouched. Meaningful events begin with purpose.",
    date: "2026-06-18",
    image: "/brand/insights/future-of-events.jpg",
    imageAlt:
      "An event director in a burgundy suit reviewing a floor plan and décor swatches in a candlelit ballroom while a team member sets the tables behind her.",
    body: [
      "For years, the event industry has treated size as proof of success.",
      "Bigger venues. Larger crowds. Taller stages. More lighting. More décor. More sponsors. More activations. More content. More moments designed to be photographed and shared.",
      "But bigger does not automatically mean better.",
      "An event can be visually impressive and still leave guests emotionally untouched. It can have hundreds of attendees and still feel impersonal. It can generate social-media content without creating a meaningful memory. It can cost more than ever before and still fail to communicate why people were invited into the room.",
      "The future of events is not simply bigger.",
      "It is more meaningful.",
      "Meaningful events begin with purpose. Before the venue is selected, the décor is designed, or the entertainment is booked, someone must answer a more important question:",
      "What should people experience here?",
      "Not only what should they see. Not only what should they eat. Not only what should they post.",
      "What should they feel?",
      "What should they understand?",
      "What should become possible because this gathering happened?",
      "Those questions change how an event is built.",
      "A meaningful event does not begin with a list of features. It begins with the people who will enter the room. It considers what they are carrying, what they need, what they expect, and what will make the experience worthy of their time.",
      "That does not mean every event must be serious or emotionally heavy. Celebration is meaningful. Laughter is meaningful. Music, beauty, joy, connection, and escape can all be meaningful.",
      "The difference is intention.",
      "A birthday celebration can do more than display luxury. It can make the guest of honor feel deeply known.",
      "A conference can do more than fill a schedule with speakers. It can give attendees language, relationships, and tools they can carry into their work.",
      "A brand activation can do more than place a logo in front of people. It can let them experience what the brand believes.",
      "A community gathering can do more than assemble a crowd. It can create a sense of belonging.",
      "A theatrical production can do more than entertain. It can open conversations people have avoided for years.",
      "Meaning also changes how success is measured.",
      "Attendance matters, but it is not the entire story. Revenue matters, but it does not fully explain the value created. Social engagement can be useful, but impressions do not tell us whether anyone felt welcomed, inspired, challenged, cared for, or connected.",
      "Event leaders should also consider:",
      {
        list: [
          "Did the experience reflect its purpose?",
          "Did guests understand why they were there?",
          "Did the room feel prepared for them?",
          "Did the content respect their attention?",
          "Did the team know what experience it was responsible for creating?",
          "Did the event give people something worth remembering?",
          "Did the relationship continue after the final moment?",
        ],
      },
      "Meaningful events require operational excellence.",
      "Purpose without structure can still create a disappointing experience.",
      "Guests may never know what happened behind the scenes, but they feel the effects of poor planning. They experience unclear arrival instructions, long waits, unprepared staff, weak communication, missing details, uncomfortable transitions, and moments that do not connect.",
      { quote: "Meaning is not separate from operations. Operations protect meaning." },
      "The timeline protects meaning. Training protects meaning. Guest communication protects meaning. Staffing protects meaning. Hospitality protects meaning. Thoughtful transitions protect meaning. A clear run of show protects meaning.",
      "Every operational decision either supports or interrupts the intended experience.",
      "The future of events will also require greater respect for the audience.",
      "People are more selective about where they go, what they spend, and how they use their time. They are surrounded by content and constantly invited to attend something. A crowded calendar does not create loyalty.",
      "Relevance does.",
      "People want experiences that understand them. They want spaces where they can connect, learn, celebrate, breathe, participate, or belong. They are less impressed by excess when it does not serve a purpose.",
      "This creates an opportunity for smaller and more intentional events.",
      "An intimate dinner may create a stronger relationship than a ballroom reception. A focused roundtable may generate more useful conversation than a crowded panel. A black-box production may create deeper emotional impact than a larger venue. A well-designed workshop may change more behavior than a conference filled with passive presentations.",
      "Scale should serve the purpose. The purpose should not be created to justify the scale.",
      "Meaningful does not mean inexpensive, minimal, or small. Large events can be deeply meaningful. Premium events can be deeply meaningful. Highly produced experiences can be deeply meaningful.",
      "The issue is not size.",
      "The issue is whether every element belongs.",
      "Does the technology improve the experience? Does the entertainment support the story? Does the décor communicate the right feeling? Does the food fit the audience? Does the venue help guests move comfortably? Does the content deserve the time it has been given?",
      "When every element has a reason, the experience feels cohesive.",
      "That is what guests remember.",
      "They may not remember every centerpiece or presentation slide. They remember how the room made them feel. They remember whether someone welcomed them. They remember the conversation that shifted their thinking. They remember the moment they felt seen. They remember whether the experience felt careless or considered.",
      "The strongest events do not simply occupy time.",
      "They create meaning inside it.",
      "As the industry moves forward, the organizations and professionals who understand this will build stronger experiences. They will ask better questions before adding more. They will design for human connection rather than appearances alone. They will invest in the systems and people required to carry the vision.",
      "The future of events is not about proving how much can fit into one room.",
      "It is about creating a room worthy of the people invited into it.",
    ],
  },

  /* ------------------------------------------------------------------ 04 */
  {
    slug: "hospitality-basics-are-disappearing",
    category: "Hospitality",
    title: "Hospitality Basics Are Disappearing—and Guests Can Feel It.",
    dek: "Hospitality has always been built through details. These things may appear small, but together they determine how an experience feels.",
    excerpt:
      "People cannot consistently deliver a standard that has not been clearly taught, modeled, observed, and reinforced.",
    date: "2026-05-21",
    image: "/brand/insights/hospitality-basics.jpg",
    imageAlt:
      "A hospitality executive in a burgundy suit reviewing service documents at a candlelit dining room table before service.",
    body: [
      "Hospitality has always been built through details.",
      "A greeting. Eye contact. A clean environment. A professional appearance. Clear communication. A sense of urgency. A sincere thank-you. Someone noticing what a guest may need before the guest has to ask.",
      "These things may appear small, but together they determine how an experience feels.",
      "Today, many organizations are investing in new technology, marketing campaigns, loyalty programs, redesigned spaces, elevated menus, and impressive brand identities. Yet some of the most basic hospitality standards are becoming increasingly inconsistent.",
      "Guests notice.",
      "They notice when employees continue personal conversations while someone waits for assistance. They notice when phones receive more attention than people. They notice poor grooming, careless uniforms, negative attitudes, loud personal music, unprofessional language, and team members behaving as though the customer is an interruption.",
      "They notice when no one says hello.",
      "The decline of hospitality basics is not merely an employee issue. It is often a leadership and systems issue.",
      "People cannot consistently deliver a standard that has not been clearly taught, modeled, observed, and reinforced.",
      "Many organizations assume that hospitality is common sense.",
      "It is not.",
      "Employees arrive with different experiences, expectations, communication styles, cultural references, and levels of professional preparation. One person may have learned to greet every person entering a room. Another may have never worked in an environment where that expectation existed.",
      "One employee may naturally notice body language and anticipate needs. Another may focus only on completing assigned tasks.",
      "Without a shared standard, every employee creates their own version of service.",
      "That creates inconsistency.",
      "The guest who receives warmth on Monday may receive indifference on Tuesday. One location may feel professional while another feels careless. One manager may correct poor behavior while another ignores it.",
      "The brand promise changes according to who is working.",
      "Hospitality basics must be defined.",
      "What does a proper greeting sound like?",
      "How quickly should a guest be acknowledged?",
      "What does professional appearance require?",
      "What language is appropriate?",
      "How should team members communicate in front of guests?",
      "How should complaints be handled?",
      "What should happen when employees do not know the answer?",
      "What does closing an interaction well look like?",
      "Organizations often use phrases such as “provide excellent service” without explaining the behaviors behind them.",
      "Excellence must be translated.",
      "It must become visible, teachable, and observable.",
      "A service standard should not only describe what employees must avoid. It should show them what successful hospitality looks like.",
      "For example, “Do not ignore guests” is corrective.",
      "“Acknowledge every guest promptly, even when you are assisting someone else” is actionable.",
      "“Do not be rude” is vague.",
      "“Use a calm, respectful tone, listen without interrupting, and explain the next step clearly” provides direction.",
      "Hospitality training should also explain why the behavior matters.",
      "A greeting is not just a script. It tells people they have been noticed.",
      "A clean environment is not only a task. It communicates care and readiness.",
      "Professional appearance is not about removing individuality. It helps guests recognize who is prepared to assist them.",
      "Clear communication reduces uncertainty.",
      "A sincere farewell gives the experience a proper ending.",
      "When employees understand the human reason behind the expectation, the standard becomes more than a rule.",
      "Leadership behavior is equally important.",
      "Managers cannot demand hospitality from employees while communicating disrespectfully with the team. They cannot expect professionalism while showing up unprepared. They cannot correct phone use while remaining distracted during conversations. They cannot speak about culture while tolerating behavior that undermines it.",
      "Employees learn from what leadership repeatedly allows.",
      "When a standard is ignored, the team receives a message: this does not truly matter.",
      "Standards must therefore be reinforced consistently and fairly. That does not mean managers should create an environment of constant punishment. It means expectations should be discussed before problems occur, recognized when demonstrated, coached when missed, and documented when necessary.",
      "Hospitality grows through repetition.",
      "Pre-shift meetings can reinforce one standard at a time. Managers can recognize an employee who handled a difficult interaction well. Teams can discuss a guest journey and identify where the experience becomes confusing. New hires can practice greetings, service recovery, and professional communication before being placed in front of guests.",
      "Small reinforcement creates stronger habits.",
      "Organizations must also examine whether their systems support hospitality.",
      "An employee cannot provide an attentive welcome if the front desk is understaffed. A server cannot create calm when the kitchen is consistently overwhelmed. A guest-service representative cannot resolve concerns when policies are unclear or leaders are unavailable. A manager cannot reinforce standards when every shift is spent reacting to operational emergencies.",
      "Hospitality is a people experience supported by operational structure.",
      "The technology matters. The schedule matters. The staffing level matters. The layout matters. The information employees can access matters.",
      "Poor systems often appear to the guest as poor service.",
      "The goal should not be perfection. Hospitality involves people, and people will make mistakes. The goal is to create a culture where employees understand how to notice, respond, recover, and improve.",
      {
        quote:
          "Guests can forgive a mistake when they feel respected. What is harder to forgive is indifference.",
      },
      "The future of hospitality will not be protected through branding alone. It will be protected by returning to the fundamentals while adapting them to modern expectations.",
      "Technology can make service faster, but it should not remove warmth.",
      "Automation can make communication easier, but it should not make people feel invisible.",
      "Efficiency matters, but efficiency without care does not feel like hospitality.",
      "Hospitality begins with a simple responsibility:",
      "Notice the person in front of you.",
      "Welcome them.",
      "Listen.",
      "Respond with care.",
      "Protect the environment.",
      "Close the experience well.",
      "These basics are not outdated.",
      "They are the foundation.",
      "And when they disappear, guests may not always explain exactly what was wrong—but they can feel it.",
    ],
  },

  /* ------------------------------------------------------------------ 05 */
  {
    slug: "people-cannot-carry-an-untaught-standard",
    category: "Training & Workforce Development",
    title: "People Cannot Carry a Standard They Were Never Taught.",
    dek: "There is a significant difference between telling people what is expected and developing them to deliver it.",
    excerpt:
      "A policy email is not training. A handbook signature is not understanding. A presentation is not application.",
    date: "2026-04-23",
    image: "/brand/insights/untaught-standard.jpg",
    imageAlt:
      "A facilitator presenting a development framework on a flip chart to an engaged group of professionals in an elegant, green-paneled room.",
    body: [
      "Organizations often become frustrated when employees fail to meet expectations.",
      "Leaders ask why customer service is inconsistent, why managers avoid accountability, why policies are not followed, why communication breaks down, or why the culture feels different across departments and locations.",
      "Sometimes the answer is performance.",
      "Sometimes the answer is training.",
      "There is a significant difference between telling people what is expected and developing them to deliver it.",
      "A policy email is not training.",
      "A handbook signature is not understanding.",
      "A presentation is not application.",
      "A manager saying, “You should already know this,” is not preparation.",
      { quote: "People cannot carry a standard they were never properly taught." },
      "Many organizations depend heavily on informal learning. A new employee shadows someone for a few hours, receives several passwords, is shown where supplies are stored, and is then expected to perform confidently.",
      "The quality of the employee’s preparation depends on who happened to train them.",
      "One trainer may explain the reason behind each step. Another may teach shortcuts. One manager may model excellent communication. Another may pass down frustration and bad habits.",
      "Over time, the organization develops several versions of the same job.",
      "This creates inconsistency, confusion, and unnecessary conflict.",
      "Employees are held accountable to expectations they may never have clearly received.",
      "Effective training begins by defining the desired behavior.",
      "What should the employee know?",
      "What should the employee be able to do?",
      "What should the behavior look and sound like?",
      "What tools or systems are required?",
      "What decisions may the employee make independently?",
      "When should the issue be escalated?",
      "How will the standard be observed and reinforced?",
      "Without those answers, training becomes a collection of information rather than a pathway to performance.",
      "Strong training also recognizes that different gaps require different solutions.",
      "A knowledge gap means the employee does not know.",
      "A skill gap means the employee understands but needs practice.",
      "A confidence gap means the employee may be capable but uncertain.",
      "A resource gap means the employee lacks the tools, staffing, information, or authority required.",
      "A leadership gap means the manager is not reinforcing the standard.",
      "A system gap means the process itself makes correct performance difficult.",
      "Not every performance issue can be corrected by adding another training session.",
      "Sometimes the organization must repair the environment around the employee.",
      "For example, teaching employees to provide timely service will not solve chronic understaffing. Training managers to coach employees will not work if leaders punish honest feedback. Teaching a new system will fail if access is incomplete or instructions constantly change.",
      "Training must connect to operations.",
      "The organization must make it possible for people to use what they have learned.",
      "Practical learning also requires more than passive listening.",
      "Employees need examples, demonstrations, scenarios, reflection, practice, feedback, and opportunities to apply the standard.",
      "A manager learning how to give feedback should practice the conversation.",
      "A hospitality employee learning service recovery should work through realistic guest concerns.",
      "A new hire learning company values should discuss how those values affect actual decisions.",
      "A team learning a new process should walk through it using the real tools they will use on the job.",
      "The closer training is to the work, the more useful it becomes.",
      "Manager involvement is essential.",
      "Too often, employees attend training and return to leaders who know little about what was taught. The manager does not reinforce the language, ask about the learning, observe the behavior, or provide follow-up.",
      "The training becomes an isolated event.",
      "Learning should continue after the session.",
      "Managers should know:",
      {
        list: [
          "What employees learned",
          "What behavior should change",
          "What tools were provided",
          "What questions to ask",
          "What to observe",
          "What support may be needed",
          "How to recognize improvement",
          "When additional coaching is required",
        ],
      },
      "Managers do not need to repeat the entire course. They need to help the learning become part of the work.",
      "Training should also respect the learner.",
      "Adults bring experience into the room. Some may have strong skills but lack organizational context. Others may feel embarrassed about what they do not know. Some may have experienced poor leadership or confusing training in the past.",
      "People learn better when they feel respected, involved, and able to ask questions.",
      "Respect does not mean removing accountability.",
      "It means creating clarity before correction.",
      "Employees deserve to know what success requires. They deserve the tools and practice needed to reach the standard. They deserve consistent feedback rather than surprise discipline after weeks of silence.",
      "Once the standard has been clearly taught, supported, and reinforced, accountability becomes stronger and fairer.",
      "The same principle applies to managers.",
      "Organizations frequently promote strong employees into leadership and assume performance in one role automatically prepares them for another.",
      "It does not.",
      "Managers need development in communication, delegation, documentation, coaching, conflict, decision-making, scheduling, accountability, and team leadership. They need to understand how their behavior shapes the employee experience.",
      "A promotion changes responsibility. It should also change preparation.",
      "Training is not a one-time event occurring during orientation. Organizations change. Teams change. Systems change. Customers change. Standards evolve. Leaders grow into new responsibilities.",
      "Learning must continue.",
      "This does not always require a long course. Development can happen through short refreshers, manager discussions, job aids, observations, coaching, scenarios, team meetings, and well-designed digital resources.",
      "Consistency matters more than volume.",
      "The goal is not to keep employees inside a classroom.",
      "The goal is to help them perform with greater clarity, confidence, judgment, and ownership outside it.",
      "When employees struggle, leaders should still ask whether the person is willing and able to meet the expectation. Accountability remains necessary.",
      "But before deciding that people do not care, organizations should examine whether they have been properly prepared.",
      "Was the standard defined?",
      "Was it explained?",
      "Was it demonstrated?",
      "Was it practiced?",
      "Was it supported by the system?",
      "Was it reinforced by leadership?",
      "Was useful feedback provided?",
      "If the answer is no, the organization may be judging people for failing to carry something it never placed responsibly in their hands.",
      "People can rise to meaningful standards.",
      "But first, they must be taught what those standards require.",
    ],
  },

  /* ------------------------------------------------------------------ 06 */
  {
    slug: "ai-should-support-leadership",
    category: "Artificial Intelligence & Leadership",
    title: "AI Should Support Leadership, Not Replace Judgment.",
    dek: "Speed should not replace responsibility. Leadership is not only the processing of information.",
    excerpt:
      "AI can assist with parts of the work of leadership. It cannot carry the full responsibility of leadership.",
    date: "2026-03-19",
    image: "/brand/insights/ai-and-leadership.jpg",
    imageAlt:
      "A diverse leadership team discussing performance dashboards on a wall screen in a dark, gold-accented boardroom.",
    body: [
      "Artificial intelligence is rapidly becoming part of how organizations write, analyze, plan, communicate, and make decisions.",
      "Leaders are being encouraged to move quickly. New tools appear constantly. Employees are experimenting with AI whether organizations have created guidance or not. Companies fear falling behind.",
      "But speed should not replace responsibility.",
      "The most useful question is not:",
      "How can we put AI into everything?",
      "The better question is:",
      "Where can AI meaningfully support the work while human judgment remains essential?",
      "Leadership is not only the processing of information.",
      "Leadership requires context, accountability, ethics, communication, courage, emotional intelligence, and responsibility for what happens next.",
      "AI can assist with parts of that work. It cannot carry the full responsibility of leadership.",
      "An AI system may summarize information, but it does not experience the consequences of the decision.",
      "It may identify patterns, but it may not understand the history behind them.",
      "It may draft a difficult message, but it does not own the relationship with the person receiving it.",
      "It may suggest a performance response, but it does not know the employee’s full circumstances unless accurate context has been provided.",
      "It may produce a confident answer that is incomplete, biased, outdated, or wrong.",
      "This is why human review is not an optional final step.",
      "It is part of responsible use.",
      "AI can create meaningful value for leaders when used intentionally.",
      "It can help organize scattered information. It can prepare summaries before meetings. It can assist with first drafts, compare documents, identify repeated themes, structure plans, generate questions, and reduce repetitive administrative work.",
      "It can help leaders move from a blank page toward a useful starting point.",
      "That matters.",
      "Leaders spend significant time searching, formatting, transferring, rewriting, and preparing. Reducing that friction can create more capacity for conversations, decisions, coaching, strategy, and service.",
      "The goal is not to remove the leader.",
      "The goal is to give the leader more room to lead.",
      "Organizations should begin with specific use cases rather than broad excitement.",
      "Where is time being lost?",
      "Which tasks are repetitive?",
      "Where is important information difficult to access?",
      "Which decisions require better preparation?",
      "What communication could be drafted more efficiently?",
      "Where are employees using AI already?",
      "What information should never be entered?",
      "Which outputs require a formal review?",
      "These questions lead to practical implementation.",
      "For example, AI may help a manager organize notes before an employee conversation. The manager must still verify the information, consider the relationship, use appropriate judgment, and lead the conversation personally.",
      "AI may help summarize guest feedback. Leadership must still determine whether the themes are accurate, what operational factors contributed, and which actions are realistic.",
      "AI may help create a draft standard operating procedure. The people who understand the work must review whether the process is safe, accurate, practical, and aligned with policy.",
      "AI may suggest training topics based on recurring questions. Leaders and trainers must still determine what people actually need and how learning should be delivered.",
      { quote: "The technology supports the process. It does not inherit accountability for it." },
      "Organizational context makes AI more useful, but it also introduces responsibility.",
      "A generic tool may not understand the organization’s mission, standards, structure, terminology, audience, culture, or operating environment. Without context, outputs may sound polished while remaining disconnected from the business.",
      "However, providing context requires leaders to consider data privacy and appropriate information use.",
      "What information is being entered?",
      "Does it include confidential employee, customer, financial, medical, legal, or proprietary information?",
      "Where is the information stored?",
      "Will the provider use it for training?",
      "Who can access the output?",
      "How long is it retained?",
      "What happens if the response is inaccurate?",
      "Organizations should not wait for a serious mistake before creating guidance.",
      "Responsible AI use should include clear expectations about:",
      {
        list: [
          "Approved tools",
          "Appropriate use cases",
          "Restricted information",
          "Human review",
          "Decision accountability",
          "Documentation",
          "Bias and accuracy",
          "Intellectual property",
          "Customer and employee communication",
          "Escalation when uncertainty exists",
        ],
      },
      "Employees need more than a warning not to misuse AI. They need practical education about how to use it well.",
      "Prompting is part of that education, but prompting alone is not an AI strategy.",
      "People must learn how to provide useful context, identify weak outputs, check facts, protect sensitive information, and recognize when the task should remain fully human.",
      "Leaders must model this behavior.",
      "If executives treat AI output as automatically correct, employees will learn to do the same. If leaders quietly use unapproved tools while restricting everyone else, trust will decline. If AI-generated communication is sent without review, quality and credibility will suffer.",
      "Responsible adoption begins at the top.",
      "Organizations should also resist using AI to avoid leadership responsibilities.",
      "A difficult conversation should not become an automated message simply because the leader is uncomfortable.",
      "Employee performance should not be judged solely by an algorithm.",
      "Culture cannot be understood only through sentiment scores.",
      "A customer complaint should not always receive a generic generated response.",
      "AI can support preparation and consistency. It should not become a wall between people.",
      "Human-centered AI asks whether the technology improves the experience of the people doing and receiving the work.",
      "Does it reduce unnecessary burden?",
      "Does it make information clearer?",
      "Does it help employees serve people better?",
      "Does it improve access without removing care?",
      "Does it create capacity for more meaningful leadership?",
      "Or does it simply create more tools, notifications, dashboards, and uncertainty?",
      "The presence of AI does not automatically make an organization innovative.",
      "Thoughtful use does.",
      "The organizations that benefit most will not be the ones that place AI everywhere first. They will be the ones that understand their work well enough to know where the technology belongs, where it does not, and what human responsibility must remain.",
      "AI can support leadership.",
      "It can strengthen preparation, clarity, access, and execution.",
      "But judgment, accountability, empathy, courage, and responsibility still belong to people.",
      "That is not a limitation of progress.",
      "It is the standard that should guide it.",
    ],
  },

  /* ------------------------------------------------------------------ 07 */
  {
    slug: "culture-after-the-meeting",
    category: "Culture & Leadership",
    title: "Culture Is What Employees Experience After the Meeting Ends.",
    dek: "Culture is not determined by what happens while the slides are visible. Culture is what employees experience after the meeting ends.",
    excerpt:
      "Values matter, but employees learn what the organization truly values through decisions.",
    date: "2026-02-19",
    image: "/brand/insights/culture-after-the-meeting.jpg",
    imageAlt:
      "An operations leader reviewing plans at a table in a warm hotel space while a team member prepares the room behind her.",
    body: [
      "Organizations often describe culture during meetings.",
      "Leaders present values, announce initiatives, introduce new language, and remind employees what the company believes.",
      "The presentation may be inspiring.",
      "But culture is not determined by what happens while the slides are visible.",
      "Culture is what employees experience after the meeting ends.",
      "It is what happens when someone asks for help.",
      "It is how leaders respond to mistakes.",
      "It is what behavior is rewarded.",
      "It is what behavior is tolerated.",
      "It is whether standards apply equally.",
      "It is how information travels.",
      "It is whether people feel prepared or constantly surprised.",
      "It is what employees say when leadership leaves the room.",
      "Culture is the repeated experience of working inside the organization.",
      "This is why culture cannot be built through words alone.",
      "Values matter, but employees learn what the organization truly values through decisions.",
      "A company may say it values people while consistently understaffing departments and ignoring burnout.",
      "It may say it values communication while leaders withhold important information.",
      "It may say it values accountability while high performers are allowed to treat others poorly.",
      "It may say it values excellence while accepting avoidable inconsistency.",
      "It may say it values innovation while punishing employees who question outdated processes.",
      { quote: "The space between stated values and lived experience is where trust is lost." },
      "Employees notice contradictions quickly.",
      "They may not challenge them publicly, but they adjust their behavior. They stop offering ideas. They become cautious. They focus on protecting themselves. They follow the visible reward system rather than the written value system.",
      "Culture teaches people what is safe, what matters, and what is required.",
      "Leaders shape that teaching every day.",
      "Leadership communication is part of culture.",
      "Are expectations clear?",
      "Do people receive information in time to act?",
      "Do managers explain the reason behind decisions?",
      "Can employees ask questions without being treated as difficult?",
      "Are changes communicated consistently, or do employees learn about them through rumors?",
      "Silence communicates.",
      "Avoidance communicates.",
      "Conflicting instructions communicate.",
      "When leaders do not create clarity, employees create their own explanations. Those explanations are often shaped by fear, past experiences, and incomplete information.",
      "Manager behavior may have the greatest day-to-day influence on culture.",
      "Senior leaders can communicate a strong vision, but employees experience the organization primarily through direct supervisors.",
      "A manager determines whether feedback feels useful or humiliating. A manager influences whether the shift feels prepared or chaotic. A manager decides whether good work is noticed. A manager models how conflict is handled.",
      "Managers translate culture into daily experience.",
      "That means organizations cannot treat manager development as optional.",
      "Promoting someone without teaching communication, accountability, coaching, documentation, delegation, and conflict creates risk for the entire team.",
      "Employees do not experience the manager’s good intentions. They experience the manager’s behavior.",
      "Culture is also revealed through accountability.",
      "When expectations are enforced inconsistently, employees learn that relationships, status, or convenience matter more than standards.",
      "When one person is corrected for behavior another person is allowed to repeat, trust weakens.",
      "When leaders ignore poor conduct because an employee produces strong numbers, the organization communicates that performance excuses harm.",
      "Accountability should be clear, timely, respectful, and connected to known expectations.",
      "It should not appear suddenly after months of silence.",
      "Employees deserve the opportunity to understand what must change. Leaders deserve systems that help them document, coach, and follow through consistently.",
      "Recognition matters too.",
      "What receives attention tends to grow.",
      "If organizations only communicate when something is wrong, employees may begin to believe that good performance is invisible. Recognition does not always require awards, bonuses, or public celebration.",
      "Sometimes it is a specific acknowledgment:",
      "“You handled that guest concern with patience and clarity.”",
      "“You prepared the team before the shift, and it made a difference.”",
      "“You raised a problem early instead of allowing it to grow.”",
      "Specific recognition teaches the standard.",
      "Culture is also shaped by the systems surrounding people.",
      "A company may value collaboration, but its departments may have goals that compete. It may value service, but employees may lack the authority to resolve common concerns. It may value development, but schedules may never allow time for training.",
      "Systems either support or contradict cultural expectations.",
      "Leaders should examine:",
      {
        list: [
          "Staffing",
          "Scheduling",
          "Communication channels",
          "Workload",
          "Decision rights",
          "Policies",
          "Recognition",
          "Manager preparation",
          "Training",
          "Feedback systems",
          "Promotion practices",
          "Consequences",
        ],
      },
      "These are not separate from culture.",
      "They are how culture is experienced.",
      "Culture work should therefore move beyond events and slogans.",
      "An employee-appreciation activity cannot repair ongoing disrespect. A values poster cannot replace clear leadership. A team-building exercise cannot correct a manager who refuses accountability. A survey cannot build trust if employees never see action afterward.",
      "Culture is strengthened when the organization becomes more consistent.",
      "What leaders say and do begin to match.",
      "Policies and behaviors begin to match.",
      "Customer promises and employee experiences begin to match.",
      "Different departments begin to operate from a shared standard.",
      "That alignment does not happen in one meeting.",
      "It happens through repetition.",
      "Leaders must explain the culture, model it, build systems around it, recognize it, correct what violates it, and continue reviewing whether the lived experience matches the intended one.",
      "Employees also contribute to culture. Every team member influences the environment through communication, ownership, professionalism, and service.",
      "But leadership carries a greater responsibility because leaders control more of the conditions.",
      "Culture should not become another way to blame employees for surviving poorly designed systems.",
      "The goal is not to create a perfect workplace.",
      "The goal is to create an honest one.",
      "A place where expectations are clear. Where leaders are accountable. Where employees are respected. Where difficult issues are addressed. Where values have behavioral meaning. Where the organization is willing to correct the gap between what it says and what people experience.",
      "The meeting can introduce the culture.",
      "The real test begins when everyone returns to work.",
    ],
  },

  /* ------------------------------------------------------------------ 08 */
  {
    slug: "strong-story-needs-strong-structure",
    category: "Media & Storytelling",
    title: "A Strong Story Still Needs Strong Structure.",
    dek: "A strong idea does not automatically become a strong property. A story still needs structure.",
    excerpt:
      "Structure gives the story a path from imagination to audience — and room to continue after the first moment of inspiration.",
    date: "2026-01-22",
    image: "/brand/insights/story-and-structure.jpg",
    imageAlt:
      "A producer reviewing a script at a production desk while a performance is lit on the theater stage behind her.",
    body: [
      "A powerful story can begin anywhere.",
      "A memory. A character. A family secret. A question. A stage scene. A journal entry. A lived experience that refuses to be forgotten.",
      "The emotional truth may arrive before the plan.",
      "That is often how meaningful creative work begins.",
      "But a strong idea does not automatically become a strong property.",
      "A story still needs structure.",
      "Writers, producers, founders, and creative leaders sometimes resist structure because they fear it will restrict the work. They want to protect the emotion, spontaneity, and freedom that made the idea meaningful.",
      { quote: "Good structure does not weaken creativity. It protects it." },
      "Structure gives the story a path from imagination to audience.",
      "It helps answer important questions:",
      "What is this work?",
      "Who is it for?",
      "Why does it need to exist?",
      "What format serves it best?",
      "What must be completed first?",
      "Who is responsible for each decision?",
      "What resources are required?",
      "How will people encounter it?",
      "What happens after the first release?",
      "Without structure, creative work may remain trapped in constant development.",
      "The writer keeps revising without deciding when the manuscript is ready.",
      "The producer announces the production before the budget, venue, team, and timeline are clear.",
      "The founder creates logos, content, products, and platforms without establishing the relationship between them.",
      "The creator receives interest but has no materials prepared for a partnership conversation.",
      "The story is strong, but the path around it is uncertain.",
      "Creative development should begin with clarity.",
      "The central message must be understood.",
      "What is the story truly about beneath the plot?",
      "What question is the audience being invited to consider?",
      "What emotional experience should remain after the final page, scene, or moment?",
      "What should not be compromised as the work grows?",
      "This central truth becomes the foundation for decisions.",
      "It helps determine whether a new idea belongs or merely distracts.",
      "Structure is also necessary inside the story.",
      "Characters need clear motivations. Scenes need purpose. Themes need room to develop without becoming speeches. The audience needs enough information to understand the world without being told everything at once.",
      "Emotion becomes stronger when it has somewhere to move.",
      "A story filled with powerful moments can still feel incomplete when those moments are not connected.",
      "The same principle applies to the larger property.",
      "A book may become a play. A play may become a filmed production. A character may inspire a digital series. A story may create a journal, discussion guide, conference, application, or community experience.",
      "These possibilities can be exciting.",
      "They can also become overwhelming.",
      "Every possible extension should not be developed at the same time.",
      "Property development requires sequence.",
      "What is the primary work?",
      "What is ready now?",
      "What must wait?",
      "Which extension deepens the story?",
      "Which extension serves the audience?",
      "Which idea creates unnecessary complexity?",
      "Creators need permission to hold a large vision while working through a focused next step.",
      "Structure also requires business decisions.",
      "Creative work has timelines, costs, rights, responsibilities, agreements, and risks. Ignoring those realities does not protect the art. It makes the art more vulnerable.",
      "Who owns the work?",
      "Who has permission to use it?",
      "How will collaborators be credited and compensated?",
      "What expenses must be covered?",
      "What happens if the project is delayed?",
      "What materials may be shared publicly?",
      "Which decisions require professional legal, financial, publishing, or production guidance?",
      "Creators do not need to become experts in every area, but they should understand when specialized support is necessary.",
      "Documentation matters.",
      "A verbal agreement may feel comfortable at the beginning of a relationship. Confusion often appears later when memories differ, expectations grow, or money becomes involved.",
      "Written clarity protects relationships.",
      "Production structure matters too.",
      "A stage play needs more than a script. It needs casting, rehearsals, schedules, technical preparation, venue coordination, marketing, guest communication, ticketing, front-of-house planning, and a clear audience experience.",
      "A book needs more than a manuscript. It may require editing, formatting, cover design, publishing decisions, distribution, metadata, launch planning, reader communication, and long-term positioning.",
      "A digital platform needs more than a concept. It needs user experience, content structure, technology decisions, privacy considerations, testing, support, and adoption planning.",
      "The audience may only see the final creative expression.",
      "They still feel the quality of the structure behind it.",
      "Weak operations can distract from a strong story. Confusing ticket information can reduce attendance. Poor sound can weaken a powerful performance. A difficult purchasing process can interrupt reader interest. Inconsistent branding can make the property feel disconnected.",
      "Structure helps the audience reach the story without unnecessary friction.",
      "Audience development should also begin before the work is released.",
      "Who needs this story?",
      "Where do those people already gather?",
      "What conversations are they already having?",
      "Which organizations may find the work meaningful?",
      "What content can introduce the themes without giving away the entire property?",
      "How will people remain connected after reading, attending, or watching?",
      "An audience is not simply a number.",
      "It is a relationship.",
      "Strong storytelling respects that relationship. It does not treat people only as buyers, followers, viewers, or ticket holders. It considers what the audience brings into the experience and what responsibility the creator carries when presenting sensitive, cultural, family, or community stories.",
      "This is especially important when the work involves trauma, identity, grief, family secrets, or real lived experience.",
      "Emotional impact should not become exploitation.",
      "Stories deserve dignity.",
      "The people represented deserve care.",
      "The audience deserves honesty about what the experience is and what it is not.",
      "Structure helps protect those boundaries.",
      "It allows the creative team to make intentional decisions about language, imagery, facilitation, content warnings, community discussions, and companion resources.",
      "The strongest creative properties combine vision with stewardship.",
      "Vision asks what the story can become.",
      "Stewardship asks how it should be carried.",
      "Both matter.",
      "A creator may begin with a single idea and eventually build a literary, theatrical, digital, educational, or community ecosystem around it. That growth is possible when the foundation is clear enough to support expansion.",
      "The goal is not to make creative work corporate or overly complicated.",
      "The goal is to give the story what it needs to survive beyond the first moment of inspiration.",
      "A strong story deserves strong writing.",
      "It deserves emotional truth.",
      "It deserves a clear audience.",
      "It deserves thoughtful production.",
      "It deserves responsible ownership.",
      "It deserves systems allowing people to encounter it well.",
      "The story is what people feel.",
      "Structure is what helps the story reach them—and gives it room to continue.",
    ],
  },
];

/** The article given the large featured treatment on /insights. */
export const featuredArticle = articles[0];

/** The remaining articles, in publication order. */
export const supportingArticles = articles.slice(1);

/**
 * Published Compass pieces, newest first. The Tablemakers page reads this to
 * decide whether the Compass has anything to link to — when it is empty, that
 * page shows themes only and never implies a publication exists.
 *
 * This is now every article: the whole publication carries the Compass name,
 * so a per-post "The Tablemakers Compass" category no longer distinguishes
 * anything. It used to filter on that category, which would leave this empty
 * once the category was retired — and the Tablemakers page would then claim
 * nothing had been published.
 */
export const compassArticles = articles;

/** Look up a single article by slug. */
export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Previous / next articles for in-article navigation (no wrap-around). */
export function getAdjacentArticles(slug: string) {
  const i = articles.findIndex((a) => a.slug === slug);
  return {
    previous: i > 0 ? articles[i - 1] : undefined,
    next: i >= 0 && i < articles.length - 1 ? articles[i + 1] : undefined,
  };
}

/** Total words across every body block. */
export function wordCount(article: Article): number {
  const text = article.body
    .map((block) => {
      if (typeof block === "string") return block;
      if ("list" in block) return block.list.join(" ");
      if ("heading" in block) return block.heading;
      return block.quote;
    })
    .join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Estimated reading time in whole minutes, derived from the real word count
 * at 225 words per minute (a comfortable pace for long-form editorial copy).
 */
export function readingMinutes(article: Article): number {
  return Math.max(1, Math.round(wordCount(article) / 225));
}

/** "June 18, 2026" — rendered deterministically so server and client match. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}
