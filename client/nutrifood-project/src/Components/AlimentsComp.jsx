import React, { useState, useEffect } from 'react';
import { Search, Plus, ArrowLeft } from 'lucide-react';

const AlimentsComp = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [addingFoodId, setAddingFoodId] = useState(null);

  // Mock user ID - replace with actual user ID from your auth system
  const userId = 1; // You'll get this from your authentication context/localStorage

  // Fetch all foods on component mount
  useEffect(() => {
    fetchFoods();
  }, []);

  // Fetch foods from your API
  const fetchFoods = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8081/foods');
      if (response.ok) {
        const data = await response.json();
        setFoods(data);
      } else {
        console.error('Error fetching foods');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Search foods
  const searchFoods = async (term) => {
    if (!term.trim()) {
      fetchFoods();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8081/foods/search/${encodeURIComponent(term)}`);
      if (response.ok) {
        const data = await response.json();
        setFoods(data);
      }
    } catch (error) {
      console.error('Error searching foods:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Debounce search
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      searchFoods(value);
    }, 300);
  };

  // Handle quantity change
  const handleQuantityChange = (foodId, quantity) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [foodId]: quantity
    }));
  };

  // Add food to daily intake
  const addFoodToIntake = async (foodId) => {
    const quantity = selectedQuantities[foodId] || 100; // Default 100g
    
    setAddingFoodId(foodId);
    try {
      const response = await fetch('http://localhost:8081/add-food-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          utilisateur_id: userId,
          aliment_id: foodId,
          quantite: quantity,
          date_consommation: new Date().toISOString().split('T')[0]
        })
      });

      if (response.ok) {
        // Success feedback - you could add a toast notification here
        alert('Food added successfully!');
        
        // Reset quantity for this food
        setSelectedQuantities(prev => ({
          ...prev,
          [foodId]: 100
        }));
      } else {
        alert('Error adding food');
      }
    } catch (error) {
      console.error('Error adding food:', error);
      alert('Error adding food');
    } finally {
      setAddingFoodId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center p-4">
          <button className="mr-3">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Add Food</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search foods..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="p-4 bg-white border-b">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
            All Foods
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            Favorites
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            Recent
          </button>
        </div>
      </div>

      {/* Food List */}
      <div className="p-4 pb-24">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {foods.map((food) => (
              <div key={food.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  {/* Food Info */}
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={food.image_url || '/api/placeholder/48/48'}
                        alt={food.nom}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/48/48';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{food.nom}</h3>
                      <p className="text-sm text-gray-500">
                        {food.calories} calories | per 100g
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-400">P: {food.proteines}g</span>
                        <span className="text-xs text-gray-400">C: {food.glucides}g</span>
                        <span className="text-xs text-gray-400">F: {food.lipides}g</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Input and Add Button */}
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="1"
                        value={selectedQuantities[food.id] || 100}
                        onChange={(e) => handleQuantityChange(food.id, parseInt(e.target.value) || 100)}
                        className="w-16 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      <span className="text-xs text-gray-500">g</span>
                    </div>
                    
                    <button
                      onClick={() => addFoodToIntake(food.id)}
                      disabled={addingFoodId === food.id}
                      className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                    >
                      {addingFoodId === food.id ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && foods.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Search className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No foods found</h3>
            <p className="text-gray-500">
              {searchTerm ? 'Try a different search term' : 'No foods available in database'}
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AlimentsComp;