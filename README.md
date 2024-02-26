### React App Installation

```npx create-react-app expense-tracker```

## Installation of packages

1. Chakra UI, React Icons and React Apex Charts 

```npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons react-apexcharts```
   
### Components of Expense App

1. chart, main, summary, expense-view, add-transaction

### Chakra UI setup

1. create theme.js file inside the src folder
   
   ``` jsx
   import { extendTheme } from "@chakra-ui/react";

   const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: true
    })
    
    export default theme;
