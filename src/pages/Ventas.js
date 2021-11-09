import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { VentaContext } from '../context/ventas';


const Books = () => {
    const { jollas } = useContext(VentaContext);

    if (!jollas.length) {
        return <h3>No Books Available</h3>
    }

    return (
        <section className="books">
            {jollas.map(({ image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`jollas/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Books
