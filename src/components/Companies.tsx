import { motion } from "framer-motion";
import { companies } from "../data/companies";
import SectionHeading from './ui/SectionHeading';

const CompanyCard = ({ company, index }: { company: typeof companies[0], index: number }) => {
  return (
    <motion.a
      key={company.name}
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center justify-center p-6 rounded-lg shadow-sm hover:shadow-md bg-slate-50 dark:bg-slate-800 before:absolute before:inset-0 before:rounded-lg before:transition-opacity hover:before:opacity-100 before:opacity-0 w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
    >
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        className="relative z-10 max-h-16 max-w-full object-contain filter brightness-0 dark:invert dark:brightness-0 dark:contrast-200"
      />
    </motion.a>
  );
};

const Companies = () => {
  return (
    <section id="companies" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Career Highlights" 
          subtitle="I've contributed to products and teams at" 
        />
        
        <div className="max-w-7xl mx-auto mt-16">
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies; 