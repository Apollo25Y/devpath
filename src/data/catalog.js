const DATA = {
  featuredVideos: [
    { title:"HTML & CSS Full Course – Beginner to Pro",  channel:"freeCodeCamp",        cat:"Frontend",   ytId:"G3e-cpL7ofc", url:"https://youtu.be/G3e-cpL7ofc" },
    { title:"JavaScript Full Course (2024)",             channel:"freeCodeCamp",        cat:"Frontend",   ytId:"PkZNo7MFNFg", url:"https://youtu.be/PkZNo7MFNFg" },
    { title:"React Tutorial for Beginners",              channel:"The Net Ninja",        cat:"Frontend",   ytId:"j942wKiXFu8", url:"https://youtu.be/j942wKiXFu8" },
    { title:"TypeScript Tutorial",                       channel:"The Net Ninja",        cat:"Frontend",   ytId:"2pZmKW9-I_k", url:"https://youtu.be/2pZmKW9-I_k" },
    { title:"React Hooks Explained",                     channel:"Web Dev Simplified",   cat:"Frontend",   ytId:"O6P86uwfdR0", url:"https://youtu.be/O6P86uwfdR0" },
    { title:"Node.js Tutorial for Beginners",            channel:"Programming with Mosh",cat:"Backend",    ytId:"TlB_eWDSMt4", url:"https://youtu.be/TlB_eWDSMt4" },
    { title:"REST API Tutorial (Node + Express)",        channel:"Academind",            cat:"Backend",    ytId:"0oXYLzuucwE", url:"https://youtu.be/0oXYLzuucwE" },
    { title:"NeetCode 150 – Full Roadmap",               channel:"NeetCode",             cat:"Algoritmos", ytId:"jgQjes7MgTM", url:"https://youtu.be/jgQjes7MgTM" },
    { title:"Docker Tutorial for Beginners",             channel:"TechWorld with Nana",  cat:"DevOps",     ytId:"3c-iBn73dDE", url:"https://youtu.be/3c-iBn73dDE" },
    { title:"JavaScript in 100 Seconds",                 channel:"Fireship",             cat:"Frontend",   ytId:"DHjqpvDnNGE", url:"https://youtu.be/DHjqpvDnNGE" }
  ],
  topChannels: [
    { name:"Fireship",           url:"https://youtube.com/@Fireship",          tag:"Frontend",   tagColor:"#3b82f6", tagBg:"rgba(59,130,246,.12)",  avatar:"F",   avatarBg:"linear-gradient(135deg,#3b82f6,#06b6d4)", desc:"Videos ultra-rápidos para entender el ecosistema tech en segundos." },
    { name:"freeCodeCamp",       url:"https://youtube.com/@freecodecamp",      tag:"Full Stack", tagColor:"#22c55e", tagBg:"rgba(34,197,94,.12)",    avatar:"fCC", avatarBg:"linear-gradient(135deg,#16a34a,#22c55e)", desc:"El bootcamp gratuito más completo de YouTube. De cero a profesional." },
    { name:"Traversy Media",     url:"https://youtube.com/@TraversyMedia",     tag:"Proyectos",  tagColor:"#f97316", tagBg:"rgba(249,115,22,.12)",   avatar:"TM",  avatarBg:"linear-gradient(135deg,#ea580c,#f97316)", desc:"Aprende construyendo proyectos reales. El enfoque práctico por excelencia." },
    { name:"NeetCode",           url:"https://youtube.com/@NeetCode",          tag:"Algoritmos", tagColor:"#22c55e", tagBg:"rgba(34,197,94,.12)",    avatar:"NC",  avatarBg:"linear-gradient(135deg,#15803d,#22c55e)", desc:"Entrevistas técnicas con visualizaciones claras. El mejor para LeetCode." },
    { name:"TechWorld with Nana",url:"https://youtube.com/@TechWorldwithNana", tag:"DevOps",     tagColor:"#f97316", tagBg:"rgba(249,115,22,.12)",   avatar:"TN",  avatarBg:"linear-gradient(135deg,#c2410c,#f97316)", desc:"La referencia en DevOps. Docker y Kubernetes explicados como nadie más." }
  ],
  categories: [
    {
      id:"frontend", name:"Frontend", emoji:"🎨", color:"#3b82f6",
      desc:"HTML, CSS, JavaScript, React y el ecosistema del navegador.",
      bg:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      ytQuery:"frontend web development tutorial javascript react",
      channels:[
        { name:"freeCodeCamp.org",   url:"https://youtube.com/@freecodecamp",    desc:"Cursos completos de cero a profesional." },
        { name:"The Net Ninja",       url:"https://youtube.com/@NetNinja",         desc:"Playlists estructuradas para aprender con disciplina." },
        { name:"Traversy Media",      url:"https://youtube.com/@TraversyMedia",    desc:"Proyectos reales desde el primer día." },
        { name:"Web Dev Simplified",  url:"https://youtube.com/@WebDevSimplified", desc:"Conceptos complejos explicados con claridad." },
        { name:"Fireship",            url:"https://youtube.com/@Fireship",         desc:"Videos ultra-rápidos, visión global del ecosistema." }
      ],
      videos:[
        { title:"HTML & CSS Full Course",        channel:"freeCodeCamp",       url:"https://youtu.be/G3e-cpL7ofc" },
        { title:"JavaScript Full Course (2024)", channel:"freeCodeCamp",       url:"https://youtu.be/PkZNo7MFNFg" },
        { title:"React Tutorial for Beginners",  channel:"The Net Ninja",       url:"https://youtu.be/j942wKiXFu8" },
        { title:"TypeScript Tutorial",            channel:"The Net Ninja",       url:"https://youtu.be/2pZmKW9-I_k" },
        { title:"React Hooks Explained",          channel:"Web Dev Simplified", url:"https://youtu.be/O6P86uwfdR0" }
      ]
    },
    {
      id:"backend", name:"Backend", emoji:"⚙️", color:"#ef4444",
      desc:"Node.js, APIs REST, bases de datos y arquitectura del servidor.",
      bg:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      ytQuery:"backend nodejs express api rest tutorial",
      channels:[
        { name:"Programming with Mosh", url:"https://youtube.com/@programmingwithmosh", desc:"Fundamentos profesionales para un backend sólido." },
        { name:"Academind",              url:"https://youtube.com/@academind",            desc:"Cobertura profunda: Node, APIs, autenticación." },
        { name:"The Net Ninja",          url:"https://youtube.com/@NetNinja",             desc:"Node + MongoDB. Ideal para transición desde frontend." },
        { name:"Traversy Media",         url:"https://youtube.com/@TraversyMedia",        desc:"APIs reales, orientado 100% a proyectos." },
        { name:"freeCodeCamp.org",       url:"https://youtube.com/@freecodecamp",         desc:"Cursos bootcamp para consolidar backend completamente." }
      ],
      videos:[
        { title:"Node.js Tutorial for Beginners",    channel:"Programming with Mosh", url:"https://youtu.be/TlB_eWDSMt4" },
        { title:"REST API Tutorial (Node + Express)", channel:"Academind",             url:"https://youtu.be/0oXYLzuucwE" },
        { title:"Full Stack MERN Tutorial",           channel:"The Net Ninja",         url:"https://youtu.be/98BzS5Oz5E4" },
        { title:"Node.js Crash Course",               channel:"Traversy Media",        url:"https://youtu.be/fBNz5xF-Kx4" },
        { title:"MongoDB Full Course",                channel:"freeCodeCamp",          url:"https://youtu.be/ExcRbA7fy_A" }
      ]
    },
    {
      id:"algoritmos", name:"Algoritmos", emoji:"🧠", color:"#22c55e",
      desc:"Estructuras de datos, complejidad y preparación para entrevistas técnicas.",
      bg:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80",
      ytQuery:"data structures algorithms leetcode interview",
      channels:[
        { name:"NeetCode",  url:"https://youtube.com/@NeetCode",   desc:"El mejor para entrevistas técnicas con visualizaciones." },
        { name:"Abdul Bari",url:"https://youtube.com/@abdul_bari", desc:"Algoritmos clásicos con explicaciones académicas." },
        { name:"CS Dojo",   url:"https://youtube.com/@CSDojo",     desc:"Para principiantes: estructuras de datos visuales." }
      ],
      videos:[
        { title:"NeetCode 150 – Full Roadmap",   channel:"NeetCode",  url:"https://youtu.be/jgQjes7MgTM" },
        { title:"Data Structures for Beginners", channel:"NeetCode",  url:"https://youtu.be/BBpAmxU_NQo" },
        { title:"Sorting Algorithms Explained",  channel:"Abdul Bari",url:"https://youtu.be/pkkFqlG0Dck" },
        { title:"Introduction to Big O Notation",channel:"CS Dojo",   url:"https://youtu.be/D6xkbGLQesk" }
      ]
    },
    {
      id:"devops", name:"DevOps / Cloud", emoji:"☁️", color:"#f97316",
      desc:"Docker, Kubernetes, CI/CD, Linux y despliegue en la nube.",
      bg:"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
      ytQuery:"docker kubernetes devops cloud aws tutorial",
      channels:[
        { name:"TechWorld with Nana", url:"https://youtube.com/@TechWorldwithNana", desc:"Referencia #1 en DevOps. Docker y Kubernetes paso a paso." },
        { name:"NetworkChuck",        url:"https://youtube.com/@NetworkChuck",       desc:"Redes, Linux y cloud con estilo dinámico y accesible." },
        { name:"Fireship",            url:"https://youtube.com/@Fireship",           desc:"Visión global de DevOps en 100 segundos por tema." }
      ],
      videos:[
        { title:"Docker Tutorial for Beginners",    channel:"TechWorld with Nana", url:"https://youtu.be/3c-iBn73dDE" },
        { title:"Kubernetes Tutorial for Beginners",channel:"TechWorld with Nana", url:"https://youtu.be/X48VuDVv0do" },
        { title:"AWS Tutorial for Beginners",       channel:"NetworkChuck",        url:"https://youtu.be/ZB4yRBfzuho" },
        { title:"Docker in 100 Seconds",            channel:"Fireship",            url:"https://youtu.be/Gjnup-PuquQ" }
      ]
    },
    {
      id:"carrera", name:"Proyectos & Carrera", emoji:"🚀", color:"#a855f7",
      desc:"Portafolio, entrevistas, salarios y cómo conseguir tu primer trabajo tech.",
      bg:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      ytQuery:"developer career portfolio first job programming",
      channels:[
        { name:"Forrest Knight",     url:"https://youtube.com/@ForrestKnight", desc:"Cómo conseguir tu primer trabajo dev y construir portafolio." },
        { name:"Kevin Powell",       url:"https://youtube.com/@KevinPowell",   desc:"Maestro del CSS para proyectos visualmente impresionantes." },
        { name:"Clément Mihailescu", url:"https://youtube.com/@clem",          desc:"Entrevistas técnicas, salarios y vida en grandes empresas tech." }
      ],
      videos:[
        { title:"How to Get Your First Developer Job",    channel:"Forrest Knight",     url:"https://youtu.be/AbED-0IGgiM" },
        { title:"Build a Portfolio That Gets You Hired",  channel:"Forrest Knight",     url:"https://youtu.be/nrWGr2OvBD4" },
        { title:"Build a Responsive Website from Scratch",channel:"Kevin Powell",       url:"https://youtu.be/yn6i2oJkCFk" },
        { title:"How to Ace Your Coding Interview",       channel:"Clément Mihailescu", url:"https://youtu.be/r8RxkpUvxK0" }
      ]
    }
  ]
};

export default DATA;