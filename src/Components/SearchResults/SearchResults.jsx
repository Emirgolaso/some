import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');

  const { users } = useSelector((state) => state.users);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for: {searchTerm}</h2>
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
