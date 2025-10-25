/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //* projemize bir plugin dahil etmek istiyorsak config dosyasına eklememiz gerekir
  // content: ["./node_modules/flowbite/**/*.js"],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.

    extend: {
      colors: {
        pembe: "#FFAAAA",
        pembe_hover: "#FF9898",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "#17275c",
        },
      },
    },
  },

  plugins: [],
};
