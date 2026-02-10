import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dev C Desai",
  initials: "DD",
  location: "Buffalo, New York",
  about: "AI Researcher, Building Generative AI solutions at Scale",
  summary:
    "Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone.",
  avatarUrl: "/dev.png",
  personalWebsiteUrl: "<Website URL>",
  resumeUrl: "/Dev_Desai_Resume.pdf",
  extendedBio: `
  
## My Journey in AI

My fascination with AI began during my early undergraduate years when I first explored the intersection of computer vision and natural language processing. What started as curiosity quickly evolved into a passion for building practical AI solutions that solve real-world problems.

### The Vision-Language Connection

I've always been intrigued by how machines can understand and interpret visual and textual information simultaneously. This interest led me to specialize in Vision-Language Models (VLMs), exploring how these multimodal systems can transform industries from healthcare documentation to creative content generation.

My work at the Indian Institute of Science provided me with a strong research foundation, allowing me to experiment with cutting-edge approaches to multimodal learning and representation. The experience of working in a top-tier research environment shaped my understanding of what makes AI systems robust and useful in practical settings.

### Language Technology for Everyone

One of my proudest achievements has been contributing to the development of language technologies for under-resourced languages. With Ambari-7b, we created one of India's first bilingual LLMs with strong performance in Kannada, demonstrating that language technology shouldn't be limited to just globally dominant languages.

This project taught me the importance of data curation, tokenization strategies specific to morphologically rich languages, and efficient fine-tuning techniques when working with limited computational resources.

### From Research to Production

My philosophy is that AI research should translate into real-world impact. At CognitiveLab, I've had the opportunity to bridge this gap by developing Cognitune, a platform that makes LLM deployment and fine-tuning accessible to organizations without specialized ML infrastructure.

Working with enterprise clients has given me valuable insights into the challenges of deploying AI in production environments - from monitoring and evaluation to addressing specific business requirements and scale concerns.

## Technical Approach

I believe in pragmatic AI development:

1. **Understanding the fundamentals**: Strong theoretical knowledge helps make better architectural decisions
2. **Data-centric mindset**: Great models start with great data
3. **Efficient implementation**: Optimizing for both performance and computational efficiency
4. **Continuous evaluation**: Rigorous testing against diverse metrics and real-world scenarios

## Open Source Contributions

Open source is central to my work philosophy. By contributing to and maintaining several open-source projects, I aim to make AI more accessible and democratize access to cutting-edge technologies. Projects like Marker API and VARAG represent my commitment to sharing knowledge and tools with the broader developer community.

## What I'm Learning Now

I'm currently exploring:

- Multi-agent systems for collaborative problem-solving
- Retrieval-augmented generation techniques for document understanding
- Efficient fine-tuning approaches for resource-constrained environments
- Evaluation frameworks for multilingual models

## Beyond Technology

Outside of my technical work, I enjoy participating in hackathons, mentoring students interested in AI, and discussing the societal implications of advancing AI technologies. I believe in responsible AI development that considers ethical implications and accessibility.

## Let's Connect

I'm always interested in collaboration opportunities, especially in the areas of:
- Vision-Language Models for practical applications
- Low-resource language technology
- Efficient deployment of AI systems
- Open-source AI tools and frameworks

Feel free to reach out if you'd like to discuss ideas, potential collaborations, or just chat about the future of AI!
`,
  contact: {
    email: "adithyaskolavi@gmail.com",
    // tel: "+91 9148574393",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/DevDesai444",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/devdesai444",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/DevDesai391152",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University at Buffalo",
      degree: "Master's Degree in Artificial Intelligence",
      start: "2025",
      end: "2027",
    },
    {
      school: "National Institute of Technology, Surat",
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Translational Biophotonics Laboratory, University at Buffalo",
      link: "https://ubwp.buffalo.edu/biophotonics/",
      badges: ["On Site"],
      title: "Research Assistant",
      start: "August 2025",
      end: "Present",
      description: "Working on Real time AI systems",
    },
    {
      company: "Arrow Electronics",
      link: "https://www.apple.com/",
      badges: ["On Site"],
      title: "ML Intern",
      start: "January 2025",
      end: "June 2025",
      description: "Part of the Unified Intelligence team",
    },
    {
      company: "India Space Research Organisation (ISRO)",
      link: "https://www.cognitivelab.in",
      badges: ["On Site"],
      title: "Summer Research Intern",
      start: "April 2024",
      end: "July 2024",
      description:
        "Pioneered one of India's first Kannada bilingual Large Language Model - Ambari-7b. Developed Cognitune, an enterprise-grade LLMops platform, reducing time to production by 60%.",
    },
    {
      company: "Indian Institute of Technology, Roorkee (IITR)",
      link: "https://turboml.com/",
      badges: ["On Site"],
      title: "ML Intern",
      start: "January 2023",
      end: "March 2023",
      description:
        "Contributed to the development of LLMOps platform, focusing on AI system observability and evaluation. Implemented advanced tracing, monitoring, and analytics solutions to gain insights into large-scale AI systems, which enhanced model transparency and performance.",
    }
  ],
  skills: [
    "AI/ML/DL: PyTorch, Transformers, PEFT, Bitsandbytes, Diffusers, Hugging Face Ecosystem",
    "Python Libs: NLTK, Scapy, FastAPI, Flask, Django, OpenCV, BeautifulSoup, Selenium, Pandas, Poetry, Langchain",
    "Web: React.js, Next.js, Express, Node.js, Vue.js, Bootstrap, Tailwind",
    "Cloud: Azure, Azure Machine Learning, AWS, AWS SageMaker, Docker, Kubernetes, Cloudflare, E2E Cloud",
    "Big Data: Databricks, Azure Data Factory, Apache Spark, Hadoop, Kafka",
    "Databases: MongoDB, PostgreSQL, Firebase, Redis, MySQL, Supabase, Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: HTML, CSS, JavaScript, TypeScript, Python, C/C++, SQL",
  ],
  researchProjects: [
    {
      title: "Indic Eval/Leaderboard",
      techStack: ["spaCy", "NLTK", "Transformers", "SkyPilot", "Azure"],
      description:
        "Developed an evaluation framework for Indic Large Language Models, accommodating multiple translated benchmarks and a leaderboard around it for comparison.",

      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/indic_eval",
      },
    },
    {
      title: "Ambari-7b",
      techStack: ["Pytroch", "Transformers", "PEFT ", "Deepspeed", "Azure ML"],
      description:
        "India's first Kannada bilingual LLM utilizing the LLama2/3 base model, fine-tuned across multiple stages with 1 billion Kannada tokens and tokenization efficiency by 85%",
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/collections/Cognitive-Lab/ambari-65a2678d1051c2b0db3e01fe",
      },
    },
    {
      title: "YoloGemma",
      techStack: ["LLaVa", "PaliGemma", "FastGPT", "Transformers"],
      description:
        "Testing and evaluating the capabilities of Vision-Language models (PaliGemma) in performing computer vision tasks such as object detection and segmentation.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/YoloGemma",
      },
    },
    {
      title: "VARAG",
      techStack: ["LLaVa", "Visual RAG", "LLama-index", "Qdrant"],
      description:
        "Vision-Augmented Retrieval and Generation : a system integrating textual and visual information, enhancing RAG by 35% and improving contextual precision by 60%.",
    },
    {
      title: "Mixture of Lora Experts",
      techStack: ["PyTorch", "BERT", "PEFT", "Distributed Training", "HPC"],
      description:
        "A novel architecture facilitating the dynamic serving of multiple finetuned LLMs by swapping Lora Adapters during inference.",
    },
    {
      title: "ViViD",
      techStack: ["PyTorch", "LLaVA", "PEFT", "Distributed Training", "HPC"],
      description:
        "A state-of-the-art Vision-Language model specialized in converting complex PDFs into markdown with high speed and efficiency.",
    },
  ],
  open_source: [
    "https://github.com/adithya-s-k/omniparse",
    "https://github.com/adithya-s-k/RAG-SaaS",
    "https://github.com/adithya-s-k/Gitvizz",
    "https://github.com/adithya-s-k/Omnidocs",
    "https://github.com/adithya-s-k/VARAG",
    "https://github.com/adithya-s-k/AI-Engineering.academy",
    "https://github.com/adithya-s-k/marker-api",
    "https://github.com/adithya-s-k/YoloGemma",
    "https://github.com/adithya-s-k/indic_eval",
    "https://github.com/adithya-s-k/Indic-llm",
  ],
  projects: [
    {
      title: "Cognitune",
      techStack: ["Python", "FastAPI", "Transformers", "Containerization"],
      description:
        "All-in-one platform for LLMops, featuring distributed data processing, multi-GPU fine-tuning, dynamic evaluation, and one-click high-throughput API deployment.",
    },
    {
      title: "Storyblocks",
      techStack: ["Fast API", "NextJS", "Diffusers", "MoviePy", "Wisper"],
      description:
        "Generate Story Video from a Prompt : Transformed text prompts into dynamic story videos with script generation, synchronized audio, and consistent visual style.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/Storyblocks",
      },
    },
    {
      title: "Marker API",
      techStack: ["Pytorch", "Fast API", "HPC", "Docker", "Transformer"],
      description:
        "A production-ready server with 400 github ⭐, easily deployable to convert PDFs, Word documents, etc., into markdown to aid RAG pipelines.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/marker-api",
      },
    },
    {
      title: "PyRaft",
      techStack: ["Python", "FastAPI", "RAFT Consensus"],
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/PyRaft",
      },
      description:
        "Python implementation of the RAFT consensus algorithm from scratch using FastAPI, achieving a throughput of 50-250 transactions per second",
    },
    {
      title: "Tokenizer Arena",
      techStack: ["Transformer JS", "React", "Tailwind CSS"],
      description:
        "A friendly arena to easily compare different tokenizers of various LLMs simultaneously, running completely in the browser.",
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/spaces/Cognitive-Lab/Tokenizer_Arena",
      },
    },
    {
      title: "Topic2Dataset",
      techStack: ["FastAPI", "NextJS", "Langchain", "GraphScraper", "Docker"],
      description:
        "Create high-quality instruction fine-tuning datasets for LLMs by providing a topic or website, allowing massive synthetic data generation.",
    },
  ],
  extraCurricular: [
    {
      title: "Google Developers Student Club Lead",
      description:
        "Led the Google Developers Student Club, fostering a collaborative environment for technology enthusiasts at PES University.",
    },
    {
      title: "Samarpana, Shunya Technical Head",
      description:
        "Directed technical teams for Samarpana (a fundraising marathon for families of martyrs) and Shunya (Math club) events.",
    },
    {
      title: "Hackathons Participant",
      description:
        "Won National Level Hackathons in Generative-AI - GenAI-Rush and Kodikon3. Participated in over 25 Hackathons with a 90% finalist selection rate.",
    },
  ],
  publications: [
    {
      title:
        "Nayana: A Foundation for Document-Centric Vision-Language Models via Multi-Task, Multimodal, and Multilingual Data Syn-thesis",
      description:
        "A comprehensive approach to generating synthetic datasets for training vision-language models on document understanding tasks across multiple languages.",
      publisher:
        "ICCV 2025 |Workshop on Computer Vision for Developing Countries (CV4DC)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://cv4dc.github.io/2025/call-for-papers/",
      resourceUrl: "https://openreview.net/pdf?id=Ji46STdhQQ",
      citation: "_",
      tags: [
        "Dataset Generation",
        "Multimodal AI",
        "Document Understanding",
        "Synthetic Data",
      ],
      showLinks: true,
    },
    {
      title:
        "ViViD - Vision Language model for Unified Visual Understanding of Documents",
      description:
        "A vision-language model specifically optimized for document understanding tasks, capable of processing diverse document formats with high accuracy.",
      publisher:
        "CVPR 2025 | Emergent Visual Abilities and Limits of Foundation Models (EVAL-FoMo 2025)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://sites.google.com/view/eval-fomo-2-cvpr/home",
      resourceUrl: "https://example.com/vivid-paper.pdf",
      citation: "_",
      tags: [
        "Vision-Language Models",
        "Document Understanding",
        "Multimodal AI",
        "Foundation Models",
      ],
      showLinks: false,
    },
    {
      title:
        "Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages",
      description:
        "Development of a specialized OCR system designed for low-resource Indic languages, addressing unique challenges in character recognition and document processing.",
      publisher: "NAACL 2025 | Language Models for Underserved Communities",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://lm4uc.github.io/",
      resourceUrl: "https://openreview.net/pdf?id=uaQR3BgHrV",
      citation: "_",
      tags: [
        "OCR",
        "Low-Resource Languages",
        "Document Processing",
        "Indic Languages",
      ],
      showLinks: true,
    },
    {
      title:
        "Nayana - A Unified Foundation Model for Multilingual, Multimodal, and Multitask Intelligence",
      description:
        "Winner of the 2024 Llama impact grant from Meta, this paper presents a foundation model architecture designed for multilingual and multimodal applications.",
      publisher: "LlamaCon 2025 | LLama Impact Grant 2024 winner",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://www.llama.com/",
      resourceUrl: "https://example.com/nayana-foundation-model-poster.pdf",
      citation: "_",
      tags: [
        "Foundation Models",
        "Multilingual",
        "Multimodal",
        "Multitask Learning",
      ],
      showLinks: false,
    },
    {
      title:
        "A Multi-Agent Approach for Iterative Refinement in Visual Content Generation",
      description:
        "This paper explores advanced multi-agent collaboration techniques in generative AI systems, focusing on iterative refinement for visual content creation.",
      publisher: "AAAI 2025 | Advancing LLM-Based Multi-Agent Collaboration",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://multiagents.org/workshop",
      resourceUrl:
        "https://multiagents.org/2025_artifacts/a_multi_agent_approach_for_iterative_refinement_in_visual_content_generation.pdf",
      citation: "_",
      tags: [
        "Multi-Agent Systems",
        "Generative AI",
        "Visual Content",
        "LLM Collaboration",
      ],
      showLinks: true,
    },
    {
      title:
        "CAPTAIN: Continuous Automated Planning Through Autonomous Internet Navigation",
      description:
        "A novel framework for autonomous web navigation and task planning using large language models to perform complex multi-step operations.",
      publisher: "AAAI 2025 | Large Language Models for Planning (LM4Plan)",
      date: "2024",
      status: "Accepted",
      websiteUrl: "https://llmforplanning.github.io/",
      resourceUrl: "https://openreview.net/pdf?id=OkvQyqv9H5",
      citation: "_",
      tags: [
        "Automated Planning",
        "Web Navigation",
        "LLM Applications",
        "Autonomous Systems",
      ],
      showLinks: true,
    },
  ],
  achievements: [
    {
      title: "Omniparse Hits 6500 Stars on GitHub",
      date: "April 2025",
      description:
        "Omniparse, our open-source document parsing library, has reached 6500 stars on GitHub, making it one of the most popular libraries for document processing.",
      fullDescription:
        "The open-source document parsing project Marker API has reached 500 stars on GitHub, becoming one of the most popular document processing tools for AI applications. The project has been adopted by several companies for their RAG pipelines and document processing needs. This milestone represents the growing community interest in high-quality PDF-to-markdown conversion tools that integrate seamlessly with modern AI workflows.",
      tags: ["Open Source", "GitHub", "Milestone"],
      link: {
        label: "View Repository",
        href: "https://github.com/adithya-s-k/omniparse",
      },
      socialEmbed: {
        type: "twitter",
        embedId: "1808230459358285834",
      },
    },
    // {
    //   title: "Featured Speaker at LLaMA Developer Conference",
    //   date: "March 2025",
    //   description:
    //     "Presented our work on multilingual adaptations of LLaMA models at Meta's official LLaMA Developer Conference in San Francisco.",
    //   tags: ["Speaking", "LLaMA", "Conference"],
    //   link: {
    //     label: "Conference Website",
    //     href: "https://www.llama.com/conference",
    //   },
    // },
    // {
    //   title: "Ambari-7b Reaches 10,000 Downloads",
    //   date: "February 2025",
    //   description:
    //     "Our Kannada-English bilingual LLM has been downloaded over 10,000 times on Hugging Face, marking a significant milestone for Indic language AI adoption.",
    //   fullDescription:
    //     "Our Kannada-English bilingual LLM has been downloaded over 10,000 times on Hugging Face, marking a significant milestone for Indic language AI adoption. The model has been cited in several research papers and is being used in production by companies and researchers working with Indic languages. This achievement highlights the growing interest in language technology for under-resourced languages and the impact of our work on democratizing AI across languages.",
    //   tags: ["Ambari", "Hugging Face", "Milestone"],
    //   socialEmbed: {
    //     type: "linkedin",
    //     embedId: "activity:123456789",
    //   },
    // },
    {
      title: "Awarded LLaMA Impact Grant by Meta AI",
      date: "April 2025",
      description:
        "Cognitivelab was seleted as one of the recipients of Meta's LLaMA Impact Grant for our work on extending large language models to under-resourced Indic languages.",
      tags: ["Award", "Grant", "Meta AI"],
      link: {
        label: "Announcement",
        href: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/?utm_source=AIatMeta&utm_medium=organic_social&utm_content=image&utm_campaign=llamacon",
      },
    },
    // {
    //   title: "Cognitune Platform Exits Beta",
    //   date: "December 2024",
    //   description:
    //     "Successfully launched the production version of Cognitune, our enterprise LLMOps platform, now serving over 20 organizations across India and Southeast Asia.",
    //   tags: ["Product Launch", "LLMOps", "Enterprise AI"],
    // },
  ],
} as const;
