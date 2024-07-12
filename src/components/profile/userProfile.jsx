import  { useState, useEffect } from 'react';
const userProfile = () => {
  const initialUserState = {
    firstName: 'Mostafa',
    lastName: 'Salah',

    hiredDate: '2023-03-03',
    birthDate: '1980-05-03',
    phone: '+1(213)555-4276',
    email: 'ameliah@dx-email.com',



    address: '405 E 42nd St',
    city: 'New York',
    state: 'New York',
    zip: '10017',
    country: 'USA'
  };

  const [user, setUser] = useState(initialUserState);
  const [editedUser, setEditedUser] = useState(initialUserState);
console.log(editedUser)
  useEffect(() => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setEditedUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem('userProfile', JSON.stringify(editedUser));
  };

  const handleCancel = () => {
    setEditedUser(user);
  };

  return (
  <div className="grapper py-5">
      <div className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded-lg ">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
            <p>ID: 22</p>
          </div>
        </div>
      
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Basic Info</h3>
          <div>
            <label className="block">First Name</label>
            <input type="text" name="firstName" value={editedUser.firstName} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block">Last Name</label>
            <input type="text" name="lastName" value={editedUser.lastName} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
      
          
          <div>
            <label className="block">Register Date</label>
            <input type="date" name="hiredDate" value={editedUser.hiredDate} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block">Birth Date</label>
            <input type="date" name="birthDate" value={editedUser.birthDate} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Contacts</h3>
          <div>
            <label className="block">Phone</label>
            <input type="tel" name="phone" value={editedUser.phone} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block">Email</label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
        
          
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Address</h3>
        <div>
          <label className="block">Street Address</label>
          <input type="text" name="address" value={editedUser.address} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block">City</label>
          <input type="text" name="city" value={editedUser.city} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block">State/Province</label>
          <input type="text" name="state" value={editedUser.state} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block">Zip Code</label>
          <input type="text" name="zip" value={editedUser.zip} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block">Country</label>
          <input type="text" name="country" value={editedUser.country} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        <button className="bg-sky-600 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>Save</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  </div>
  );
};

export default userProfile;
