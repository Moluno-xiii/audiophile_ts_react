interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-darker mb-40 flex h-60 flex-col items-center justify-center">
      <p className="text-lighter text-[40px] uppercase">{title}</p>
    </div>
  );
};

export default PageTitle;
