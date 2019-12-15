const fetchSpells = (url) => fetch( url ).then(response => response.json());

export {fetchSpells}