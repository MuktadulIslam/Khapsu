import Product from "./Product";
import data from "../../../data/productdata.json";
import ProductDetails from "./ProductDetails";

export default function ProductGrid() {
    const productdata = data.products;
    return (
        <>
            <ProductDetails/>
            <div className="mx-1 md:mx-2">
                <div className="grid grid-cols-2 gap-2 md:gap-4 content-normal sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 font-sans">
                    {productdata.map((product) => (
                        <Product
                            key={product.id}
                            productdata={product}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
