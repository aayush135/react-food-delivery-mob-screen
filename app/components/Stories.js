import React, { useEffect, useState } from 'react'
import { getStories } from '../apiCalls/apicall';


const Stories = () => {
    const [stories, setStories] = useState(null);
    const getStoriesApi=async()=>{
        const res=await getStories()
        if (res.status == 200) {
            setStories(res.data);
        }
       
    }
    useEffect(() => {
        getStoriesApi()
    }, [])
    return (
        <div className="row top-product-section">
            <div className="col-12 p-0 products-section">
                {
                    stories ?
                        stories.map((item, i) =>
                            <div key={`story-${i}`} className='story'>
                                <div className="products">
                                    <p className="inner-text">{item.text_image}</p>
                                </div>
                                <p className="product-name">{item.name}</p>
                            </div>)
                        : null
                }

            </div>
        </div>
    )
}

export default Stories
