import React from "react";
import { Link } from "react-router-dom";

function ListBooksPage() {
    return (
        <div>
            <div className="card shadow mt-2 mb-2">
                <div className="card-header">
                    <h2 className="PageTitle">Books List</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to="/books" className="btn btn-primary shadow">Add</Link>
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

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default ListBooksPage;
