import React, { useState } from 'react';

const Faq = () => {
    const myArray = [
        { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga? Temporibus voluptate saepe iure vitae ipsum. Animi incidunt architecto veniam sit delectus alias enim optio labore, quidem sapiente dignissimos impedit reprehenderit deleniti nihil, odit fuga? Ullam, vitae! In nihil repellendus perspiciatis hic, incidunt quisquam. Aperiam amet quibusdam voluptatum? Vero, facilis optio placeat sint animi quis nihil cumque vitae quidem tempore!', isActive: false },
        { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga? Temporibus voluptate saepe iure vitae ipsum. Animi incidunt architecto veniam sit delectus alias enim optio labore, quidem sapiente dignissimos impedit reprehenderit deleniti nihil, odit fuga? Ullam, vitae! In nihil repellendus perspiciatis hic, incidunt quisquam. Aperiam amet quibusdam voluptatum? Vero, facilis optio placeat sint animi quis nihil cumque vitae quidem tempore!', isActive: false },
        { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga? Temporibus voluptate saepe iure vitae ipsum. Animi incidunt architecto veniam sit delectus alias enim optio labore, quidem sapiente dignissimos impedit reprehenderit deleniti nihil, odit fuga? Ullam, vitae! In nihil repellendus perspiciatis hic, incidunt quisquam. Aperiam amet quibusdam voluptatum? Vero, facilis optio placeat sint animi quis nihil cumque vitae quidem tempore!', isActive: false },
    ];

    const [items, setItems] = useState(myArray);

    const handleClick = (ind) => {
        let tem = [...items];
        tem[ind].isActive = !tem[ind].isActive;
        setItems(tem);
    }

    return (
        <div class="p-5 py-16">
            <div class="max-w-screen-xl mx-auto">
                <h3 class="text-xl font-medium mb-4">FAQ's</h3>

                {/* Button wrapper */}
                <div>
                    {
                        items.map((item, index) =>
                            <>
                                <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md my-4">
                                    <button class="flex gap-5 font-medium" onClick={() => handleClick(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        How can I do this?
                                    </button>
                                </div>

                                {
                                    item.isActive ? <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md mt-4 flex gap-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-gray-600"> {item.title} </p>
                                        </div>
                                    </div> : null
                                }
                            </>
                        )
                    }

                    {/* <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md my-4">
                        <button class="flex gap-5 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            How can I do this?
                        </button>
                    </div> */}
                    {/* Answer */}
                    {/* <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md mt-4 flex gap-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga? Temporibus voluptate saepe iure vitae ipsum. Animi incidunt architecto veniam sit delectus alias enim optio labore, quidem sapiente dignissimos impedit reprehenderit deleniti nihil, odit fuga? Ullam, vitae! In nihil repellendus perspiciatis hic, incidunt quisquam. Aperiam amet quibusdam voluptatum? Vero, facilis optio placeat sint animi quis nihil cumque vitae quidem tempore!</p>
                        </div>
                    </div>

                    <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md mt-4">
                        <button class="flex gap-5 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            How can I do this?
                        </button>
                    </div> */}
                    {/* Answer */}
                    {/* <div class="bg-gray-200 p-3 shadow-md cursor-pointer rounded-md mt-4 flex gap-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-indigo-600 rounded-full text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga? Temporibus voluptate saepe iure vitae ipsum. Animi incidunt architecto veniam sit delectus alias enim optio labore, quidem sapiente dignissimos impedit reprehenderit deleniti nihil, odit fuga? Ullam, vitae! In nihil repellendus perspiciatis hic, incidunt quisquam. Aperiam amet quibusdam voluptatum? Vero, facilis optio placeat sint animi quis nihil cumque vitae quidem tempore!</p>
                        </div>
                    </div> */}
                </div>

                {/* Extra answer */}
                <div class="pt-10">
                    <h5 class="py-5 font-medium">How do I get this done?</h5>
                    <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo repellat adipisci quos ipsam iusto laudantium incidunt quam quis doloribus ea provident labore at rem dolorem quidem possimus natus nihil fuga consequatur sit quae accusantium, dolorum animi. Sunt odit accusamus sed vel temporibus quam cupiditate dolorem optio placeat provident a natus ullam sapiente nisi consequuntur nam, ea totam nostrum quo laborum maiores. Odit nihil fuga ratione iusto id! Quidem, provident.</p>
                    <p class="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias odit possimus illum minima! Nostrum corrupti maiores ut asperiores, repellendus excepturi sit rerum voluptate? Temporibus, quia impedit. Dignissimos provident dolorum sint numquam culpa quas nobis facilis? Voluptas corrupti qui dolores rerum sunt reprehenderit architecto quae, iure exercitationem a provident quam non ipsa dolor neque minima similique at eveniet earum? Ab, numquam labore laboriosam perferendis ullam molestias porro distinctio nesciunt vitae.</p>
                </div>
                <div>
                    <h5 class="py-5 font-medium">How do I get this done?</h5>
                    <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo repellat adipisci quos ipsam iusto laudantium incidunt quam quis doloribus ea provident labore at rem dolorem quidem possimus natus nihil fuga consequatur sit quae accusantium, dolorum animi. Sunt odit accusamus sed vel temporibus quam cupiditate dolorem optio placeat provident a natus ullam sapiente nisi consequuntur nam, ea totam nostrum quo laborum maiores. Odit nihil fuga ratione iusto id! Quidem, provident.</p>
                    <p class="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias odit possimus illum minima! Nostrum corrupti maiores ut asperiores, repellendus excepturi sit rerum voluptate? Temporibus, quia impedit. Dignissimos provident dolorum sint numquam culpa quas nobis facilis? Voluptas corrupti qui dolores rerum sunt reprehenderit architecto quae, iure exercitationem a provident quam non ipsa dolor neque minima similique at eveniet earum? Ab, numquam labore laboriosam perferendis ullam molestias porro distinctio nesciunt vitae.</p>
                </div>

            </div>
        </div>
    );
};

export default Faq;