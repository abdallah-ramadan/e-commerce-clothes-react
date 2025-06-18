import React, { useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/Cart/CartSlice'
import { toast } from 'react-toastify'


const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()
  const [size, setSize] = useState("")
  const [selectedImage, setSelectedImage] = useState("");

  // inside useEffect:
  useEffect(() => {
    const productArray = products.filter((ele) => {
      return ele._id === productId;
    });
    const selected = productArray[0];
    setProduct(selected);
    setSelectedImage(Array.isArray(selected.image) ? selected.image[0] : selected.image);
  }, [productId]);



  const handelAddToCart = () => {
    if (!size) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    dispatch(addToCart({ ...product, size: size }));
    toast.success(`${product.name} added to cart!`);
  }




  return (
    <div>
      <div className='border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        <div className='flex gap-12 flex-col sm:flex-row'>
          <div className=' mb-auto flex flex-1'>
            <div className="flex-1 flex flex-col-reverse md:flex-row gap-6">

              <div className="flex flex-row md:max-w-20 md:flex-col justify-between md:justify-start gap-2 md:gap-4">
                {Array.isArray(product?.image) ? (
                  product.image.map((ele) => (
                    <img
                      src={ele}
                      key={ele}
                      alt=""
                      onClick={() => setSelectedImage(ele)}
                      className={`w-1/5 md:w-full aspect-square object-cover cursor-pointer border ${selectedImage === ele ? "border-black" : "border-gray-200"}`}
                    />
                  ))
                ) : (
                  <img
                    src={product?.image}
                    alt=""
                    onClick={() => setSelectedImage(product.image)}
                    className="w-1/5 md:w-full aspect-square object-cover cursor-pointer border border-gray-200"
                  />
                )}
              </div>

              {/* Main Image */}
              <div className="w-full">
                <img
                  src={selectedImage}
                  alt="Main product"
                  className="w-full object-cover rounded-md shadow"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">
              {product?.name}
            </h1>

            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <p className="pl-2">(122)</p>
            </div>

            <p className="mt-5 text-3xl font-medium">{product?.price}</p>

            <p className="mt-5 text-gray-500 md:w-4/5">
              {product.description}
            </p>

            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">

                {product.sizes?.map((ele) => {
                  return (
                    <button key={ele} onClick={() => setSize(ele)} className={`border py-2 cursor-pointer px-4 border-gray-200 bg-gray-100 ${size === ele ? "border-red-400" : ""}`}>
                      {ele}
                    </button>
                  );
                })}

              </div>
            </div>

            <button className="bg-black text-white px-8 py-3 text-sm cursor-pointer active:bg-gray-700" onClick={handelAddToCart}>
              ADD TO CART
            </button>


            <hr className="mt-8 sm:w-4/5 text-gray-200" />

            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails