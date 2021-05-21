export {default as Header} from './Header';
export {default as UserPosts} from './UserPosts'
export {default as UserTodos} from './UserTodos';
 
const App = () =>{
    return (
        <Main username="joe" message="Hello, there!"/>
    )
}