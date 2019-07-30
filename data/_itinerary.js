export const itinerary = {
    id: 'newyork-architecture-conference',
    name: 'Calgary Tech Conference',
    startDate: 'Jul 25 ᛫ 08:30',
    endDate: 'Jul 29 ᛫ 08:30',
    origin: 'Toronto, ON',
    destination: 'Calgary, AB',
    total: 976,
    sections: [
            {
                key: 'flight',
                icon: 'plane',
                description: 'Return, 1 person',
                price: 650,
                filters: ['Airlines', 'Stops', 'Time in', 'Time out'],
                options: [
                    {
                        outboud: {
                            departure: 'Jul 24 2019 20:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 22:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: [
                                {
        
                                }
                            ],
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        },
                        inbound: {
                            departure: 'Jul 29 2019 19:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 21:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: null,
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        }
                    },
                    {
                        outboud: {
                            departure: 'Jul 24 2019 20:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 22:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: [
                                {
        
                                }
                            ],
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        },
                        inbound: {
                            departure: 'Jul 29 2019 19:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 21:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: null,
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        }
                    },
                    {
                        outboud: {
                            departure: 'Jul 24 2019 20:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 22:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: [
                                {
        
                                }
                            ],
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        },
                        inbound: {
                            departure: 'Jul 29 2019 19:00:00 GMT-0600 (Central Standard Time)',
                            arrival: 'Jul 24 2019 21:12:00 GMT-0600 (Central Standard Time)',
                            origin: 'YYZ',
                            destination: 'YYC',
                            stops: null,
                            length: '4h 12m',
                            airline: 'Westjet',
                            price: '163'
                        }
                    }
                ]
            },   
        { 
            key: 'hotel',
            icon: 'hotel',
            description: '2 nights, 1 room',
            price: 326,
            filters: ['Name', 'Price', 'Type', 'Location'],
            options: [
                {
                    name: 'Alt Hotel Calgary East Village',
                    image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/d0/a2/1d/exterior-of-the-hotel.jpg'

                },
                {
                    name: 'Alt Hotel Calgary East Village',
                    image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/d0/a2/1d/exterior-of-the-hotel.jpg'

                },
                {
                    name: 'Alt Hotel Calgary East Village',
                    image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/d0/a2/1d/exterior-of-the-hotel.jpg'

                }
            ],
        },
        {
            key: 'car',
            icon: 'car',
            description: '2 Days',
            price: 129,
            filters: ['Supplier', 'Price', 'Type', 'Pick up', 'Drop off'],
            options: [
                {
                    name: 'Kia Rio',
                    type: 'Economy',
                    seats: 4,
                    luggage: {
                        large: 1,
                        small: 1
                    },
                    rating: 8.7,
                    pickUp: 'In Terminal',
                    price: 44,
                    company: 'enterprise',
                    image: 'https://media.wired.com/photos/5933335ed80dd005b42b15f2/master/w_582,c_limit/Kia-Rio-1.jpg'
                },
                {
                    name: 'Honda Fit',
                    type: 'Economy',
                    seats: 4,
                    luggage: {
                        large: 1,
                        small: 1
                    },
                    rating: 8.7,
                    pickUp: 'In Terminal',
                    price: 44,
                    company: 'enterprise',
                    image: 'https://images.autotrader.com/scaler/620/420/cms/images/cars/honda/fit/2015/2015hondafitvs2015kiario/239940.jpg'
                },
                {
                    name: 'Honda Fit',
                    type: 'Economy',
                    seats: 4,
                    luggage: {
                        large: 1,
                        small: 1
                    },
                    rating: 8.7,
                    pickUp: 'In Terminal',
                    price: 44,
                    company: 'enterprise',
                    image: 'https://images.autotrader.com/scaler/620/420/cms/images/cars/honda/fit/2015/2015hondafitvs2015kiario/239940.jpg'
                }
            ]

        }
    ]
};