import BookList from "./book/book-list";
import AuthorList from "./author/author-list";
import BookEditorForm from "./book/book-editor-form";
import AuthorEditorForm from "./author/author-editor-form";
import UserList from "./users/users/user-list"
import UserEditorForm from "./users/users/user-form-editor"
import InlineUserEditor from "./users/users/inline-user-editor"

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
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
