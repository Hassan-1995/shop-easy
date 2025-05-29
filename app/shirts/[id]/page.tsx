import MainSection from "./MainSection";

type ItemDetailPageProps = {
  // params: { id: string };
  searchParams: {
    picture: string | "";
    desc: string | "";
    subTitle: string | "";
    cost: string | "";
    stk: number | 0;
    color: string | "";
  };
};

const ItemDetailPage = ({
  //   params: { id },
  searchParams,
}: ItemDetailPageProps) => {
  return (
    <div>
      {/* ItemDetailPage: {id} and {searchParams?.color} */}
      <MainSection
        imageSrc={searchParams.picture}
        title={searchParams.desc}
        subTitle={searchParams.subTitle}
        price={searchParams.cost}
        stock={searchParams.stk}
        shirtColor={searchParams.color}
      />
    </div>
  );
};

export default ItemDetailPage;
