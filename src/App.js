import React, { useState, useRef } from 'react';
import ClientDetails from './Components/ClientDetails';
import Dates from './Components/Dates';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainDetails from './Components/MainDetails';
import Notes from './Components/Notes';
import Table from './Components/Table';
import TableForm from './Components/TableForm';
import ReactToPrint from "react-to-print";

function App() {

    const [showInvoice, setShowInvoice] = useState(false)

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [website, setWebsite] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")

    const [list, setList] = useState([])

    const [total, setTotal] = useState(0)

    const componentRef = useRef()

    const handlePrint = () => {
      window.print()
    }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">

      

        {showInvoice ? (
              <>
              <ReactToPrint trigger={() => <button className=" bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print / Download</button>} 
        content ={() => componentRef.current}
      />

              <div className="p-5" ref={componentRef}>
          <Header  handlePrint={handlePrint}/>

          <MainDetails name={name} address={address}/>

          <ClientDetails clientName={clientName} clientAddress={clientAddress} />

          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>

          <Table description={description}
          quantity={quantity}
          price={price}
          amount={amount}
          list={list}
          setList={setList}
          total={total}
          setTotal={setTotal}
           />

          <Notes notes={notes} />

          <Footer name={name} 
          address={address} 
          website={website} 
          email={email} 
          phone={phone} 
          bankAccount={bankAccount} 
          bankName={bankName}
          />
        </div> 
        <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
              </>
        ) : (
          <>
          <div className="flex flex-col justify-center">
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="name">Your Full Name</label>
          <input 
              type="text" 
              name="text" 
              id="name" 
              placeholder="Full Name " 
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
        />
          </div>
          <div className="flex flex-col">
          <label htmlFor="address">Enter your Address</label>
          <input 
              type="text" 
              name="address" 
              id="address" 
              placeholder="Enter your name " 
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
        />
          </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
          <label htmlFor="email">Enter your email</label>
          <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email " 
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="website">Enter your website</label>
          <input 
              type="url" 
              name="website" 
              id="website" 
              placeholder="Enter your website " 
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="phone">Enter your phone</label>
          <input 
              type="text" 
              name="phone" 
              id="phone" 
              placeholder="Enter your phone " 
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          </article>

          <article className="md:grid grid-cols-2 gap-10"> 

          <div className="flex flex-col">
          <label htmlFor="bankName">Enter your Bank Name</label>
          <input 
              type="text" 
              name="bankName" 
              id="bankName" 
              placeholder="Enter your Bank Name" 
              autoComplete="off"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="bankAccount">Enter your Bank Account Number</label>
          <input 
              type="text" 
              name="bankAccount" 
              id="bankAccount" 
              placeholder="Enter your Bank Account Number" 
              autoComplete="off"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
          />
          </div>

          </article>


          <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
          <label htmlFor="clientName">Enter Client Name</label>
          <input 
              type="text" 
              name="clientName" 
              id="clientName" 
              placeholder="Enter Client Name" 
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
          />
          </div>

          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter Client Address</label>
          <input 
              type="text" 
              name="clientAddress" 
              id="clientAddress" 
              placeholder="Enter your Client Address" 
              autoComplete="off"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
          />
          </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10 ">
           <div className="flex flex-col">
           <label htmlFor="invoiceNumber">Invoice Number</label>
          <input 
              type="text" 
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder="Invoice Number" 
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
          />
           </div>

          <div className="flex flex-col">
          <label htmlFor="invoiceDate">Invoice date</label>
          <input 
              type="date" 
              name="invoiceDate" 
              id="invoiceDate" 
              placeholder="Invoice date" 
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
          <label htmlFor="dueDate">Due date</label>
          <input 
              type="date" 
              name="dueDate" 
              id="dueDate" 
              placeholder="Due date" 
              autoComplete="off"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
          />
          </div>
          </article>

          
          {/* This is our table form  */}
          <article>
            <TableForm description={description} setDescription={setDescription} 
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
          </article>

        <label htmlFor="notes">Additional Notes</label>
        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>



          <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )}

      </main>
    </>
  );
}

export default App;
