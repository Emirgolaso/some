import React, { useState } from 'react';

const ModalWindow = ({ onSubmit }) => {
  const [farm, setFarm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFarm({ ...farm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!farm.email || !farm.phone || !farm.name) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit(farm);
    setFarm({ name: '', email: '', phone: '' });
  };

  const isFormValid = farm.email && farm.phone && farm.name;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={farm.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={farm.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="name"
          name="name"
          value={farm.name}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isFormValid}>
          сохранить
        </button>
      </form>
    </div>
  );
};

export default ModalWindow;
