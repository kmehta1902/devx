'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Blog from '../components/Product/Product';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const QuoteForms = () => {
    


    return (
        <div>

            <Navbar />
            <QuoteForm />
            <Blog />


            



            

            <Footer />
        </div>

    );
}
export default QuoteForms