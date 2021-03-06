import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

import { getAllBooks } from "../services/booksService";

function ListBooksScreen() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (books.length === 0) {
            getAllBooks()
                .then(_books => {
                    setBooks(_books);
                    setLoading(false);
                });
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
                        <a href="/add-book" className="float" title="Add Book">
                            <i className="fa fa-plus float-margintop"></i>
                        </a>
                    </div>
                    <div className="sweet-loading d-flex justify-content-center">
                        <ClockLoader
                            size={150}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                    <br></br>
                    <table className='table table-striped table-bordered shadow' hidden={loading} aria-labelledby="tableLabel">
                        <thead className="thead-dark">
                            <tr>
                                <th>Book ID</th>
                                <th>Picture</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Language</th>
                                <th>ISBN</th>
                                <th>Pages</th>
                                <th>Active</th>
                                <th>Published</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(book => {
                                    return (
                                        <tr key={book._id}>
                                            <td>{book._id}</td>
                                            <td><img className="rounded-circle" src={book.pictureUrl} width="50px" alt="Book" /></td>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.language}</td>
                                            <td>{book.isbn}</td>
                                            <td>{book.pages}</td>
                                            <td>
                                                {book.isActive ? (
                                                    <i className="fa fa-thumbs-up fa-2x" style={{ color: 'green' }}></i>
                                                ) : (
                                                    <i className='fas fa-thumbs-down fa-2x' style={{ color: 'red' }}></i>
                                                )}
                                            </td>
                                            <td>{book.dateOfPublish}</td>
                                            <th scope="col">
                                                <Link to={"/edit-book/" + book._id} className="btn btn-warning btn-sm ml-2 shadow text-white" title="Edit Book">
                                                    <i className="fa fa-edit fa-2x" aria-hidden="true"></i></Link>
                                                <Link to={"/delete-book/" + book._id} className="btn btn-danger btn-sm shadow button-marginleft" title="Delete Book">
                                                    <i className="fa fa-trash fa-2x" aria-hidden="true"></i></Link>
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

export default ListBooksScreen;
