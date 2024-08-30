import {Link } from "react-router-dom";
export default function Header()
{
    return (<> 
    <Link to = "/"> Home</Link>
    <Link to = "/addStudent"> Add Student</Link>
    <Link to = "/deleteStudent"> Delete Student </Link>
    <Link to = "/addBook "> Add Book </Link>
    <Link to = "/deleteBook"> Delete Book </Link>
    
    
    
    
    </>)
}