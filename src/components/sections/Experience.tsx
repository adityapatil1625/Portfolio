import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer (Intern)",
    company: "Amazon",
    location: "Bengaluru,India",
    duration: "June 2025 – Decemeber 2025",
    description: [
      "Designed and implemented data pipelines to ingest, transform, and validate large-scale datasets",
      "Worked with structured and semi-structured data to support analytics and reporting use cases",
      "Developed ETL workflows using Python and SQL with a focus on reliability and performance",
      "Integrated AWS services to build scalable and cost-efficient data solutions",
      "Collaborated with engineers and stakeholders following Agile development practices",
    ],
    technologies: ["Java", "JavaScript", "CDK Pipeline","Python","SQL","AWS (S3, Glue, Lambda)","Git"],
  },
];


const education = [
  {
    degree: "B.E. in Information Science and Engineering",
    institution: "Bangalore Institute of Technology",
    location: "Bangalore, India",
    duration: "2022 – 2026",
    description:
       "Focused on data engineering, full-stack development, and cloud computing, with hands-on experience through projects, hackathons, and competitive programming.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Experience Timeline */}
          <div className="relative mb-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12"
              >

                <div className="glass glass-hover rounded-2xl p-4 w-fit">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
