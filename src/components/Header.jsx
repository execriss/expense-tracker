const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl shadow-lg mb-6 overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="text-indigo-300">Control</span> de Gastos
          </h1>
          <div className="h-1 w-20 bg-indigo-400 rounded-full mb-3"></div>
          <p className="text-center text-gray-200 text-sm sm:text-base max-w-md">
            Administra tus ingresos y gastos de manera sencilla y efectiva
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
