import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

const TableForm = ({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList, total, setTotal}) => {

    const [isEditing, setIsEditing] = useState(false)

    //submit form function
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!description || !quantity ||!price) {
            alert("Please fill in all inputs")
        }
        else {

            const newItems = {
                //in es6 (javascript) if you try to access the value that has name same as the key, you can just remove first item
                id: uuidv4(), 
                // description: description, this can be written as 
                description,
                // and same for remaining
                quantity,
                price,
                amount
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems]) //...list => get all the item already in the list and add newitems, if not then add new items 
            setIsEditing(false)
        }

    }
    //calculate amount function
   useEffect(() => {
    const calculateAmount = (amount) => {
        setAmount(quantity * price)
    }
    calculateAmount(amount)
   }, [amount, price, quantity, setAmount])

   useEffect(() => {
       //calculate total amount of item in table
    let rows = document.querySelectorAll(".amount")  
    //only select the value on Amount
   let sum = 0

   for(let i=0; i < rows.length; i++){
       if (rows[i].className === "amount") {
           sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
           setTotal(sum)
       }
   }
   })

   //Edit function
   const editRow = (id) => {
       const editingRow = list.find((row) => row.id === id)
       setList(list.filter((row) => row.id !== id))
       setIsEditing(true)
       setDescription(editingRow.description)
       setQuantity(editingRow.quantity)
       setPrice(editingRow.price)
   }

   //Delete Function

   const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
            <label htmlFor="description">Item Description</label>
            <input 
            type="text" 
            name="description" 
            id="description" placeholder="Descriptiom" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input 
            type="text" 
            name="quantity" 
            id="quantity" placeholder="Quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div className="flex flex-col">
            <label htmlFor="quantity">Price</label>
            <input 
            type="text" 
            name="price" 
            id="price" placeholder="Price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="flex flex-col">
            <label htmlFor="quantity">Amount</label>
            <p>{amount}</p>
            </div>
            </div>
            <button type="submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                {isEditing ? "Edit Item" : "Add Item"}
            </button>
        </form>

        {/* Table Items  */}
                <table width="100%" className="mb-10">
        
           <thead>
                <tr className="bg-gray-100 p-1">
                   <td className="font-bold">Description</td>
                   <td className="font-bold">Quantity</td>
                   <td className="font-bold">Price</td>
                   <td className="font-bold">Amount</td>
                </tr>
           </thead>
            {list.map(({id, description, quantity, price, amount}) => (
           <React.Fragment key={id}>

           <tbody>
                <tr>
                   <td>{description}</td>
                   <td>{quantity}</td>
                   <td>{price}</td>
                   <td className="amount">{amount}</td>
                   <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td>
                   <td><button onClick={() => editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl" /></button></td>
                </tr>
           </tbody>
           </React.Fragment>
            ))}
        
       </table>
       <div>
           <h2 className="flex items-end justify-end text-gray-800 text-4l font-bold"> NPR.{total.toLocaleString()}</h2>
       </div>
        </>
    )
}

export default TableForm
