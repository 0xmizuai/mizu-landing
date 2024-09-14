import classNames from "classnames";

interface Props {
  title: string;
  data: string | undefined;
  className?: string;
}

export const DataItem = (props: Props) => {
  const { title, data, className } = props;

  return (
    <div
      className={classNames("flex items-center text-[18px]", className || "")}
    >
      <div className="w-[300px] text-text2">{title}</div>

      <div className="ml-4 text-text1">{data === undefined ? "--" : data}</div>
    </div>
  );
};
