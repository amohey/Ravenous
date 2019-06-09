// Author: Ahmed Mohey
// Project: ravenous
// Date: 07/06/2019
const apiKey = '7DYQoYUTwlnJsrDMuAxNR4htQU8Gcy_dq0TQo8CUU8gRU-SRjmd7zHLFnMJe3SqoUCZ0IKE8Dx9lPgNpwzVGOyxA-2SyUUtYL-BBai_S1z21gvBig4DEkEp376P6XHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
            , {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                    return response.json()
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if(jsonResponse.error){
                throw new Error(JSON.stringify(jsonResponse.error))
            }
            else if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count


                            }
                        }
                    )
                }
            }
        ).catch(errors => {
            //console.log(errors);
            return errors;
            })
    }

};
export default Yelp