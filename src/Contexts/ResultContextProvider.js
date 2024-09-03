import React, { createContext, useContext, useState } from 'react';

const resultContext = createContext();
const baseUrl = 'https://api.github.com/search/repositories?q=';