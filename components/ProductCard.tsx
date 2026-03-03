type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={image} alt={title} className="rounded-lg mb-4" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
}