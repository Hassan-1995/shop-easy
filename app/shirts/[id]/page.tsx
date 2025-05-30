import MainSection from "../../components/MainSection";

type ItemDetailPageProps = {
  searchParams: Promise<{
    picture: string | "";
    heading?: string;
    subHeading?: string;
    price?: string;
    stock?: string;
    color?: string;
  }>;
};

const ItemDetailPage = async ({ searchParams }: ItemDetailPageProps) => {
  const { picture, heading, subHeading, price, stock, color } =
    await searchParams;

  return (
    <div>
      <MainSection
        imageSrc={picture}
        title={heading}
        subTitle={subHeading}
        price={price}
        stock={stock}
        color={color}
      />
    </div>
  );
};

export default ItemDetailPage;
