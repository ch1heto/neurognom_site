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
      className="rounded-full p-2 text-emerald-700 transition-colors hover:bg-black/5 dark:text-emerald-300 dark:hover:bg-white/10"
    >
      <span className="material-symbols-outlined block text-[22px]">{icon}</span>
    </button>
  );
}

export default ThemeToggle;
