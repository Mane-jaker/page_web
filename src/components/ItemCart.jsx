import Image from "../assets/xiles.png";

function ItemCart() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
        {/* Imagen del producto */}
        <a href="#" className="shrink-0 md:order-1">
          <img className="h-52" src={Image} alt="image" />
        </a>

        {/* Control de cantidad y precio */}
        <div className="flex items-center justify-between w-full md:order-3 md:w-auto">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-4 w-4 text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h18"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="mx-2 w-12 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
              value="2"
              readOnly
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-4 w-4 text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 5v10M5 10h10"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center ml-4">
            <p className="text-base font-bold text-gray-900 dark:text-white">$200.00</p>
            <button
              type="button"
              className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              <svg
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Descripción del producto */}
        <div className="w-full mt-4 md:order-2 md:mt-0 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            Salsa de Xile Morita con cacahuate a base de aceite de oliva, 275g.
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
