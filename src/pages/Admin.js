import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import  {AmplifyAuthenticator,AmplifySignOut}  from '@aws-amplify/ui-react'
import {createVenta } from '../graphql/mutations'
import config from '../aws-exports'


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = () => {
    const [image, setImage] = useState(null);
    const [ventaDetails, setJollaDetails] = useState({ name: "", description: "", image: "", categoria: "", price: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!setJollaDetails.title || !setJollaDetails.price) return
            await API.graphql(graphqlOperation(createVenta, { input: ventaDetails }))
            setJollaDetails({ name: "", description: "", image: "", categoria: "", price: "" })
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setJollaDetails({ ...ventaDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="admin-wrapper">
            <AmplifyAuthenticator>
                <section>
                    <header className="form-header">
                        <h3>Add New Jolla</h3>
                        <AmplifySignOut></AmplifySignOut>
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="title">Title</label></p>
                                <p><input
                                    name="email"
                                    type="title"
                                    placeholder="Type the title"
                                    onChange={(e) => setJollaDetails({ ...ventaDetails, title: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type the description of the book"
                                    onChange={(e) => setJollaDetails({ ...ventaDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="author-form">
                                <p><label htmlFor="author">Author</label></p>
                                <p><input
                                    name="author"
                                    type="text"
                                    placeholder="Type the author's name"
                                    onChange={(e) => setJollaDetails({ ...ventaDetails, author: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of the book (USD)"
                                        onChange={(e) => setJollaDetails({ ...ventaDetails, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="featured-form">
                                <p><label>Featured?</label>
                                    <input type="checkbox"
                                        className="featured-checkbox"
                                        checked={ventaDetails.featured}
                                        onChange={() => setJollaDetails({ ...ventaDetails, featured: !ventaDetails.featured })}
                                    />
                                </p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Admin
