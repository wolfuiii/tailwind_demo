import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App min-h-screen flex items-center justify-center bg-gray-700">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Tailwind Beispiele</h1>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="selectInput">
                            Auswahl
                        </label>
                        <select
                            id="selectInput"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="numberInput">
                            Zahlen Eingabe
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2" htmlFor="stringInput">
                            Text
                        </label>
                        <input
                            type="text"
                            id="stringInput"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
