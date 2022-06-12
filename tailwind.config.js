module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0.4': '0.8px'
      },
      fontFamily: {
        sans: ['Open Sans']
      },
      backgroundImage: {
        'hero': "url('/src/images/ptnship.jpg')",
        'partner': "url('https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"
      }
    },
  },
  plugins: [],
}