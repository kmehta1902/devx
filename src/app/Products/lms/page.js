'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'

export default function Home() {

    return (
        <div>

            <main>
                <Navbar />
                <SplashCursor />

                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}
