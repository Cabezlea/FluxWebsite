import { useState } from 'react';
import { motion } from 'framer-motion';

const PricingCalculator = () => {
    const [items, setItems] = useState(100);
    const [storageDays, setStorageDays] = useState(14);
    const [cubicFeet, setCubicFeet] = useState(1);

    const calculateTotal = () => {
        const processingFee = items * 1.5;
        const storageFee = storageDays > 14 ?
            (storageDays - 14) * cubicFeet * 0.025 : 0;

        return processingFee + storageFee;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-morphism rounded-xl p-8 mt-8"
        >
            <h3 className="text-2xl font-bold mb-6">Accurate Pricing Calculator</h3>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2">Number of Items</label>
                        <input
                            type="number"
                            value={items}
                            onChange={(e) => setItems(Math.max(1, e.target.value))}
                            className="w-full bg-gray-900 rounded-lg p-3"
                            min="1"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Storage Days</label>
                        <input
                            type="number"
                            value={storageDays}
                            onChange={(e) => setStorageDays(Math.max(1, e.target.value))}
                            className="w-full bg-gray-900 rounded-lg p-3"
                            min="1"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Cubic Feet Required</label>
                        <input
                            type="number"
                            step="0.1"
                            value={cubicFeet}
                            onChange={(e) => setCubicFeet(Math.max(0.1, e.target.value))}
                            className="w-full bg-gray-900 rounded-lg p-3"
                            min="0.1"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Processing Fee ({items} items):</span>
                        <span>${(items * 1.5).toFixed(2)}</span>
                    </div>

                    {storageDays > 14 && (
                        <div className="flex justify-between text-blue-500">
              <span>
                Storage ({storageDays - 14} days × {cubicFeet}ft³:
              </span>
                            <span>
                ${((storageDays - 14) * cubicFeet * 0.025).toFixed(2)}
              </span>
                        </div>
                    )}

                    <div className="pt-4 border-t border-gray-700">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total Estimate:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="text-sm text-gray-400 mt-4">
                        * Shipping costs calculated separately based on carrier rates
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PricingCalculator;
