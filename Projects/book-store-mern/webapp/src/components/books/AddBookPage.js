import React from "react";
import { Link } from "react-router-dom";


function AddBookPage() {
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
                            <input type="text" formControlName="title" className="form-control element ml-4" maxlength="100" />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Author: </label>
                            <input type="text" formControlName="author" className="form-control element ml-4" maxlength="100" />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Published: </label>
                            <input type="date" formControlName="dateOfPublish" className="form-control element ml-4" />
                        </div>

                        <div className="form-group divflex labelAndTextbox">
                            <label className="element col-md-2">Language: </label>
                            <input type="text" formControlName="language" className="form-control element ml-4" maxlength="100" />
                        </div>

                    </form>
                    <Link className="btn btn-primary btn-sm ml-2 shadow mr-2">
                        <i className="fa fa-save fa-fw" aria-hidden="true"></i> Save</Link>
                    <Link to="/list-books" className="btn btn-info btn-sm ml-2 shadow">
                        <i className="fa fa-list" aria-hidden="true"></i> Books List</Link>

                </div>
            </div>
        </div>
    );
}

export default AddBookPage;