const SubPara = ({ para }) => {
  return (
    <div className="max-w-5xl text-center">
      <p>{para}</p>
    </div>
  );
};

SubPara.defaultProps = {
  para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error deleniti voluptates provident odio sequi laborum maiores ea neque dolore minima, accusantium perspiciatis veritatis saepe eius architecto numquam illo aspernatur ab, obcaecati possimus porro iusto consequuntur blanditiis accusamus! Ducimus nihil odio repellat possimus libero soluta voluptas, est praesentium perspiciatis, commodi aliquam.",
};

export default SubPara;
