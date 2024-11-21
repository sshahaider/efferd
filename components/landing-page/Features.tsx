import { cn } from "@/lib/utils";
import { BadgeHelp, DollarSign, EarthLock, HandshakeIcon, SquareTerminal, TabletSmartphone, TextSearchIcon, Users } from "lucide-react";
import { GradientHeading } from "../ui/GradientHeading";

export function Features() {

  const features = [
    {
      title: "Tailor-Made Solutions",
      description: "We create custom websites to suit your business's specific needs and goals.",
      icon: <SquareTerminal />,
    },
    {
      title: "Experienced Team",
      description:
        "Our developers and designers bring years of industry expertise to every project.",
      icon: <Users />,
    },
    {
      title: "Pricing like no other",
      description: "We offer competitive rates without compromising on quality or performance.",
      icon: <DollarSign />,
    },
    {
      title: "Responsive Design",
      description: "All our websites are optimized for mobile, tablet, and desktop for seamless experiences.",
      icon: <TabletSmartphone />,
    },
    {
      title: "SEO Optimization",
      description: "We ensure your website ranks well in search engines to drive organic traffic.",
      icon: <TextSearchIcon />,
    },
    {
      title: "User-Friendly Interfaces",
      description: "We design intuitive and easy-to-navigate interfaces for better user engagement.",
      icon: <HandshakeIcon />,
    },
    {
      title: "Data Security",
      description: "Our websites are built with security in mind, protecting your data and your users’ information.",
      icon: <EarthLock />,
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous maintenance and updates to keep your website running smoothly.",
      icon: <BadgeHelp />,
    },
  ];

  return (
    <section className="bg-background my-20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">

          <GradientHeading h={2} className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mt-5">Why Choose Us?</GradientHeading>
          <p className="text-center mt-5 opacity-75">
            We stand out because we are committed to quality, deadlines, and communication. Here’s why our clients trust us:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
