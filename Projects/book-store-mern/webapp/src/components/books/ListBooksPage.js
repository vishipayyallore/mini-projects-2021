import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllBooks } from "../../services/booksService";

function ListBooksPage() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (books.length === 0) {
            getAllBooks()
                .then(_books => setBooks(_books));
        }
    }, [books.length]);

    return (
        <div>
            <div className="card shadow mt-2 mb-2">
                <div className="card-header">
                    <h2 className="PageTitle">Books List</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to="/books" className="btn btn-primary shadow mb-2"><i class="fa fa-plus-circle fa-fw" aria-hidden="true"></i> Add</Link>
                    </div>
                    <table className='table table-striped table-bordered' aria-labelledby="tableLabel">
                        <thead className="thead-dark">
                            <tr>
                                <th>Book ID</th>
                                <th>Published On</th>
                                <th>Language</th>
                                <th>Author</th>
                                <th>Title</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(book => {
                                    return (
                                        <tr key={book._id}>
                                            <td>{book._id}</td>
                                            <td>{book.dateOfPublish}</td>
                                            <td>{book.language}</td>
                                            <td>{book.author}</td>
                                            <td>{book.title}</td>
                                            <th scope="col">
                                            <Link to="/edit-book" className="btn btn-success shadow mr-2">
                                            <i class="fa fa-edit fa-fw" aria-hidden="true"></i> Edit</Link>
                                            <Link to="/delete-book" className="btn btn-danger shadow">
                                            <i class="fa fa-trash" aria-hidden="true"></i> Delete</Link>
                                            </th>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default ListBooksPage;
