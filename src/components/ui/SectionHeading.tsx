interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 mx-auto w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded"></div>
    </div>
  );
};

export default SectionHeading;