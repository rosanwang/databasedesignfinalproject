import BookList from "./book/book-list";
import AuthorList from "./author/author-list";
import BookEditorForm from "./book/book-editor-form";
import AuthorEditorForm from "./author/author-editor-form";
import UserList from "./users/users/user-list"
import UserEditorForm from "./users/users/user-form-editor"
import AuthorAllList from "./author/author-list-all";
import BookListAll from "./book/book-list-all";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path={["/author", "/"]} exact={true}>
                    <AuthorAllList/>
                </Route>
                <Route path={["/book", "/"]} exact={true}>
                    <BookListAll/>
                </Route>
                <Route path="/users/:userId" exact={true}>
                    <UserEditorForm/>
                </Route>
                <Route path="/book" exact={true}>
                    <BookList/>
                </Route>
                <Route path="/users/:userId/book" exact={true}>
                    <BookList/>
                </Route>
                <Route path="/book/:id" exact={true}>
                    <BookEditorForm/>
                </Route>
                <Route path="/book/:bookId/author" exact={true}>
                    <AuthorList/>
                </Route>
                <Route path="/author/:authorId" exact={true}>
                    <AuthorEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
