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
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 dark:from-blue-200 dark:via-purple-200 dark:to-rose-200 rounded"></div>
    </div>
  );
};

export default SectionHeading;