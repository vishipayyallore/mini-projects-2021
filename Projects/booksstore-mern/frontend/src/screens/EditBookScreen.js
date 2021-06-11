import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { editBook, getBookById } from "../services/booksService";

function EditBookScreen({ match }) {

    let history = useHistory();

    const [book, setBook] = useState({
        _id: "",
        pictureUrl: "/images/books/Book1.jpg",
        title: "C# 1E",
        author: "George Reddy",
        language: "English",
        dateOfPublish: (new Date()).toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " "),
        isbn: "A101",
        pages: 202,
        isActive: true
    });

    const [checked, setChecked] = React.useState();

    useEffect(() => {
        getBookById(match.params.id)
            .then(_book => {
                setChecked(book.isActive);
                setBook(_book);
            });
    }, [match.params.id, book.isActive]);

    function handleEditBookSubmit(event) {
        event.preventDefault();

        book.isActive = checked;
        editBook(book)
            .then(_ => {
                history.push('/list-books');
                toast.success("Book Updated.");
            })
            .catch(_ => {
                toast.error("Error saving book");
            });
    }

    function handleFormChange({ target }) {
        setBook({
            ...book,
            [target.name]: target.value
        });
    }

    return (
        <div className="card shadow mt-2 mb-2">
            <div className="card-header">
                <h2 className="PageTitle">Edit Book</h2>
            </div>
            <div className="card-body">
                <div className="col-md-8 mb-4">

                    <form>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Title : </label>
                            <input type="text" name="title" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.title} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Author: </label>
                            <input type="text" name="author" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.author} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Language: </label>
                            <input type="text" name="language" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.language} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">ISBN: </label>
                            <input type="text" name="isbn" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.isbn} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Pages: </label>
                            <input type="number" name="pages" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.pages} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Is Active : </label>
                            <label>
                                <input type="checkbox"
                                    defaultChecked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                            </label>
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Published: </label>
                            <input type="date" name="dateOfPublish" className="form-control element formfield-marginbottom"
                                onChange={handleFormChange} value={new Date(book.dateOfPublish).toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " ")} />
                        </div>


                    </form>
                    <Link to="" onClick={handleEditBookSubmit} type="submit" className="btn btn-warning btn-sm text-white shadow" title="Update Book">
                        <i className="fa fa-save fa-2x" aria-hidden="true"></i></Link>
                    <Link to="/list-books" className="btn btn-maincolor btn-sm ml-2 shadow button-marginleft" title="Books List">
                        <i className="fa fa-list fa-2x" aria-hidden="true"></i></Link>

                </div>
            </div>
        </div>
    );
}

export default EditBookScreen;