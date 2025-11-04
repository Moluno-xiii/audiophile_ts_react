interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-darker mb-40 flex h-[102px] flex-col items-center justify-center md:h-60">
      <p className="text-lighter text-[28px] uppercase md:text-[32px] lg:text-[40px]">
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
