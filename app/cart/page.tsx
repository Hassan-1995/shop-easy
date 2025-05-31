import CartItems from "./CartItems";

const CartPage = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-8">
      <section className="border-b border-amber-300 mb-2 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl italic text-emerald-900 font-bold mb-4">
          Gravitee
        </h1>
        <p className="text-lg md:text-2xl text-amber-400">
          Thank You For Trusting Us{" "}
        </p>
      </section>
      <section className="lg:max-w-4xl mx-auto md:px-10 ">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
        <CartItems />
      </section>
    </div>
  );
};

export default CartPage;
