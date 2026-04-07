function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  const icon = isDark ? 'light_mode' : 'dark_mode';
  const label = isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему';

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="p-2 rounded-full text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
    >
      <span className="material-symbols-outlined block text-[22px]">{icon}</span>
    </button>
  );
}

export default ThemeToggle;

