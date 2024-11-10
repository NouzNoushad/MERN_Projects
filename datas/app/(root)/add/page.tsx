'use client'

import { addProductAction } from '@/app/actions/addProduct';
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

export default function AddProduct() {
    const [name, setName] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleAddProduct = async () => {
        try {
            await addProductAction({ name, brand, price: parseFloat(price) || 0, description }).then(() => {
                setName("")
                setBrand("")
                setPrice("")
                setDescription("")
                redirect('/')
            })
        } catch (error) {
            console.log(`Error adding product: ${error}`)
        }
    }

    return (
        <section className='py-[5rem]'>
            <div className="max-w-[600px] mx-auto px-5 xl:px-0">
                <div className="border-4 border-green-300 rounded-md py-10 px-5 bg-green-50 space-y-3">
                    <input type="text" placeholder='Name' className='w-full px-5 py-3 rounded-md border border-green-300 outline-green-300' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Brand' className='w-full px-5 py-3 rounded-md border border-green-300 outline-green-300' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type="number" placeholder='Price' className='w-full px-5 py-3 rounded-md border border-green-300 outline-green-300' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <textarea rows={4} placeholder='Description' className='w-full px-5 py-3 rounded-md border border-green-300 outline-green-300' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className="flex md:justify-end justify-center">
                        <button onClick={handleAddProduct} className='border border-green-300 text-green-300 uppercase font-bold text-[0.9rem] px-10 py-3 rounded-md transition-all duration-500 hover:bg-green-300 hover:text-white'>Add Product</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
