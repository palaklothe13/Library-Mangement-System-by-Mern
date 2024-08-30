import {useState} from "react";
import axios from 'axios';

export default function AddStudent()
{
    const [_id,set_id]=useState("");
    const [name,setName]=useState("");
    const [deptName,setDeptName]=useState("");
    const [formData,setFormData]=useState("");
    const [resp,setResp]=useState([]);
    async function addStudent()
    {
        var json2={_id:_id, name:name, deptName:deptName};
        var response=await axios.post("http://localhost:4000/api/students",json2);
        var data=await response.data;
        setResp(data);
        setFormData(json2);

    }
    return(<>
    <table>
    <tr><td>Enrollment </td><td><input onChange={(e)=> set_id(e.target.value)} /> </td></tr>
    <tr><td>Name </td><td><input onChange={(e)=> setName(e.target.value)} /> </td></tr>
    <tr><td>Dept </td><td><input onChange={(e)=> setDeptName(e.target.value)} /> </td></tr>
    <tr><td></td><td><button onClick={addStudent}>Add Student</button></td></tr>
    </table>
    {FormData? JSON.stringify(formData):""} <br />
    {JSON.stringify(resp)}
     </>);
}