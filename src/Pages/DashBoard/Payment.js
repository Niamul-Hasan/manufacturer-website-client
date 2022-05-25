import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPages/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L15MvFyWKttW5THW2IDhSzQ6S2zTeT7cAj9MhXA26k2SMEFePKkoBNzk6zwyl00Lb31BJINlRmht6NUKqt7xrJZ00tRECIiPR');

const Payment = () => {
    const { orderId } = useParams();
    const url = `http://localhost:4000/myorder/${orderId}`;

    const { data: myorder, isLoading } = useQuery(['order', orderId], () => fetch(url, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(myorder);
    return (
        <div>
            <h2 className='text-2xl text-cyan-800 mb-4'>Please Make Payment for: <span
                className='text-3xl text-red-500'
            >{orderId}</span></h2>
            <div class="card w-96 bg-base-300 shadow-xl">
                <div class="card-body">
                    <p className='text-teal-600 font-bold'>Hello, {myorder.customer}</p>
                    <h2 class="card-title">Please Pay For: <span className='text-orange-600'
                    >{myorder.product}</span></h2>

                    <p>Due Payment is : <span
                        className='text-2xl text-green-800'
                    >${myorder.duePrice}</span></p>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Payment Method : card</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myorder={myorder} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;