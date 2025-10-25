import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Download, Mail, Linkedin, MapPin, Phone, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const savedTheme = window.localStorage?.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (window.localStorage) {
      window.localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ranim_Ahmadi_CV.pdf';
    link.download = 'Ranim_Ahmadi_CV.pdf';
    link.click();
  };

  const experiences = [
    {
      title: "Stage de fin d'études",
      company: "Sofrecom Tunisie",
      period: "01/2025 – 07/2025",
      description: "Développement d'une application web intelligente pour la génération et l'analyse automatisée des CVs avec dashboard KPI et système de recommandation des profils internes.",
      tech: "Django, Python, Angular, MySQL, NLTK, Hugging Face"
    },
    {
      title: "Stage d'ingénieur en sécurité des réseaux",
      company: "3S (Standard Sharing Software)",
      period: "06/2024 – 08/2024",
      description: "Mise en place d'une architecture Zero Trust Network avec FortiGate, FortiAuthenticator et EMS.",
      tech: "Fortinet"
    },
    {
      title: "Stage d'initiation à l'entreprise",
      company: "3S (Standard Sharing Software)",
      period: "06/2023 – 08/2023",
      description: "Développement d'une application web permettant aux stagiaires de saisir leurs évaluations, de formuler des feedbacks et de consulter les retours formulés par leurs encadrants.",
      tech: "ASP.NET, SQL Server, Angular"
    },
    {
      title: "Stage de formation humaine et sociale",
      company: "Centre National d'Informatique (CNI)",
      period: "08/2021 – 09/2021",
      description: "",
      tech: ""
    }
  ];

  const projects = [
    {
      title: "Projet d'intégration DevOps",
      description: "Mise en place d'une chaîne CI/CD incluant l'analyse de code, la gestion des artéfacts et le monitoring de l'infrastructure.",
      tech: "Jenkins, Docker, Git, Nexus, JUnit, SonarQube, Prometheus, Grafana"
    },
    {
      title: "Développement et déploiement d'une application",
      description: "Création d'une infrastructure OpenStack, développement d'une application Spring Boot/Angular et déploiement dans un Cloud privé.",
      tech: "OpenStack, Docker, Kubernetes, Ansible, Prometheus, Grafana, Spring Boot, Microsoft Azure"
    },
    {
      title: "Développement d'une application multiplateforme",
      description: "Développement d'une application multiplateforme (web, mobile et desktop) offrant des services dans le domaine de l'art et de la culture.",
      tech: "Java, Symfony, Codename One, MySQL"
    },
    {
      title: "Analyse des avis clients pour détection de sentiment",
      description: "Développement d'un système d'analyse de sentiment sur des avis clients, appliquant CRISP-DM pour le prétraitement et l'analyse des données et visualisation des résultats.",
      tech: "Python, Pandas, Scikit-learn, NLTK, Matplotlib, TextBlob"
    },
    {
      title: "Prédiction de la réussite académique",
      description: "Analyse de données d'étudiants (notes, présence, activités) pour prédire la réussite ou l'échec aux examens.",
      tech: "Python, Pandas, Numpy, Scikit-learn, Matplotlib, Seaborn"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800'} transition-colors duration-300`}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-blue-100'} backdrop-blur-xl shadow-lg z-50 border-b transition-colors duration-300`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5">
                  <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center overflow-hidden`}>
                    <img 
                      src="/photo.jpg" 
                      alt="Ranim Ahmadi" 
                      className="w-full h-full object-cover object-center"
                      style={{ aspectRatio: '1098/1280', objectPosition: 'center 20%' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span class="text-blue-600 font-bold text-lg">RA</span>';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              
              <div>
                <motion.h1 
                  className={`text-xl font-bold ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.02 }}
                >
                  Ranim Ahmadi
                </motion.h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>Ingénieure Informatique</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { ref: aboutRef, label: "À propos" },
                { ref: educationRef, label: "Formation" },
                { ref: experienceRef, label: "Expérience" },
                { ref: projectsRef, label: "Projets" },
                { ref: skillsRef, label: "Compétences" },
                { ref: contactRef, label: "Contact" }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className={`px-4 py-2 rounded-lg text-base font-medium ${darkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'} transition-all duration-200 relative group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} group-hover:w-full transition-all duration-300`}></span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all duration-300`}
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span className="hidden sm:inline">Télécharger CV</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-xl p-8 md:p-10 border transition-colors duration-300`}>
            <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
                À propos de moi
              </h2>
              <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} rounded-full mb-6`}></div>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Ingénieure en informatique, j'aime participer à des projets concrets où je peux apporter des solutions efficaces. 
                Mon atout principal est ma capacité à m'adapter rapidement et à apprendre en permanence pour répondre aux besoins des projets. 
                Je recherche un environnement de travail stimulant où je pourrai contribuer activement et développer mes compétences sur des technologies variées.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-xl p-8 md:p-10 border transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Parcours académique
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} rounded-full mb-8`}></div>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 10 }} className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'} border transition-colors duration-300`}>
                <h3 className={`text-base font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-1`}>Cycle d'Ingénieur Informatique</h3>
                <p className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-1`}>École supérieure privée d'ingénierie et de technologie (ESPRIT)</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>2020 - 2025</p>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100'} border transition-colors duration-300`}>
                <h3 className={`text-base font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-1`}>Baccalauréat scientifique</h3>
                <p className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-1`}>Lycée Manzah 9 Dachraou</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>2016 - 2020</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-xl p-8 md:p-10 border transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Expérience professionnelle
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} rounded-full mb-8`}></div>

            <div className="relative">
              <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gradient-to-b from-blue-400 to-indigo-400' : 'bg-gradient-to-b from-blue-400 to-indigo-400'}`}></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-20 pb-10 last:pb-0"
                >
                  <div className={`absolute left-[-6px] md:left-[26px] top-1 w-3 h-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full shadow-lg shadow-blue-500/50`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-slate-50 to-blue-50 border-gray-200'} p-5 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className={`text-base font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>{exp.title}</h3>
                        <p className={`text-base font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</p>
                      </div>
                      <span className={`inline-block mt-2 md:mt-0 px-3 py-1 ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'} rounded-full text-xs font-medium`}>
                        {exp.period}
                      </span>
                    </div>
                    {exp.description && (
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 leading-relaxed`}>{exp.description}</p>
                    )}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.split(', ').map((tech, i) => (
                          <span key={i} className={`px-2.5 py-1 ${darkMode ? 'bg-gray-800 text-gray-300 border-gray-600' : 'bg-white text-gray-700 border-gray-200'} rounded-lg text-xs font-medium border`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-xl p-8 md:p-10 border transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Projets
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} rounded-full mb-8`}></div>

            <div className="relative">
              <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gradient-to-b from-indigo-400 to-purple-400' : 'bg-gradient-to-b from-indigo-400 to-purple-400'}`}></div>

              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-20 pb-10 last:pb-0"
                >
                  <div className={`absolute left-[-6px] md:left-[26px] top-1 w-3 h-3 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full shadow-lg shadow-indigo-500/50`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'} p-5 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <h3 className={`text-base font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>{project.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 leading-relaxed`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className={`px-2.5 py-1 ${darkMode ? 'bg-gray-800 text-gray-300 border-gray-600' : 'bg-white text-gray-700 border-purple-200'} rounded-lg text-xs font-medium border`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl shadow-xl p-8 md:p-10 border transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Compétences
            </h2>
            <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} rounded-full mb-8`}></div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -5 }} className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100'} border transition-colors duration-300`}>
                <h3 className={`text-base font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`}>Développement logiciel</h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "Python", "Django", "Angular", "Java", "Git", "DevOps", "Microservices", "SQL", "NoSQL", "Agile", "NLP", "NLTK"].map((skill, i) => (
                    <span key={i} className={`px-2.5 py-1 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} rounded-lg text-xs font-medium shadow-sm`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'} border transition-colors duration-300`}>
                <h3 className={`text-base font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-3`}>Infrastructure Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Ansible", "Kubernetes", "Terraform", "Jenkins", "OpenStack", "Prometheus", "Grafana", "SonarQube", "Azure"].map((skill, i) => (
                    <span key={i} className={`px-2.5 py-1 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} rounded-lg text-xs font-medium shadow-sm`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className={`p-5 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100'} border transition-colors duration-300`}>
                <h3 className={`text-base font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-3`}>Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Travail en équipe", "Gestion du temps"].map((skill, i) => (
                    <span key={i} className={`px-2.5 py-1 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} rounded-lg text-xs font-medium shadow-sm`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-600 to-indigo-600'} rounded-3xl shadow-2xl p-8 md:p-10 text-white transition-colors duration-300`}>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="h-1 w-20 bg-white rounded-full mb-8"></div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.a
                  href="mailto:ahmadiranim.pro@gmail.com"
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-white/10'} backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300`}
                >
                  <div className="p-2.5 bg-white/20 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>Email</p>
                    <p className="font-medium text-sm">ahmadiranim.pro@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+21622448135"
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-white/10'} backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300`}
                >
                  <div className="p-2.5 bg-white/20 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>Téléphone</p>
                    <p className="font-medium text-sm">+216 22 448 135</p>
                  </div>
                </motion.a>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/in/ranim-ahmadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-white/10'} backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300`}
                >
                  <div className="p-2.5 bg-white/20 rounded-lg">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>LinkedIn</p>
                    <p className="font-medium text-sm">linkedin.com/in/ranim-ahmadi</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-white/10'} backdrop-blur-sm rounded-xl`}
                >
                  <div className="p-2.5 bg-white/20 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>Localisation</p>
                    <p className="font-medium text-sm">Tunis, Tunisie</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;