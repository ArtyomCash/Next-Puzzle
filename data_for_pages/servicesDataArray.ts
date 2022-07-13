import businessAnalysis from 'assets/Services/business_2.jpg';
import projectManagement from 'assets/Services/project-management_2.jpg';
import uxUa from 'assets/Services/ux_ua_2.jpg';
import productDesign from 'assets/Services/product-design-in-operations-management_2.jpg';
import hardwereDevelopment from 'assets/Services/hardwere_development_2.jpg';
import webDevelopment from 'assets/Services/embedded_development_2.jpg';
import mobileDevelopment from 'assets/Services/mobile_development_2.jpg';
import qualityAssurance from 'assets/Services/quality_assurance_2.jpg';
import desktopDevelopment from 'assets/Services/desktop_development_2.jpg';

import { contentService } from './typeServices';

export const serviceData: contentService[] = [
  {
    title: 'Business Analysis',
    id: 'business-analysis',
    img: businessAnalysis.src,
    paragraphBlock: [
      { paragraph: 'In order to provide you with the  best solution for your business, our hight-professional experts can analyze all the collected data, including the business oportunities, market research, and prepare necessary documentation for the project. Because every business is unique we investigate all speciﬁcs client’s ideas in details and provide the best approaches to reach the goal within budget and timeline. The process is called Business Analysis or sometimes Requirements Analysis.' },
      { paragraph: 'Our business analysis services helping clients and product owners to discover business requirements and give them both functional and non-functional specifications to be implemented later by the development team. \n' +
          'We use the best Business Analysis practices for software development to bridge a gap between the business needs and the IT team.' },
      { paragraph: 'It can give us' },
    ],
    itemDescr: [
      { liDescrFirst: 'Solution vision Requirements description', liNumberSpan: '' },
      { liDescrFirst: 'Exact project estimation', liNumberSpan: '' },
      { liDescrFirst: 'Release planning', liNumberSpan: '' },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Project Management',
    id: 'project-management',
    img: projectManagement.src,
    paragraphBlock: [
      { paragraph: 'Wide range of  IT projects can often be difficult to manage due to the sheer amount of resources involved. Between software and hardware tools, data management and programming, numerous factors affect the success of an IT project. With our IT project management services, you will save time.'},
      { paragraph: 'Our project managers will undertake the hardest work of coordinating the working process to implement your idea. A project manager can get onboard at any stage of the project, but the biggest success comes when this manager works with the team from the onset of project analysis and estimation.'},
      { paragraph: 'A Project Manager understands every technical detail well enough to estimate its value for the overall success of the project. Flexyti project management services offer:'},
  ],
    itemDescr: [
      {
        liDescrFirst: 'Lead the project from analysis & scheduling to support of the released product',
        liNumberSpan: '',
      },
      { liDescrFirst: 'Determine the requirements, resources & schedule for project implementation', liNumberSpan: '' },
      { liDescrFirst: 'Create and maintain technical and project documentation', liNumberSpan: '' },
      { liDescrFirst: 'Perform team assessment and evaluation', liNumberSpan: '' },
      { liDescrFirst: 'Assign individual responsibilities within the team', liNumberSpan: '' },
      { liDescrFirst: 'Manage the day-to-day operational aspects of a project and scope control', liNumberSpan: '' },
      { liDescrFirst: 'Effectively predict, prevent and/or solve project issues', liNumberSpan: '' },
      { liDescrFirst: 'Realistic schedule creation', liNumberSpan: '' },
      { liDescrFirst: 'Software development lifecycle planning', liNumberSpan: '' },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'UI/UX development',
    id: 'development',
    img: uxUa.src,
    paragraphBlock: [
      { paragraph: 'UX-UI Designers are generally responsible for collecting, researching, investigating and evaluating user requirements. Their responsibility is to deliver an outstanding user experience providing an exceptional and intuitive application design.'},
      { paragraph: 'Our UI/UX Designer responsibilities include:' },
    ],
    itemDescr: [
      {
        liDescrFirst: 'Gathering & evaluating user requirements, in collaboration with product managers & engineers',
        liNumberSpan: '',
      },
      { liDescrFirst: 'Illustrating design ideas using storyboards, process flows and sitemaps', liNumberSpan: '' },
      { liDescrFirst: 'Designing graphic user interface elements, like menus, tabs and widgets', liNumberSpan: '' },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Product Desing & Management',
    id: 'product-desing',
    img: productDesign.src,
    paragraphBlock: [
      { paragraph: 'Product management is the practice of strategically driving the development, market launch, and continual support and improvement of a company’s products.'},
      { paragraph: 'A Product Manager is in charge of a product throughout its product lifecycle. \n' +
          'That includes working out what customers want, helping the business to build the right product and then supporting the business to sell it. ' },
      { paragraph: 'They also provide the product vision and leadership for the many other roles involved in developing, supporting, marketing and selling the product. That includes ensuring the product supports the company’s strategy and goals. '},
      { paragraph: 'Product management is the practice of strategically driving the development, market launch, and continual support and improvement of a company’s products.' },
      { paragraph: 'Our professionals are focused on the following:' },
    ],
    itemDescr: [
      {
        liDescrFirst: 'Conducting Research.',
        liNumberSpan: 'Researching to gain expertise about the company’s market, user personas, and competitors.',
      },
      {
        liDescrFirst: 'Developing Strategy',
        liNumberSpan:
          'Shaping the industry knowledge they’ve learned into a high-level strategic plan for their product—including goals and objectives, a broad-strokes overview of the product itself, and maybe a rough timeline.',
      },
      {
        liDescrFirst: 'Communicating Plans',
        liNumberSpan:
          'Developing a working strategic plan using a product roadmap and presenting it to key stakeholders across their organization executives, investors, development teams, etc. Ongoing communication across their cross-functional teams throughout the development process and beyond.',
      },
      {
        liDescrFirst: 'Coordinating Development',
        liNumberSpan:
          'Assuming they have received a green light to move forward with their product’s strategic plan, coordinating with the relevant teams—product marketing, development, etc.—to begin executing the plan.',
      },
      {
        liDescrFirst: 'Acting on Feedback and Data Analysis',
        liNumberSpan:
          'Finally, after building, testing, and introducing the product to the marketplace, learning via data analysis and soliciting direct feedback from users, what works, what doesn’t, and what to add. Working with the relevant teams to incorporate this feedback into future iterations of the product.',
      },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Hardware Development',
    id: 'hardware-development',
    img: hardwereDevelopment.src,
    paragraphBlock: [
      { paragraph:  'Hardware development is taken to mean the development of designs for devices that are intended to be manufactured.' },
      { paragraph:  'Hardware development incorporates four parallel, synchronized projects:' },
    ],
    itemDescr: [
      { liDescrFirst: 'The detailed design of the manufacturable product', liNumberSpan: '' },
      { liDescrFirst: 'The manufacturing process and tooling', liNumberSpan: '' },
      { liDescrFirst: 'The test and inspection process and equipment', liNumberSpan: '' },
      { liDescrFirst: 'The supply chain for purchased parts', liNumberSpan: '' },
    ],
    secondDescr:
      'More and more companies focus on implementing in-house tailored digital ' +
      'technologies with the help of custom hardware development services.\n' +
      '\n' +
      'Instead of endlessly adapting readymade products offered by available tech vendors, you can get a turnkey solution that will closely meet individual business requirements and scale almost indefinitely, eliminating the necessity of constant costly upgrades.\n' +
      '\n' +
      'Flexyti can offer professional hardware development engineer services for modern electronics, as well as design and tracing of printed circuit boards. Our hardware development department works with different processor architectures, interfaces, and memory types, implementing the latest technologies. \n' +
      '\n' +
      'Hardware development is usually carried out through the following stages:',
    secondItemDescr: [
      { liNumSecond: 'Schematic development of hardware elements', liNumberSpan: '' },
      {
        liNumSecond: 'Hardware elements’ implementation (in the form of a printed circuit board or their combination)',
        liNumberSpan: '',
      },
      { liNumSecond: 'Hardware elements testing in the laboratory environment', liNumberSpan: '' },
      { liNumSecond: 'System integration', liNumberSpan: '' },
      { liNumSecond: 'Hardware testing in the field conditions', liNumberSpan: '' },
    ],
  },
  {
    title: 'Web Development',
    id: 'web-development',
    img: webDevelopment.src,
    paragraphBlock: [
      { paragraph: 'Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.' },
      { paragraph: 'In a broader sense, web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal.' },
      { paragraph: '\'It might also, but not necessarily, include all those strategic actions needed to ensure its proper ranking on search engine results. Usually, those tasks pertain to a different specialization, namely search engine optimization (SEO)\n' +
          '      \'As we have been delivering web development services for a long time, our process is clear, effective and enables timely delivery of your web solution. From comprehensive requirement gathering to ensuring continuous operation of your web solution after deployment, we have everything covered for you.' },
    ],
    itemDescr: [],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Mobile Development',
    id: 'mobile-development',
    img: mobileDevelopment.src,
    paragraphBlock: [
      { paragraph: 'Mobile app development services are aimed at building iOS & Android applications that effectively complement or substitute web solutions. Flexyti has successfully completed 30+ mobile app development projects for over 10 industries, and our mobile apps as well as complementing web applications drive the workflows for different companies. ' },
      { paragraph: 'Because Flexity has expertise in both native and cross-platform technologies, we always find the right balance among price, quality, and project requirements so we can offer the best solution for your particular situation.\n' +
          'We know how to structure our work, how to communicate with business owners to get out the most essential details and compile consistent mobile solutions for your business.' },
      { paragraph: 'Our mobile developers use state-of-the-art technologies for the most popular platforms: iOS and Android.' },
    ],
    itemDescr: [
      {
        liDescrFirst: 'Business Applications ',
        liNumberSpan:
          'We not only specialize in creating efficient Android business apps, but we also know how to make corresponding iOS business apps. Both come with user-friendly interface to make your business activities smooth and convenient.',
      },
      {
        liDescrFirst: 'Data Analyzers',
        liNumberSpan:
          'Business life can be dynamic life and fast-paced. During business trips, data analysis apps on a mobile device can prove very useful when there is no PC or laptop on hand.',
      },
      {
        liDescrFirst: 'Organizers and Reminders',
        liNumberSpan:
          '\n' +
          'Android apps such as calendars, calculators, alerts, measuring apps help control the constant flow of information.',
      },
      {
        liDescrFirst: 'Maps and Navigators',
        liNumberSpan:
          'Mobile maps not only help you find your way in a foreign city but it helps you find the shortest way to the destination. You can even update them in any Wi-Fi spot nearby.',
      },
      {
        liDescrFirst: 'Product Catalogues',
        liNumberSpan:
          'We can create an attractive, usable product catalogue for your business. Your customers will appreciate finding the  product they need in a flash.',
      },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Quality Assurance',
    id: 'quality-assurance',
    img: qualityAssurance.src,
    paragraphBlock: [
      { paragraph: 'A product with poor customer experience, bugs, and bad usability can neither capture customer attention nor gain any market share. That’s why quality assurance services are not only an option but a necessity for your software application’s success – and that’s where we can help you! As Fleity we are striving hard to combine all the best elements of quality with web, mobile, desctop and embedded software applications by offering professional QA and software testing services. ' },
      { paragraph: 'Due to our expertise in different industries, we have established robust testing mechanisms and practices geared to your specific business goals. It doesn’t matter what domain you work in, we’ll ensure that your customers get the best solution for their needs. ' },
      { paragraph: 'QA and testing services differ in the scope of activities involved. Software QA services cover all stages of SDLC, from requirements gathering to maintenance. Being a part of QA, testing is aimed to check software\'s functional, performance, security, and other aspects. ' },
    ],
    itemDescr: [
      {
        liDescrFirst: 'Manual testing',
        liNumberSpan:
          'During manual testing, our quality assurance team checks the performance of your product on various devices, as well as analyzes its user interface and usability. Manual testing helps to identify vulnerabilities that can’t be detected automatically and provides personal feedback about the look and feel of your product.',
      },
      {
        liDescrFirst: 'Automated testing',
        liNumberSpan:
          '\n' +
          'Automated testing is a long-term investment in the success of your product. It covers all possible scenarios of software functionality and then checks its performance on multiple platforms in parallel. By combining both manual and automated testing, you accelerate your time to market and satisfy your customers with a flawless product.',
      },
    ],
    secondDescr: '',
    secondItemDescr: [{ liNumSecond: '', liNumberSpan: '' }],
  },
  {
    title: 'Development Operations',
    id: 'development-operations',
    img: desktopDevelopment.src,
    paragraphBlock: [
      { paragraph: 'Looking to save time and money with DevOps solutions and services like agility, automation, continuity, and governance? Turn to DataArt to implement DevOps best practices, including integration with cloud, continuous integration and continuous delivery (CI/CD), GitOps, containerization, DevSecOps, AI/ML, and AI Ops, as well as a host of other services like as:' },
    ],
    itemDescr: [
      { liDescrFirst: 'DevOps Consulting', liNumberSpan: '' },
      { liDescrFirst: 'DevOps Transformation', liNumberSpan: '' },
      { liDescrFirst: 'AWS Managed Services', liNumberSpan: '' },
      { liDescrFirst: 'GCP Managed Services', liNumberSpan: '' },
      { liDescrFirst: 'MS Azure Managed Services', liNumberSpan: '' },
      { liDescrFirst: 'Blockchain DevOps Services', liNumberSpan: '' },
      { liDescrFirst: 'CI/CD Services', liNumberSpan: '' },
      { liDescrFirst: 'Container Management', liNumberSpan: '' },
      { liDescrFirst: 'Docker Container Services', liNumberSpan: '' },
      { liDescrFirst: 'SRE Services', liNumberSpan: '' },
      { liDescrFirst: 'Software as a Service', liNumberSpan: '' },
      { liDescrFirst: 'Platform as a Service', liNumberSpan: '' },
      { liDescrFirst: 'Infrastructure as a Service', liNumberSpan: '' },
      { liDescrFirst: 'Functions as a Service', liNumberSpan: '' },
    ],
    secondDescr:
      'Additionally, we offer a range of DevOps Managed Services to simplify your DevOps transformation journey. Our Devops services can assist you in:',
    secondItemDescr: [
      {
        liNumSecond: 'Operational Management',
        liNumberSpan: 'Cloud infrastructure, hardware, network, security and data easing operational burden.',
      },
      {
        liNumSecond: 'Add-on Services',
        liNumberSpan: 'Application maintenance and development that boosts the pace of your DevOps journey.',
      },
      {
        liNumSecond: 'Steady Pace',
        liNumberSpan: 'High technical expertise that brings a steady pace in overall DevOps functioning.',
      },
      {
        liNumSecond: 'Enhanced Flow',
        liNumberSpan: 'Toolchains, containers and processes powered by site reliability and continuous pipeline.',
      },
      {
        liNumSecond: 'Effective Supply-chain',
        liNumberSpan:
          'For mature processes and platforms, addressing constraints and effective supply-chain performance.',
      },
      {
        liNumSecond: 'Regular Monitoring',
        liNumberSpan: 'Reviews of internal teams, platforms and pipeline performance KPIs to ensure no gaps.',
      },
      {
        liNumSecond: 'Enhanced Collaboration',
        liNumberSpan: 'Streamlined team communication through efficient use of relevant tools.',
      },
      {
        liNumSecond: 'Release Management',
        liNumberSpan: 'Minimized failed deployment risks through effective release management.',
      },
      {
        liNumSecond: 'Security Management',
        liNumberSpan: 'Comprehensive protection from potential threats through security measures.',
      },
    ],
  },
];
