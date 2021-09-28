import React, { useEffect, useState } from 'react'
import { getDishes } from '../apiCalls/apicall';

const Dish = (props) => {
    const [products, setProducts] = useState([]);
    const getDishesApi = async () => {
        const res = await getDishes();
        if (res.status == 200) {
            setProducts(res.data);
        }
        
    }
    useEffect(() => {
     
        if (props.isVeg)
            setProducts(products.filter(item => item.item_type_name == 'Veg'))
      
        else getDishesApi();

    }, [props.isVeg, props.includesEgg])
    return (
        <div className="row">
            {
                products ?
                    products.length > 0 ?
                        products.map((item, i) => (
                            <div className="col-6 product-card" key={`dish-${i}`}>
                                <div className="card mb-2 mt-3 seller-card h-100">
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="dish-name">{item.item_name}</p>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className={item.item_type_name != 'Non-Veg' ? 'green-border' : 'red-border'}>
                                                            <div className={item.item_type_name != 'Non-Veg' ? "green-dot" : "red-dot"}>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="col-8 d-flex">
                                                        <p className="mb-0 ml-1 seasonal-text">| {item.category_name}</p>
</div>
                                                    
                                                </div>


                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        {item.is_best_seller ?
                                                            <div className="best-seller-section">
                                                                <div className="pink-dot"></div>

                                                                <p className="ml-1 best-seller-text">Best Seller</p>

                                                            </div>
                                                            : null
                                                        }
                                                       
                                                                <div>
                                                                    <i className="fa fa-heart"> 
                                                                    {
                                                            item.is_custome ?
                                                                    <span className="customize-text">Customizable</span>
                                                                    :  <del className="customize-text">Customizable</del>
                                                        }
                                                                    </i>
                                                                </div>
                                                                

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-12 d-flex justify-content-between">
                                            <div className="d-flex ml-3">
                                                <i className="fa fa-inr" aria-hidden="true">
                                                    <span className="price-text"> {item.price}</span>
                                                </i>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn bottom-add-btn">+ Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )





                        )
                        : null
                    : null
            }


        </div>
    )
}

export default Dish
