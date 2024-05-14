import { Selection } from '@/routes/root';

export default function CartItem({
  title,
  price,
  image,
  size,
  quantity,
}: Selection) {
  return (
    <div className="w-screen sm:w-72 grid grid-cols-[20%_80%] sm:grid-cols-[30%_70%] h-24 gap-2">
      <img src={image} alt={'Image of ' + title} className="w-12" />
      <div className="flex flex-col gap-2">
        <h1>
          <strong>{title}</strong>
        </h1>
        <h3>
          {quantity} x ${price}
        </h3>
        <p>Size: {size}</p>
      </div>
    </div>
  );
}
