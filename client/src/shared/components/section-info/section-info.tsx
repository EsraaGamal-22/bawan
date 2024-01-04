export type SectionInfoProps = {
  title: string;
  txt: string;
};
export const SectionInfo = ({ title, txt }: SectionInfoProps) => {
  return (
    <>
      <h1 className="relative text-3 lg:text-4.8 text-primary-900 font-bold py-2.8 after:right-1/2 after:translate-x-1/2 lg:after:translate-x-0  after:absolute after:top-full lg:after:right-0  after:w-[30rem] after:h-.5 after:bg-gradient-to-l after:from-primary-900 after:to-secondary-700">
        {title}
      </h1>
      <p className="mt-2.8 mb-3 lg:mb-5.2 text-1.4 lg:text-2.4 text-primary-900 opacity-80 leading-.5 font-normal ">
        {txt}
      </p>
    </>
  );
};
