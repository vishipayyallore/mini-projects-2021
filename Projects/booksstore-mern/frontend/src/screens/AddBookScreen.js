import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { saveBook } from "../services/booksService";

function AddBookScreen() {

    let history = useHistory();
    
    const [book, setBook] = useState({
        pictureUrl: "/images/books/Book1.jpg",
        title: "C# 1E",
        author: "George Reddy",
        language: "English",
        dateOfPublish: (new Date()).toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " "),
        isbn: "A101",
        pages: 202,
        isActive: true
    });
    
    // const [checked, setChecked] = React.useState(true);
    const [checked, setChecked] = React.useState(true);

    const generateNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    function handleAddBookSubmit(event) {
        event.preventDefault();

        book.pictureUrl = `/images/books/Book${generateNumber(1, 10)}.jpg`;
        book.isActive = checked;

        saveBook(book)
            .then(_ => {
                history.push('/list-books');
                toast.success("Book saved.");
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
                <h2 className="PageTitle">Add Book</h2>
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
                            <input type="text" name="language" className="form-control element formfield-marginbottom" maxLength="100"
                                onChange={handleFormChange} value={book.isbn} />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Pages: </label>
                            <input type="number" name="language" className="form-control element formfield-marginbottom" maxLength="100"
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
                                onChange={handleFormChange} pattern="\d{4}-\d{2}-\d{2}" value={book.dateOfPublish} />
                        </div>

                    </form>
                    <Link to="" onClick={handleAddBookSubmit} type="submit" className="btn btn-primary btn-sm ml-2 shadow" title="Save Book">
                        <i className="fa fa-save fa-2x" aria-hidden="true"></i></Link>
                    <Link to="/list-books" className="btn btn-maincolor btn-sm ml-2 shadow button-marginleft" title="Books List">
                        <i className="fa fa-list fa-2x" aria-hidden="true"></i></Link>

                </div>
            </div>
        </div>
    );
}

export default AddBookScreen;