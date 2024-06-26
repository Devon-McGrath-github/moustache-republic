import { Product, Selection } from '@/routes/root';
import { Button } from './ui/button';
import { useState } from 'react';
import { Input } from './ui/input';

export default function ProductPage({
  title,
  price,
  description,
  imageURL,
  sizeOptions,
  addToCart,
}: Product & { addToCart: (product: Selection) => void }) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  function cartHandler() {
    setCount(count + 1);
    // TODO: improve alert - use shadcn dialog component in separate component
    size !== ''
      ? addToCart({
          id: count.toString(),
          title,
          price,
          description,
          imageURL,
          size,
          quantity,
        })
      : alert('Please select a size');
  }

  return (
    <div className="flex flex-col md:flex-row w-11/12 md:w-10/12 md:max-w-6xl mx-auto gap-2 pb-4">
      <img
        src={imageURL}
        alt={'Image of ' + title}
        className="mx-auto h-auto max-w-full max-h-[26rem] md:max-h-2/3 md:w-1/3"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">
          <strong>{title}</strong>
        </h1>

        <h3 className="text-[#222222]">
          <strong>${price}</strong>
        </h3>

        <p>{description}</p>

        <div className="flex flex-col gap-2 ">
          <h2>
            Size & Quantity<span className="text-[#C90000]">*</span>
          </h2>

          <div className="flex gap-2">
            {/* TODO: add validation to input - prevent submission of values outside min/max */}
            <Input
              type="number"
              value={quantity}
              // min="1"
              // max="99"
              placeholder="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className={'w-12'}
            />

            {sizeOptions.map((e) => (
              <Button
                variant="outline"
                key={e.id}
                onClick={() => setSize(e.label)}
                className={e.label === size ? 'border-black' : '' + ''}
              >
                {e.label}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={cartHandler}
            className={
              'w-full max-w-[12.6rem] border-black border-2 text-[#222222] hover:bg-[#222222] hover:text-white duration-200'
            }
          >
            <strong>Add to Cart</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}
