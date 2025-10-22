import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Download, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Pour le téléchargement du CV, vous devrez placer le fichier dans le dossier public de votre projet
  const handleDownloadCV = () => {
    // Créez un dossier "public" à la racine de votre projet et placez-y votre CV
    // Renommez-le par exemple "Ranim_Ahmadi_CV.pdf"
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
      period: "09/2024 – 11/2024",
      description: "Mise en place d'une chaîne CI/CD incluant l'analyse de code, la gestion des artéfacts et le monitoring de l'infrastructure.",
      tech: "Jenkins, Docker, Git, Nexus, JUnit, SonarQube, Prometheus, Grafana"
    },
    {
      title: "Développement et déploiement d'une application",
      period: "11/2023 – 04/2024",
      description: "Création d'une infrastructure OpenStack, développement d'une application Spring Boot/Angular et déploiement dans un Cloud privé.",
      tech: "OpenStack, Docker, Kubernetes, Ansible, Prometheus, Grafana, Spring Boot, Microsoft Azure"
    },
    {
      title: "Développement d'une application multiplateforme",
      period: "01/2023 – 04/2023",
      description: "Développement d'une application multiplateforme (web, mobile et desktop) offrant des services dans le domaine de l'art et de la culture.",
      tech: "Java, Symfony, Codename One, MySQL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Ranim Ahmadi
            </motion.h1>
            
            <div className="hidden md:flex items-center space-x-1">
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
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span className="hidden sm:inline">Télécharger CV</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section - À propos */}
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                À propos de moi
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Ingénieure en informatique, j'aime participer à des projets concrets où je peux apporter des solutions efficaces. 
                Mon atout principal est ma capacité à m'adapter rapidement et à apprendre en permanence pour répondre aux besoins des projets. 
                Je recherche un environnement de travail stimulant où je pourrai contribuer activement et développer mes compétences sur des technologies variées.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Parcours académique */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Parcours académique
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10"></div>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Cycle d'Ingénieur Informatique</h3>
                <p className="text-lg font-medium text-gray-800 mb-1">École supérieure privée d'ingénierie et de technologie (ESPRIT)</p>
                <p className="text-sm text-gray-600 font-medium">2020 - 2025</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Baccalauréat scientifique</h3>
                <p className="text-lg font-medium text-gray-800 mb-1">Lycée Manzah 9 Dachraou</p>
                <p className="text-sm text-gray-600 font-medium">2016 - 2020</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Expérience professionnelle - Timeline */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Expérience professionnelle
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10"></div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-6px] md:left-[26px] top-1 w-3 h-3 bg-blue-600 rounded-full shadow-lg shadow-blue-500/50"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-700 mb-3 leading-relaxed">{exp.description}</p>
                    )}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.split(', ').map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-xs font-medium border border-gray-200">
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

        {/* Projets - Timeline */}
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projets
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10"></div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>

              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-6px] md:left-[26px] top-1 w-3 h-3 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/50"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">{project.title}</h3>
                      <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-xs font-medium border border-purple-200">
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

        {/* Compétences */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Compétences
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10"></div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Développement logiciel</h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "Python", "Django", "Angular", "Java", "Git", "DevOps", "Microservices", "SQL", "NoSQL", "Agile", "NLP", "NLTK"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100"
              >
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Outils d’infrastructure pour le Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Ansible", "Kubernetes", "Terraform", "Jenkins", "OpenStack", "Prometheus", "Grafana", "SonarQube", "Azure"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Travail en équipe", "Gestion du temps"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <div className="h-1 w-24 bg-white rounded-full mb-10"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.a
                  href="mailto:ranim.ahmadi@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email</p>
                    <p className="font-medium">ahmadiranim.pro@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+21622000000"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Téléphone</p>
                    <p className="font-medium">+216 22 448 135</p>
                  </div>
                </motion.a>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="https://linkedin.com/in/ranim-ahmadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/ranim-ahmadi</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Localisation</p>
                    <p className="font-medium">Tunis, Tunisie</p>
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