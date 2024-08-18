
function OrderSummary() {
    return (
        <div className="mx-auto mt-10 justify-end flex space-y-6 lg:w-full">
            <div className="space-y-4 rounded-lg border w-full border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:w-1/4">
                <p className="text-xl font-semibold text-gray-900">Resumen del pedido</p>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                            <dd className="text-base font-medium text-gray-900">$200.00</dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">Oferta</dt>
                            <dd className="text-base font-medium text-green-600">-$00.00</dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">Envio</dt>
                            <dd className="text-base font-medium text-gray-900">$99.00</dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500">IVA 16%</dt>
                            <dd className="text-base font-medium text-gray-900">$32.00</dd>
                        </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                        <dt className="text-base font-bold text-gray-900">Total</dt>
                        <dd className="text-base font-bold text-gray-900">$331.00</dd>
                    </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-[#2A2828] px-5 py-2.5 border text-sm font-medium text-white hover:bg-primary-100 focus:ring-4 focus:ring-primary-300">
                    Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500"> or </span>
                    <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
                        Seguir comprando
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary